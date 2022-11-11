import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { resets, textSans } from '@guardian/source-foundations';
import { labelThemeDefault } from './theme';

const getLabelTheme = (supportDarkmode?: boolean) => {
	if (!supportDarkmode) return labelThemeDefault.label;
	const useDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return useDark ? labelThemeDefault.labelDark : labelThemeDefault.label;
};

export const legend = css`
	${resets.legend};
`;

export const labelText = (
	supportDarkmode: boolean,
	label = getLabelTheme(supportDarkmode),
): SerializedStyles => css`
	${textSans.medium({ fontWeight: 'bold' })};
	color: ${label.textLabel};
`;

export const optionalText = (
	supportDarkmode: boolean,
	label = getLabelTheme(supportDarkmode),
): SerializedStyles => css`
	${textSans.small()};
	color: ${label.textOptional};
	font-style: italic;
`;

export const supportingText = (
	supportDarkmode: boolean,
	label = getLabelTheme(supportDarkmode),
): SerializedStyles => css`
	${textSans.small()};
	color: ${label.textSupporting};
	margin: 2px 0 0;
`;
