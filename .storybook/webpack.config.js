const path = require('path');
module.exports = ({ config, mode }) => {
	//Get TypeScript working via babel preset
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
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
	config.resolve.extensions.push('.ts', '.tsx');
	config.resolve.alias = {
		'@guardian/src-foundations': path.resolve(
			__dirname,
			'../src/core/foundations/src',
		),
		'@guardian/src-label': path.resolve(
			__dirname,
			'../src/core/components/label',
		),
		'@guardian/src-user-feedback': path.resolve(
			__dirname,
			'../src/core/components/user-feedback',
		),
		'@guardian/src-helpers': path.resolve(__dirname, '../src/core/helpers'),
	};

	return config;
};
