import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-ts';
import pkg from './package.json';

const bundle = (config) => ({
	...config,
	input: 'src/index.ts',
	external: (id) => !/^[./]/.test(id),
});

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	bundle({
		plugins: [ts()],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				file: 'dist/index.cjs.js',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'es',
				file: 'dist/index.js',
				sourcemap: true,
			},
		],
	}),
	bundle({
		plugins: [dts()],
		output: {
			file: pkg.types,
			format: 'es',
		},
	}),
];
