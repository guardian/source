import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
	input: {
		editorial: 'packages/editorial/index.ts',
		source: 'packages/source/index.ts',
	},
	output: {
		format: 'esm',
		sourcemap: true,
		dir: 'dist',
		entryFileNames: '[name]/index.js',
	},

	plugins: [
		typescript({ tsconfig: 'packages/tsconfig.json' }),
		babel({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
			babelHelpers: 'runtime',
			presets: [
				[
					'@babel/preset-react',
					{ runtime: 'automatic', importSource: '@emotion/react' },
				],
			],
			plugins: ['@babel/plugin-transform-runtime'],
		}),
	],
	external: [
		'@emotion/react',
		'@emotion/react/jsx-runtime',
		'@guardian/src-foundations',
		'@guardian/src-foundations/palette',
		'react',
	],
};
