import { css, SerializedStyles } from "@emotion/core"
import {Columns} from "@guardian/src-choice-card";
import {from} from "@guardian/src-foundations/mq";
import {space} from "@guardian/src-foundations";

export const tilesGridContainer = css`
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[2]}px;
			column-gap: ${space[2]}px;
		}
	}
`

const gridColumnsStyle = (columns: Columns) => css`
  	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`

export const tileGridColumns: {[key in Columns]: SerializedStyles } = {
	2: gridColumnsStyle(2),
	3: gridColumnsStyle(3),
	4: gridColumnsStyle(4),
	5: gridColumnsStyle(5),
}
