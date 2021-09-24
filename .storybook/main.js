module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*stories.@(js|jsx|ts|tsx)',
		'../packages/@guardian/source-react-components-development-kitchen/**/*.stories.mdx',
		'../packages/@guardian/source-react-components-development-kitchen/**/*stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
	],
};
