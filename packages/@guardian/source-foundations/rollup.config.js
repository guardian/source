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
		plugins: [ts({ tsconfig: '../../../tsconfig.json' })],
		output: [
			{
				dir: pkg.main.replace('/index.js', ''),
				format: 'cjs',
				sourcemap: true,
				preserveModules: true,
			},
			{
				dir: pkg.module.replace('/index.js', ''),
				format: 'es',
				sourcemap: true,
				preserveModules: true,
			},
		],
	}),
	bundle({
		plugins: [dts()],
		output: {
			dir: pkg.types.replace('/index.d.ts', ''),
			format: 'es',
			preserveModules: true,
		},
	}),
];
