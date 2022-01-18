import nodeResolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-ts';
import pkg from './package.json';

const external = ['@guardian/source-foundations', 'react', /@emotion\/react/];

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
			},
		],
		external,
		plugins: [
			nodeResolve({ extensions: ['.ts', '.tsx', '.mjs', '.jsx', '.js'] }),
			ts({ tsconfig: '../../../tsconfig.json' }),
		],
	},
	{
		input: 'src/index.ts',
		output: {
			file: pkg.types,
			format: 'es',
			sourcemap: true,
		},
		external,
		plugins: [dts()],
	},
];
