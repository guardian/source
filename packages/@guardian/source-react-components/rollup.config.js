import nodeResolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
import pkg from './package.json';

const external = ['@guardian/source-foundations', 'react', /@emotion\/react/];

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	{
		input: 'src/index.ts',
		output: [
			{
				dir: pkg.main.replace('/src/index.js', ''),
				format: 'cjs',
				sourcemap: true,
				preserveModules: true,
			},
			{
				dir: pkg.module.replace('/src/index.js', ''),
				format: 'es',
				sourcemap: true,
				preserveModules: true,
			},
		],
		external,
		plugins: [
			nodeResolve({ extensions: ['.ts', '.tsx', '.mjs', '.jsx', '.js'] }),
			ts({ tsconfig: '../../../tsconfig.json' }),
		],
	},
];
