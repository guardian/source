import ts from 'rollup-plugin-ts';
import pkg from './package.json';

const bundle = (config) => ({
	...config,
	input: 'src/index.ts',
});

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	bundle({
		plugins: [ts()],
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
	}),
];
