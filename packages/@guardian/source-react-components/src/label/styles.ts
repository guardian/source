import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { resets, textSans } from '@guardian/source-foundations';
import { labelThemeDefault } from './theme';

export const legend = css`
	${resets.legend};
`;

export const labelText = (
	label = labelThemeDefault.label,
): SerializedStyles => css`
	${textSans.medium({ fontWeight: 'bold' })};
	color: ${label.textLabel};
`;

export const optionalText = (
	label = labelThemeDefault.label,
): SerializedStyles => css`
	${textSans.small()};
	color: ${label.textOptional};
	font-style: italic;
`;

export const supportingText = (
	label = labelThemeDefault.label,
): SerializedStyles => css`
	${textSans.small()};
	color: ${label.textSupporting};
	margin: 2px 0 0;
`;
