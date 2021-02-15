/* eslint-disable @typescript-eslint/no-var-requires */
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const pkg = require('./package.json');

const input = 'index.ts';

const babelConfig = ({ node = false } = {}) => ({
	extensions: ['js', 'jsx', 'ts', 'tsx'],

	// this how things currently work
	// we should look at this re https://git.io/JtXRp
	babelHelpers: 'bundled',

	presets: [
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
				importSource: '@emotion/react',
			},
		],
		node && [
			'@babel/preset-env',
			{
				targets: { node: 10 },
			},
		],
	].filter(Boolean),
});

const external = ['@emotion/react', '@emotion/react/jsx-runtime', 'react'];

export default [
	{
		input,
		output: {
			format: 'cjs',
			sourcemap: true,
			file: pkg.main,
		},
		plugins: [typescript(), babel(babelConfig({ node: true }))],
		external,
	},
	{
		input,
		output: [
			{
				format: 'esm',
				sourcemap: true,
				file: pkg.module,
			},
		],
		plugins: [typescript(), babel(babelConfig())],
		external,
	},
];
