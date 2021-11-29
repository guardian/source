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
				['@babel/plugin-proposal-decorators', { legacy: true }],
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
		'@guardian/src-foundations': path.resolve(
			__dirname,
			'../packages/@guardian/src-foundations/src',
		),
		'@guardian/src-label': path.resolve(
			__dirname,
			'../packages/@guardian/src-label',
		),
		'@guardian/src-user-feedback': path.resolve(
			__dirname,
			'../packages/@guardian/src-user-feedback',
		),
		'@guardian/src-helpers': path.resolve(
			__dirname,
			'../packages/@guardian/src-helpers',
		),
	};

	return config;
};
