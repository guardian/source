import { ComponentUsageData } from './types';
import { deduplicateComponents } from './deduplicate-components';

const getStatsByComponent = (
	byPackage: Record<string, Record<string, number>>,
) => {
	const byComponent: Record<string, Record<string, number>> = {};
	Object.entries(byPackage).forEach(([pkg, components]) => {
		Object.entries(components).forEach(([component, number]) => {
			if (Object.keys(byComponent).includes(component)) {
				byComponent[component][pkg] = number;
			} else {
				byComponent[component] = {
					[pkg]: number,
				};
			}
		});
	});
	return byComponent;
};

const getUnusedComponentsPercentage = (
	allComponents: string[],
	unusedComponents: string[],
): number => {
	const prefixesToIgnore = [
		'@guardian/src-ed',
		'@guardian/source-react-components-development-kitchen',
	];

	const relevantComponentsFilter = (component: string): boolean => {
		const split = component.split(' | ');
		for (const s of split) {
			for (const prefix of prefixesToIgnore) {
				if (s.startsWith(prefix)) return true;
			}
		}

		return false;
	};

	const fraction =
		unusedComponents.filter(relevantComponentsFilter).length /
		allComponents.filter(relevantComponentsFilter).length;
	return Math.round(fraction * 100);
};

const getComponentsUsedInTwoCodebasesPercentage = (
	allComponents: string[],
	componentUsage: Record<string, Record<string, number>>,
	prefixesToIgnore: string[] = [],
): number => {
	const _prefixesToIgnore = [
		...prefixesToIgnore,
		'@guardian/src-ed',
		'@guardian/source-react-components-development-kitchen',
	];

	const usedInTwo = [];
	for (const [component, codebases] of Object.entries(componentUsage)) {
		if (Object.keys(codebases).length > 1) {
			usedInTwo.push(component);
		}
	}

	const relevantComponentsFilter = (component: string): boolean =>
		_prefixesToIgnore.every((prefix) => !component.startsWith(prefix));

	const fraction =
		deduplicateComponents(usedInTwo.filter(relevantComponentsFilter))
			.length /
		deduplicateComponents(allComponents.filter(relevantComponentsFilter))
			.length;
	return Math.round(fraction * 100);
};

export const getEnrichedResults = (
	componentUsage: ComponentUsageData,
	componentsWithPackage: string[],
) => {
	// Also get the data split by component
	const byComponent = getStatsByComponent(componentUsage);
	const usedComponents = Object.keys(byComponent);

	const unusedComponents = componentsWithPackage
		.filter((c) => !usedComponents.includes(c))
		.sort();

	const onlyOneCodebaseComponents = Object.keys(byComponent)
		.filter((c) => Object.keys(byComponent[c]).length === 1)
		.sort();

	const combinedComponents = deduplicateComponents(componentsWithPackage);

	const unusedComponentsCombined = combinedComponents.filter((c) =>
		usedComponents.every((used) => !c.split(' | ').includes(used)),
	);

	const onlyOneCodebaseComponentsCombined = deduplicateComponents(
		onlyOneCodebaseComponents,
	);

	// Construct the output data object
	return {
		usage: {
			byProject: componentUsage,
			byComponent,
		},
		unusedComponents: {
			notUsedAnywhere: unusedComponents,
			onlyUsedInOneCodebase: onlyOneCodebaseComponents,
			notUsedAnywhereNewOrOld: unusedComponentsCombined,
			onlyUsedInOneCodebaseNewOrOld: onlyOneCodebaseComponentsCombined,
		},
		metrics: {
			percentageOfComponentsNotUsedAnywhere:
				getUnusedComponentsPercentage(
					combinedComponents,
					unusedComponentsCombined,
				),
			percentageOfComponentsUsedInAtLeastTwoCodebases:
				getComponentsUsedInTwoCodebasesPercentage(
					componentsWithPackage,
					byComponent,
				),
			percentageOfComponentsUsedInAtLeastTwoCodebasesIgnoringIconsAndBrand:
				getComponentsUsedInTwoCodebasesPercentage(
					componentsWithPackage,
					byComponent,
					[
						'@guardian/src-icons',
						'@guardian/src-brand',
						'@guardian/source-react-components/Svg',
					],
				),
		},
	};
};
