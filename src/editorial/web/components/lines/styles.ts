import { css } from "@emotion/core"
import { squigglyImage, height as squigglyImageHeight } from "./squiggly"
import { dottedImage, height as dottedImageHeight } from "./dotted"
import { line } from "@guardian/src-foundations/palette"
import { remSpace } from "@guardian/src-foundations"

const lineGap = remSpace[1]

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
	background-position: left;
	height: ${squigglyImageHeight}px;
`

export const dottedLines = css`
	background-image: url(${dottedImage});
	height: ${dottedImageHeight}px;
`
