import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {
	cjsPaths,
	submodulePaths,
} from '../../../scripts/foundations-submodules';

const extensions = ['.ts', '.tsx'];

module.exports = {
	input: 'index.ts',
	output: [
		{
			file: 'dist/helpers.js',
			format: 'cjs',
			sourceMap: true,
			paths: cjsPaths,
		},
		{
			file: 'dist/helpers.esm.js',
			format: 'esm',
			sourceMap: true,
		},
	],
	external: [...submodulePaths],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
};
