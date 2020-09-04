import { css } from "@emotion/core"
import { breakpoints, space } from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"

export const container = css`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${space[3]}px;
	width: 100%;

	${from.tablet} {
		padding: 0 ${space[5]}px;
		width: ${breakpoints.tablet}px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol}px;
	}
	${from.wide} {
		width: ${breakpoints.wide}px;
	}
`
