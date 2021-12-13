import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';
import type { InlineSpace } from './types';

export const inline = css`
	display: flex;
	flex-wrap: wrap;
`;

const inlineSpaceStyle = (number: InlineSpace): SerializedStyles => css`
	margin-left: -${space[number]}px;
	& > * {
		margin-left: ${space[number]}px;
		margin-bottom: ${space[number]}px;
	}
`;

export const inlineSpace: {
	1: SerializedStyles;
	2: SerializedStyles;
	3: SerializedStyles;
	4: SerializedStyles;
	5: SerializedStyles;
	6: SerializedStyles;
	9: SerializedStyles;
	12: SerializedStyles;
	24: SerializedStyles;
} = {
	1: inlineSpaceStyle(1),
	2: inlineSpaceStyle(2),
	3: inlineSpaceStyle(3),
	4: inlineSpaceStyle(4),
	5: inlineSpaceStyle(5),
	6: inlineSpaceStyle(6),
	9: inlineSpaceStyle(9),
	12: inlineSpaceStyle(12),
	24: inlineSpaceStyle(24),
};
