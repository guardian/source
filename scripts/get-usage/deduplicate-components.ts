const componentNameChanges: Record<string, string | undefined> = {
	'@guardian/src-ed-button/Button':
		'@guardian/source-react-components-development-kitchen/EditorialButton',
	'@guardian/src-ed-button/LinkButton':
		'@guardian/source-react-components-development-kitchen/EditorialLinkButton',
};

export const deduplicateComponents = (components: string[]): string[] => {
	const oldComponents: string[] = [];
	const newComponents: string[] = [];

	components.forEach((component) => {
		if (component.startsWith('@guardian/src')) {
			oldComponents.push(component);
		} else {
			newComponents.push(component);
		}
	});

	const dedupedComponents: string[] = [];

	oldComponents.forEach((oldComponent) => {
		const split = oldComponent.split('/');
		const component = split[split.length - 1];

		const newPackage = oldComponent.startsWith('@guardian/src-ed')
			? '@guardian/source-react-components-development-kitchen'
			: '@guardian/source-react-components';

		const newComponent =
			componentNameChanges[oldComponent] ?? `${newPackage}/${component}`;

		if (newComponents.includes(newComponent)) {
			dedupedComponents.push(`${oldComponent} | ${newComponent}`);
			newComponents.splice(newComponents.indexOf(newComponent), 1);
		} else {
			dedupedComponents.push(oldComponent);
		}
	});

	return [...dedupedComponents, ...newComponents];
};
