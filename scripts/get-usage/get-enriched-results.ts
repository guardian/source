import { groupSrcAndSourceEquivalentComponents } from './group-components';
import type { ComponentUsageData } from './types';

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
		groupSrcAndSourceEquivalentComponents(
			usedInTwo.filter(relevantComponentsFilter),
		).length /
		groupSrcAndSourceEquivalentComponents(
			allComponents.filter(relevantComponentsFilter),
		).length;
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

	const combinedComponents = groupSrcAndSourceEquivalentComponents(
		componentsWithPackage,
	);

	const unusedComponentsCombined = combinedComponents.filter((c) =>
		usedComponents.every((used) => !c.split(' | ').includes(used)),
	);

	const onlyOneCodebaseComponentsCombined =
		groupSrcAndSourceEquivalentComponents(onlyOneCodebaseComponents);

	// Construct the output data object
	return {
		docs: {
			usage: {
				byProject:
					'This object lists all of the configured projects along with a list of the components they use and how many times each of those components are imported.',
				byComponent:
					'This object lists all of the Source components that are used by the configured projects and, for each one, the projects that use them and how many times they are imported in each project',
			},
			unusedComponents: {
				notUsedAnywhere:
					'This is a list of all components that are not imported in any of the configured projects',
				onlyUsedInOneCodebase:
					'This is a list of components that are only imported once across the configured projects',
				notUsedAnywhereNewOrOld:
					'This is a list of components, with the new and old equivalents grouped, that are not imported in any of the configured projects',
				onlyUsedInOneCodebaseNewOrOld:
					'This is a list of components, with the new and old equivalents grouped, that are only imported once across the configured projects',
			},
			metrics: {
				percentageOfComponentsNotUsedAnywhere:
					'This metric is the percentage of components, with the new and old equivalents grouped, that are not used anywhere',
				percentageOfComponentsUsedInAtLeastTwoCodebases:
					'This metric is the percentage of components, with the new and old equivalents grouped, that are used in at least two codebases. It ignores components from @guardian/src-ed-* packages and from the kitchen.',
				percentageOfComponentsUsedInAtLeastTwoCodebasesIgnoringIconsAndBrand:
					'This metric is the percentage of components, with the new and old equivalents grouped, that are used in at least two codebases. It ignores components from @guardian/src-ed-*, @guardian/src-brand and @guardian/src-icons packages as well as the kitchen and anything from @guardian/srouce-react-components that starts with Svg.',
				percentageOfComponentsFromSourcePackages:
					'This metric is the percentage of the components which are used that come from an @guardian/source-* package.',
			},
		},
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
			percentageOfComponentsNotUsedAnywhere: getUnusedComponentsPercentage(
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
			percentageOfComponentsFromSourcePackages: Math.round(
				(usedComponents.filter((c) => c.startsWith('@guardian/source')).length /
					usedComponents.length) *
					100,
			),
		},
	};
};
