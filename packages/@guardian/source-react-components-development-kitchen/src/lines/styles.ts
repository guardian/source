import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { remSpace } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const lineGap = remSpace[1];

export const straightLines = (
	count: LineCount,
	color: string,
): SerializedStyles => {
	switch (count) {
		case 1:
			return css`
				background-color: ${color};
				background-repeat: repeat-x;
				background-size: 1px;
				height: 1px;
			`;
		case 4:
		case 8:
		default:
			return css`
				background-image: repeating-linear-gradient(
					to bottom,
					${color},
					${color} 1px,
					transparent 1px,
					transparent ${lineGap}
				);
				background-repeat: repeat-x;
				background-position: top;
				background-size: 1px calc(${lineGap} * ${count - 1} + 1px);
				height: calc(${lineGap} * ${count - 1} + 1px);
			`;
	}
};
