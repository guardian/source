const nodeModulesExclude = [
	{
		test: /node_modules/,
		exclude: [/@guardian\//],
	},
];

module.exports = ({ config, mode }) => {
	//Get TypeScript working via babel preset
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		exclude: nodeModulesExclude,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [
				'@babel/preset-env',
				'@babel/preset-typescript',
				'@emotion/babel-preset-css-prop',
			],
			plugins: ['@babel/plugin-proposal-class-properties'],
		},
	});

	// update storybook webpack config to transpile *all* JS
	config.module.rules.find(
		(rule) => String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/),
	).exclude = nodeModulesExclude;

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
