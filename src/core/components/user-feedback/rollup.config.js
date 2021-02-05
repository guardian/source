import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {
	cjsPaths,
	submodulePaths,
} from '../../../../scripts/foundations-submodules';

const extensions = ['.ts', '.tsx'];

module.exports = {
	input: 'index.tsx',
	output: [
		{
			file: 'dist/user-feedback.js',
			format: 'cjs',
			sourceMap: true,
			paths: cjsPaths,
		},
		{
			file: 'dist/user-feedback.esm.js',
			format: 'esm',
			sourceMap: true,
		},
	],
	external: [
		'react',
		'@emotion/react',
		'@emotion/css',
		'@guardian/src-foundations',
		...submodulePaths,
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
};
