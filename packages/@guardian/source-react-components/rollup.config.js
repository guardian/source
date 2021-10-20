import path from 'path';
import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
import pkg from './package.json';

// rewrite '@guardian/src-foundations/*' imports in the final bundle to
// '@guardian/source-foundations'.
//
// n.b. we don't include '@guardian/src-foundations/themes', but
// there shouldn't be any need because they're not counted as `external`
// below
const paths = {
	'@guardian/src-foundations': '@guardian/source-foundations',
	'@guardian/src-foundations/accessibility': '@guardian/source-foundations',
	'@guardian/src-foundations/mq': '@guardian/source-foundations',
	'@guardian/src-foundations/palette': '@guardian/source-foundations',
	'@guardian/src-foundations/size': '@guardian/source-foundations',
	'@guardian/src-foundations/typography': '@guardian/source-foundations',
	'@guardian/src-foundations/utils': '@guardian/source-foundations',
};

// eslint-disable-next-line import/no-default-export -- it's what rollup wants
export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
				paths,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
				paths,
			},
		],
		external: [
			// n.b. no '@guardian/src-foundations/themes',
			// we're intentionally bundling them.
			'@guardian/src-foundations',
			'@guardian/src-foundations/accessibility',
			'@guardian/src-foundations/mq',
			'@guardian/src-foundations/palette',
			'@guardian/src-foundations/size',
			'@guardian/src-foundations/typography',
			'@guardian/src-foundations/utils',
			'@guardian/source-foundations',
			'react',
			/@emotion\/react/,
		],
		plugins: [
			alias({
				resolver: nodeResolve({
					extensions: ['.ts', '.tsx', '.mjs', '.jsx', '.js'],
				}),
				// prettier-ignore
				entries: {
					// special rule for themes - these are not being moved to
					// '../source-foundations'
					'@guardian/src-foundations/themes': path.resolve('../', 'src-foundations/src/themes'),

					// this redirects all other '@guardian/src-foundations/*'
					// imports to `source-foundations` source code
					'@guardian/src-foundations': path.resolve('../', '../source-foundations'),

					'@guardian/src-accordion': path.resolve('../','src-accordion/index'),
					'@guardian/src-brand': path.resolve('../','src-brand/index'),
					'@guardian/src-button': path.resolve('../','src-button/index'),
					'@guardian/src-checkbox': path.resolve('../','src-checkbox/index'),
					'@guardian/src-choice-card': path.resolve('../','src-choice-card/index'),
					'@guardian/src-footer': path.resolve('../', 'src-footer/index'),
					'@guardian/src-helpers': path.resolve('../','src-helpers/index'),
					'@guardian/src-icons': path.resolve('../','src-icons/index'),
					'@guardian/src-label': path.resolve('../','src-label/index'),
					'@guardian/src-layout': path.resolve('../','src-layout/index'),
					'@guardian/src-link': path.resolve('../', 'src-link/index'),
					'@guardian/src-radio': path.resolve('../','src-radio/index'),
					'@guardian/src-select': path.resolve('../','src-select/index'),
					'@guardian/src-text-area': path.resolve('../','src-text-area/index'),
					'@guardian/src-text-input': path.resolve('../','src-text-input/index'),
					'@guardian/src-user-feedback': path.resolve('../','src-user-feedback/index'),
				},
			}),
			nodeResolve({ extensions: ['.ts', '.tsx', '.mjs', '.jsx', '.js'] }),
			ts(),
		],
	},
];
