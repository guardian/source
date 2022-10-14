import type { TransformOptions } from '@babel/core';
import { transform } from '@svgr/core';
import type { Config } from '@svgr/core';
import { labels } from '../../src/icons/labels';

// SVGR uses babel under the hood to create the jsx
// this is our custom transform for it to use
const createBabelConfig = ({ retainFill }: { retainFill: boolean }) => {
	const babelConfig: TransformOptions = {};
	const plugins = [];

	// remove fill attribute from all icons except those with special fill colours
	if (!retainFill) {
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

type CreateIconComponentProps = {
	icon: { name: string; svg: string };
	retainFill: boolean;
	isWideIcon: boolean;
};
export const createIconComponent = async ({
	icon,
	retainFill,
	isWideIcon,
}: CreateIconComponentProps) => {
	// SVGR template
	// https://react-svgr.com/docs/node-api/
	const template: Config['template'] = (variables, { tpl }) => {
		return tpl`
			import { css } from '@emotion/react';
			import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
			import { iconSize, visuallyHidden } from '@guardian/source-foundations';
			import type { IconProps } from '../../src/@types/Icons';

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
		width: isWideIcon ? '{undefined}' : '{size ? iconSize[size] : undefined}',
		height: isWideIcon ? '{size ? iconSize[size] : undefined}' : '{undefined}',
	};

	const svgComponentName = 'Svg';

	const iconComponentName =
		'Svg' +
		icon.name
			.split('-')
			.map((s) => {
				const [firstLetter, ...rest] = s;
				if (firstLetter) {
					return firstLetter.toLocaleUpperCase() + rest.join('');
				}
				return s;
			})
			.join('');

	const iconComponent = await transform(
		icon.svg,
		{
			icon: true,
			plugins: [
				'@svgr/plugin-svgo',
				'@svgr/plugin-jsx',
				'@svgr/plugin-prettier',
			],
			jsx: {
				babelConfig: createBabelConfig({ retainFill }),
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

	const label = labels[icon.name];

	if (!label) {
		throw new Error(`No label found for ${icon.name}`);
	}

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
						${label}
					</span>
				) : (
					''
				)}
			</>
		);`;
	return {
		componentName: iconComponentName,
		component: [iconComponent, iconComponentExport].join('\n'),
	};
};
