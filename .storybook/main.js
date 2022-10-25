module.exports = {
	stories: [
		'../packages/@guardian/source-react-components/stories/**/*.stories.mdx',
		'../packages/@guardian/source-react-components/stories/**/*.stories.@(js|jsx|ts|tsx)',
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
