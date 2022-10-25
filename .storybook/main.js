module.exports = {
	stories: [
		'../packages/**/*.stories.mdx',
		'../packages/**/*stories.@(js|jsx|ts|tsx)',
		'../docs/**/*.stories.mdx',
	],
	addons: [
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-docs',
			options: {
				transcludeMarkdown: true,
			},
		},
		'@storybook/addon-essentials',
		'@storybook/addon-links',
	],
	features: {
		emotionAlias: false,
	},
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
