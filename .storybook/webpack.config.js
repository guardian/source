const path = require('path');

const nodeModulesExclude = {
	and: [/node_modules/],
	not: [/@guardian\//],
};

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config, mode }) => {
	//Get TypeScript working via babel preset
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		exclude: nodeModulesExclude,
		use: [
			{
				loader: require.resolve('babel-loader'),
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-typescript',
						[
							'@babel/preset-react',
							{
								runtime: 'automatic',
								importSource: '@emotion/react',
							},
						],
					],
					plugins: [
						'@babel/plugin-proposal-class-properties',
						'@emotion/babel-plugin',
					],
				},
			},
		],
	});

	// update storybook webpack config to transpile *all* JS
	config.module.rules.find(
		(rule) => String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/),
	).exclude = nodeModulesExclude;

	config.resolve.extensions.push('.ts', '.tsx');

	config.resolve.plugins || (config.resolve.plugins = []);
	config.resolve.plugins.push(
		new TsconfigPathsPlugin({
			configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
			extensions: config.resolve.extensions,
			mainFields: config.resolve.mainFields,
		}),
	);

	return config;
};
