module.exports = {
	stories: [
		'../packages/@guardian/source-react-components/stories/**/*.stories.mdx',
		'../packages/@guardian/source-react-components/stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-docs',
			options: {
				transcludeMarkdown: true,
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
