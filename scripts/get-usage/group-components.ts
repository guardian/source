const componentNameChanges: Record<string, string | undefined> = {
	'@guardian/src-ed-button/Button':
		'@guardian/source-react-components-development-kitchen/EditorialButton',
	'@guardian/src-ed-button/LinkButton':
		'@guardian/source-react-components-development-kitchen/EditorialLinkButton',
};

export const groupSrcAndSourceEquivalentComponents = (
	components: string[],
): string[] => {
	const srcComponents: string[] = [];
	const sourceComponents: string[] = [];

	components.forEach((component) => {
		if (component.startsWith('@guardian/src')) {
			srcComponents.push(component);
		} else {
			sourceComponents.push(component);
		}
	});

	const dedupedComponents: string[] = [];

	srcComponents.forEach((srcComponent) => {
		const split = srcComponent.split('/');
		const component = split[split.length - 1];

		const newPackage = srcComponent.startsWith('@guardian/src-ed')
			? '@guardian/source-react-components-development-kitchen'
			: '@guardian/source-react-components';

		const newComponent =
			componentNameChanges[srcComponent] ?? `${newPackage}/${component}`;

		if (sourceComponents.includes(newComponent)) {
			dedupedComponents.push(`${srcComponent} | ${newComponent}`);
			sourceComponents.splice(sourceComponents.indexOf(newComponent), 1);
		} else {
			dedupedComponents.push(srcComponent);
		}
	});

	return [...dedupedComponents, ...sourceComponents];
};
