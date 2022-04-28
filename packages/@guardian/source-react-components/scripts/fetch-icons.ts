import { promises } from 'fs';
import path from 'path';
import type { TransformOptions } from '@babel/core';
import { transform } from '@svgr/core';
import type { Config } from '@svgr/core';
import axios from 'axios';
import mkdirp from 'mkdirp';
import { labels } from '../src/icons/labels';

const { writeFile, rm } = promises;

/**
 * Fetch Icons from Figma
 * ==========================
 * Run this script manually using:
 *
 * `yarn workspace @guardian/source-react-components fetch-icons`
 *
 * to pull in updates to icons from Figma.
 *
 * We decided not to run it as part of the build process to ensure we don't
 * inadvertently pick up changes to icons as part of an unrelated change.
 */

interface FigmaComponentsResponse {
	meta: {
		components: Array<{
			containing_frame?: {
				name: string;
			};
			name: string;
			node_id: string;
			description: string;
		}>;
	};
}

interface FigmaImagesResponse {
	images: Record<string, string>;
}

const readme = `
# Icons

**The contents of this directory are created automatically. Any edits will be
overwritten sooner or later.**

The SVGs for these icons are automatically pulled in from the [source design file in
Figma](https://www.figma.com/file/Ai7AELHC6KCz38qKZkvuHo/%E2%97%90-Icons?node-id=55%3A2)
using the fetch-icons script via the Figma API:

\`\`\`sh
yarn workspace @guardian/source-react-components fetch-icons
\`\`\`
`;

const vendorIconPath = path.resolve(__dirname, '..', 'src', 'vendor', 'icons');

const ICONS_WITH_FILL_COLOURS = [
	'apple-brand',
	'facebook-brand',
	'google-brand',
	'pay-pal-brand',
];

const WIDE_ICONS = ['direct-debit-wide'];

const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

const FIGMA_API_OPTIONS = {
	headers: {
		'X-Figma-Token': process.env.FIGMA_TOKEN ?? 'ADD ME!!!',
	},
};

const createBabelConfig = (iconName: string) => {
	const babelConfig: TransformOptions = {};
	const plugins = [];

	// remove fill attribute from all icons except those with special fill colours
	if (!ICONS_WITH_FILL_COLOURS.includes(iconName)) {
		plugins.push([
			'@svgr/babel-plugin-remove-jsx-attribute',
			{
				elements: ['svg', 'path'],
				attributes: ['fill'],
			},
		]);
	}

	// replace viewbox with legacy 30x30 viewbox
	// TODO: a future version of Source should expose icons with the viewboxes
	// defined in Figma
	plugins.push([
		'@svgr/babel-plugin-replace-jsx-attribute-value',
		{
			values: [
				{ value: '0 0 24 24', newValue: '-3 -3 30 30' },
				// legacy 50x20 wide viewbox
				{ value: '0 0 48 24', newValue: '-1 2 50 20' },
			],
		},
	]);

	if (plugins.length === 0) {
		return {};
	}

	babelConfig.plugins = plugins;

	return babelConfig;
};

void (async () => {
	try {
		await rm(vendorIconPath, { recursive: true });
	} catch (e) {
		// do nothing
	}
	await mkdirp(vendorIconPath);
	await writeFile(path.resolve(vendorIconPath, 'README.md'), readme, 'utf8');

	// Fetch icon components
	// https://www.figma.com/developers/api#library-items-types
	const figmaComponents = (
		await axios.get<FigmaComponentsResponse>(
			`https://api.figma.com/v1/files/${ICON_FILE}/components`,
			{
				headers: {
					'X-Figma-Token': process.env.FIGMA_TOKEN ?? 'ADD ME!!!',
				},
			},
		)
	).data.meta.components;

	const figmaIconComponents = figmaComponents.filter((c) => {
		return (
			// Only get icons that are in a certain frame
			c.containing_frame &&
			c.containing_frame.name === 'UI icons 24(w)x24(w)'
		);
	});

	const iconIds = figmaIconComponents.map(({ node_id }) => node_id).join(',');

	// Fetch icon images - this gives us the image URLs
	// https://www.figma.com/developers/api#get-images-endpoint
	const figmaIconSvgUrlsByNodeId = (
		await axios.get<FigmaImagesResponse>(
			`https://api.figma.com/v1/images/${ICON_FILE}/?ids=${iconIds}&format=svg`,
			FIGMA_API_OPTIONS,
		)
	).data.images;

	for (const icon of figmaIconComponents) {
		const url = figmaIconSvgUrlsByNodeId[icon.node_id];

		// Fetch SVG markup from Figma
		const svg = (await axios.get<string>(url)).data;

		// SVGR template
		// https://react-svgr.com/docs/node-api/
		const template: Config['template'] = (variables, { tpl }) => {
			return tpl`
			import { css } from '@emotion/react';
			import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
			import { iconSize, visuallyHidden } from '@guardian/source-foundations';
			import type { IconProps } from '../../@types/Icons';

			${variables.imports};

			const ${variables.componentName} = ({
				size,
			}: IconProps): EmotionJSX.Element => (
				${variables.jsx}
			);
		  `;
		};

		const svgProps = {
			focusable: '{false}',
			'aria-hidden': '{true}',
			width: WIDE_ICONS.includes(icon.name)
				? '{undefined}'
				: '{size ? iconSize[size] : undefined}',
			height: WIDE_ICONS.includes(icon.name)
				? '{size ? iconSize[size] : undefined}'
				: '{undefined}',
		};

		const babelConfig = createBabelConfig(icon.name);

		const svgComponentName = 'Svg';

		const iconComponentName =
			'Svg' +
			icon.name
				.split('-')
				.map((s) => {
					const [firstLetter, ...rest] = s;
					return firstLetter.toLocaleUpperCase() + rest.join('');
				})
				.join('');

		const iconComponent = await transform(
			svg,
			{
				icon: true,
				plugins: [
					'@svgr/plugin-svgo',
					'@svgr/plugin-jsx',
					'@svgr/plugin-prettier',
				],
				jsx: {
					babelConfig,
				},
				typescript: true,
				jsxRuntime: 'automatic',
				expandProps: false,
				svgProps,
				template,
			},
			{
				componentName: svgComponentName,
			},
		);

		const iconComponentExport = `
		export const ${iconComponentName} = ({
			size,
			isAnnouncedByScreenReader = false,
		}: IconProps): EmotionJSX.Element => (
			<>
				<${svgComponentName} size={size} />
				{isAnnouncedByScreenReader ? (
					<span
						css={css\`
							\${visuallyHidden}
						\`}
					>
						${labels[icon.name]}
					</span>
				) : (
					''
				)}
			</>
		);
		`;

		await writeFile(
			path.resolve(vendorIconPath, `${iconComponentName}.tsx`),
			[iconComponent, iconComponentExport].join('\n'),
			'utf8',
		);
	}
})();
