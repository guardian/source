import { css } from "@emotion/core"
import { breakpoints, space } from "@guardian/src-foundations"
import { from, until } from "@guardian/src-foundations/mq"
import { border } from "@guardian/src-foundations/palette"

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

export const containerBorder = css`
	border: 1px solid ${border.primary};

	${from.tablet} {
		width: ${breakpoints.tablet + 2}px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop + 2}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol + 2}px;
	}
	${from.wide} {
		width: ${breakpoints.wide + 2}px;
	}
`

export const columns = css`
	box-sizing: border-box;
	display: flex;

	& > * + * {
		margin-left: ${space[5]}px;
	}
`

export const columnsNotCollapsed = css``

export const collapseBelowTabletColumns = css`
	${until.tablet} {
		display: block;
		& > * + * {
			margin-left: 0;
		}
	}
`
export const collapseBelowDesktopColumns = css`
	${until.desktop} {
		display: block;
		& > * + * {
			margin-left: 0;
		}
	}
`
export const collapseBelowLeftColColumns = css`
	${until.leftCol} {
		display: block;
		& > * + * {
			margin-left: 0;
		}
	}
`
export const collapseBelowWideColumns = css`
	${until.wide} {
		display: block;
		& > * + * {
			margin-left: 0;
		}
	}
`

export const collapseBelowTablet = css`
	& > * {
		${until.tablet} {
			width: 100%;
		}
	}
`
export const collapseBelowDesktop = css`
	& > * {
		${until.desktop} {
			width: 100%;
		}
	}
`
export const collapseBelowleftCol = css`
	& > * {
		${until.leftCol} {
			width: 100%;
		}
	}
`
export const collapseBelowWide = css`
	& > * {
		${until.wide} {
			width: 100%;
		}
	}
`

export const column = (width: number) => css`
	box-sizing: border-box;

	flex: ${width ? 0 : 1} 0 auto;
	${width
		? `width: calc((100% + ${space[5]}px) * ${width} - ${space[5]}px);`
		: ""}
`
