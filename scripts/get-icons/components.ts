import { kebabToTitle } from './case';
import { WIDE_ICONS } from './config';

export const generateReactComponent = (
	name: string,
	svg: string,
	label: string,
): string => {
	const visuallyHiddenToken = 'css`${visuallyHidden}`';
	const svgWidthProp = 'width={size ? iconSize[size] : undefined}';
	const svgHeightProp = 'height={size ? iconSize[size] : undefined}';
	const svgAccessibleProps = ['aria-hidden={true}', 'focusable={false}'];
	const svgAdditionalProps = [
		/**
		 * For wide (48x24) icons we modify the height instead of the width.
		 * */
		WIDE_ICONS.includes(name) ? svgHeightProp : svgWidthProp,
		...svgAccessibleProps,
	].join(' ');

	return `
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const Svg${kebabToTitle(name)} = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
	${replaceStyleAttribute(
		svg
			.split('\n')
			.map((line) => `\t\t${line}`)
			.join('\n')
			.replace(/>/i, `${svgAdditionalProps}>`)
			.replace(/fill-rule/gi, 'fillRule')
			.replace(/clip-rule/gi, 'clipRule'),
	)}
			{isAnnouncedByScreenReader ? (
				<span
					css={${visuallyHiddenToken}}
				>
					${label}
				</span>
			) : (
				''
			)}
		</>
	);
};
`;
};

const replaceStyleAttribute = (source: string): string => {
	const matches = source.matchAll(/style=".*"/gi);

	for (const match of matches) {
		const value = match.toString();
		const replacement = getStyleReplacement(value);
		source = source.replace(value, replacement);
	}
	return source;
};

const getStyleReplacement = (style: string): string => {
	return style
		.replace('style=', '')
		.replace(/"/gi, '')
		.split(';')
		.map((item) => {
			const [key, value] = item.split(':');
			return `${key}="${value}"`;
		})
		.join('\n\t\t');
};

export const _ = { replaceStyleAttribute, getStyleReplacement };
