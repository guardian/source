import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json';

const bundle = (config) => ({
	...config,
	input: 'src/index.ts',
	external: (id) => !/^[./]/.test(id),
});

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	bundle({
		plugins: [esbuild()],
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
	bundle({
		plugins: [dts()],
		output: {
			file: pkg.types,
			format: 'es',
		},
	}),
];
