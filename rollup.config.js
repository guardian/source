import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
	input: {
		// editorial: 'packages/editorial/src/index.tsx',
		source: 'packages/source/src/index.ts',
		// 'src-foundations': 'packages/src-foundations/src/index.ts',
		// 'src-brand': 'packages/src-brand/index.ts',
		// 'src-accordion': 'packages/src-components/accordion/index.tsx',
		// 'src-button': 'packages/src-components/button/index.tsx',
		// 'src-checkbox': 'packages/src-components/checkbox/index.tsx',
		// 'src-choice-card': 'packages/src-components/choice-card/index.tsx',
		// 'src-footer': 'packages/src-components/footer/index.tsx',
		// 'src-label': 'packages/src-components/label/index.tsx',
		// 'src-layout': 'packages/src-components/layout/index.tsx',
		// 'src-link': 'packages/src-components/link/index.tsx',
		// 'src-radio': 'packages/src-components/radio/index.tsx',
		// 'src-select': 'packages/src-components/select/index.tsx',
		// 'src-text-area': 'packages/src-components/text-area/index.tsx',
		// 'src-text-input': 'packages/src-components/text-input/index.tsx',
		// 'src-user-feedback': 'packages/src-components/user-feedback/index.tsx',
		// 'src-helpers': 'packages/src-helpers/index.ts',
		// 'src-src-icons': 'packages/src-icons/index.ts',
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
