import { css } from '@emotion/react';
import { squigglyImage, height as squigglyImageHeight } from './squiggly';
import { dottedImage, height as dottedImageHeight } from './dotted';
import { labsImage, height as labsImageHeight} from './labs'
import { line } from '@guardian/src-foundations/palette';
import { remSpace } from '@guardian/src-foundations';
import { LineCount } from '.';

const lineGap = remSpace[1];

export const straightLines = css`
	background-image: repeating-linear-gradient(
		to bottom,
		${line.primary},
		${line.primary} 1px,
		transparent 1px,
		transparent ${lineGap}
	);
	background-repeat: repeat-x;
	background-position: top;
`;

export const fourLines = css`
	background-size: 1px calc(${lineGap} * 3 + 1px);
	height: calc(${lineGap} * 3 + 1px);
`;

export const eightLines = css`
	background-size: 1px calc(${lineGap} * 7 + 1px);
	height: calc(${lineGap} * 7 + 1px);
`;

export const squigglyLines = (count: LineCount) => css`
	background-image: url(${squigglyImage(count)});
	background-repeat: repeat-x;
	background-position: left;
	height: ${squigglyImageHeight(count)}px;
`;

export const dottedLines = (count: LineCount) => css`
	background-image: url(${dottedImage(count)});
	height: ${dottedImageHeight(count)}px;
`;

export const labsLines = (count : LineCount) => css`
	background-image: url(${labsImage(count)});
	background-repeat: repeat;
	background-position: top center;
	height: ${labsImageHeight(count)}px;
`
