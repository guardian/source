import { css } from "@emotion/core"
import { squigglyImage } from "./squiggly"
import { dottedImage } from "./dotted"
import { border } from "@guardian/src-foundations/palette"
import { remSpace } from "@guardian/src-foundations"

const lineGap = remSpace[1]

export const straightLines = css`
	background-image: repeating-linear-gradient(
		to bottom,
		${border.secondary},
		${border.secondary} 1px,
		transparent 1px,
		transparent ${lineGap}
	);
	background-repeat: repeat-x;
	background-position: top;
`

export const fourLines = css`
	background-size: 1px calc(${lineGap} * 3 + 1px);
	height: calc(${lineGap} * 3 + 1px);
`

export const eightLines = css`
	background-size: 1px calc(${lineGap} * 7 + 1px);
	height: calc(${lineGap} * 7 + 1px);
`

export const squigglyLines = css`
	background-image: url(${squigglyImage});
	background-repeat: repeat-x;
	background-size: 199px; /* magic number that scales the svg perfectly */
	background-position: top;
	height: calc(${lineGap} * 3 + 1px);
`

export const dottedLines = css`
	background-image: url(${dottedImage});
	background-size: 10px; /* magic number that scales the svg perfectly */
	height: calc(${lineGap} * 3 + 1px);
`
