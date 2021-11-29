import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import ts from 'rollup-plugin-ts';
// import copy from 'rollup-plugin-copy';

// // Static assets will vary depending on the application
// const copyConfig = {
// 	targets: [
// 		{
// 			src: 'node_modules/@webcomponents',
// 			dest: 'build-modern/node_modules',
// 		},
// 		{ src: 'images', dest: 'build-modern' },
// 		{ src: 'data', dest: 'build-modern' },
// 		{ src: 'index.html', dest: 'build-modern' },
// 	],
// };

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'es',
	},
	plugins: [minifyHTML() /*copy(copyConfig)*/, , resolve(), ts()],
	preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
	config.plugins.push(terser());
}

export default config;
