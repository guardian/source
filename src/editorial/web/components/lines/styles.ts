import { css } from '@emotion/react';
import { squigglyImage, height as squigglyImageHeight } from './squiggly';
import { dottedImage, height as dottedImageHeight } from './dotted';
import { dashedImage, height as labsImageHeight } from './dashed';
import { remSpace } from '@guardian/src-foundations';
import { LineCount } from '.';

const lineGap = remSpace[1];

export const straightLines = (count: LineCount, color: string) => {
	const baseStyles = css`
		background-image: repeating-linear-gradient(
			to bottom,
			${color},
			${color} 1px,
			transparent 1px,
			transparent ${lineGap}
		);
		background-repeat: repeat-x;
		background-position: top;
	`;

	switch (count) {
		case 1:
			return css`
				${baseStyles};
				background-size: 1px;
				height: 1px;
			`;
		case 4:
			return css`
				${baseStyles};
				background-size: 1px calc(${lineGap} * 3 + 1px);
				height: calc(${lineGap} * 3 + 1px);
			`;
		case 8:
			return css`
				${baseStyles};
				background-size: 1px calc(${lineGap} * 7 + 1px);
				height: calc(${lineGap} * 7 + 1px);
			`;
	}
};

export const squigglyLines = (count: LineCount, color: string) => css`
	background-image: url(${squigglyImage(count, color)});
	background-repeat: repeat-x;
	background-position: left;
	height: ${squigglyImageHeight(count)}px;
`;

export const dottedLines = (count: LineCount, color: string) => css`
	background-image: url(${dottedImage(count, color)});
	height: ${dottedImageHeight(count)}px;
`;

export const dashedLines = (count: LineCount, color: string) => css`
	background-image: url(${dashedImage(count, color)});
	background-repeat: repeat;
	background-position: top center;
	height: ${labsImageHeight(count)}px;
`;
