module.exports = {
	stories: [`../src/**/*stories.tsx`],
	addons: ["@storybook/addon-backgrounds", "@storybook/addon-viewport"],
	babel: async (options) => ({
		...options,
		presets: [
			...options.presets,
			[
				"@babel/preset-react",
				{
					runtime: "automatic",
				},
				"preset-react-jsx-transform", // Must provide a name to avoid clashing
			],
		],
	}),
}
