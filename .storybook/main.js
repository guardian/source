module.exports = {
	stories: [
		// '../packages/**/*.stories.mdx',
		// '../packages/**/*stories.@(js|jsx|ts|tsx)',
		// '../docs/**/*.stories.mdx',
		'../packages/@guardian/source-lit-components/**/*stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
	],
};
