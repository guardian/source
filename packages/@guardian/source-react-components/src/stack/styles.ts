import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';
import type { StackSpace } from './Stack';

export const stack = css`
	& > * {
		width: 100%;
	}
`;

const stackSpaceStyle = (number: StackSpace): SerializedStyles => css`
	& > * + * {
		margin-top: ${space[number]}px;
	}
`;

export const stackSpace: {
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
	1: stackSpaceStyle(1),
	2: stackSpaceStyle(2),
	3: stackSpaceStyle(3),
	4: stackSpaceStyle(4),
	5: stackSpaceStyle(5),
	6: stackSpaceStyle(6),
	9: stackSpaceStyle(9),
	12: stackSpaceStyle(12),
	24: stackSpaceStyle(24),
};
