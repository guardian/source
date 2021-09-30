module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*stories.@(js|jsx|ts|tsx)',
		'../packages/**/*.stories.mdx',
		'../packages/**/*stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
	],
};
