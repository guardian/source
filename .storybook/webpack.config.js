const path = require('path');

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
	});

	// update storybook webpack config to transpile *all* JS
	config.module.rules.find(
		(rule) => String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/),
	).exclude = nodeModulesExclude;

	config.resolve.extensions.push('.ts', '.tsx');
	config.resolve.alias = {
		'@guardian/source-foundations': path.resolve(
			__dirname,
			'../packages/@guardian/source-foundations/src',
		),
		'@guardian/source-react-components': path.resolve(
			__dirname,
			'../packages/@guardian/source-react-components/src',
		),
		'@guardian/source-react-components-development-kitchen': path.resolve(
			__dirname,
			'../packages/@guardian/source-react-components-development-kitchen/src',
		),
	};

	return config;
};
