export const generateReactComponent = (
	name: string,
	svg: string,
	label: string,
): string => {
	const svgAdditionalProps = `width={size ? iconSize[size] : undefined}
		aria-hidden={true}
		focusable={false}`;
	const visuallyHiddenToken = 'css`${visuallyHidden}`';

	return `
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const Svg${name} = ({
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
