import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
	input: ['packages/editorial/src/index.tsx'],
	output: [
		{
			dir: 'dist/editorial',
			format: 'esm',
			sourcemap: true,
		},
	],
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
