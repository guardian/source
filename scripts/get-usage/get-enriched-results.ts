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
	usedComponents: string[],
): number => {
	const prefixesToIgnore = ['@guardian/src-ed', '@guardian/source-'];

	const relevantComponentsFilter = (component: string): boolean =>
		prefixesToIgnore.every((prefix) => !component.startsWith(prefix));

	const fraction =
		usedComponents.filter(relevantComponentsFilter).length /
		allComponents.filter(relevantComponentsFilter).length;
	return Math.round(100 - fraction * 100);
};

const getComponentsUsedInTwoCodebasesPercentage = (
	allComponents: string[],
	componentUsage: Record<string, Record<string, number>>,
	prefixesToIgnore: string[] = [],
): number => {
	const _prefixesToIgnore = [
		...prefixesToIgnore,
		'@guardian/src-ed',
		'@guardian/source-',
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
		usedInTwo.filter(relevantComponentsFilter).length /
		allComponents.filter(relevantComponentsFilter).length;
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

	const unusedComponentsCombined = deduplicateComponents(unusedComponents);

	// Construct the output data object
	return {
		usage: {
			byProject: componentUsage,
			byComponent,
		},
		unusedComponents: {
			notUsedAnywhere: unusedComponents,
			onlyUsedInOneCodebase: Object.keys(byComponent)
				.filter((c) => Object.keys(byComponent[c]).length === 1)
				.sort(),
			notUsedAnywhereCombined: unusedComponentsCombined,
			onlyUsedInOneCodebaseCombined: deduplicateComponents(
				Object.keys(byComponent)
					.filter((c) => Object.keys(byComponent[c]).length === 1)
					.sort(),
			),
		},
		metrics: {
			percentageOfComponentsNotUsedAnywhere:
				getUnusedComponentsPercentage(
					componentsWithPackage,
					usedComponents,
				),
			percentageOfComponentsUsedInAtLeastTwoCodebases:
				getComponentsUsedInTwoCodebasesPercentage(
					componentsWithPackage,
					byComponent,
				),
			percentageOfComponentsUsedInAtLeastTwoCodebasesIgnoringIcons:
				getComponentsUsedInTwoCodebasesPercentage(
					componentsWithPackage,
					byComponent,
					['@guardian/src-icons'],
				),
			percentageOfComponentsUsedInAtLeastTwoCodebasesIgnoringIconsAndBrand:
				getComponentsUsedInTwoCodebasesPercentage(
					componentsWithPackage,
					byComponent,
					['@guardian/src-icons', '@guardian/src-brand'],
				),
		},
	};
};
