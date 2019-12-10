import { css } from "@emotion/core"
import {
	Breakpoint,
	space,
	breakpoints,
	palette,
} from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"

const gridBreakpoints: readonly Extract<
	Breakpoint,
	"tablet" | "desktop" | "leftCol" | "wide"
>[] = ["tablet", "desktop", "leftCol", "wide"] as const
type GridBreakpoints = typeof gridBreakpoints[number]

type GridColumns = {
	[key in GridBreakpoints]: number
}

type ContainerWidths = {
	[key in GridBreakpoints]: number
}

const gridColumns: GridColumns = {
	tablet: 12,
	desktop: 12,
	leftCol: 14,
	wide: 16,
}

const containerWidths: ContainerWidths = {
	tablet: breakpoints.tablet,
	desktop: breakpoints.desktop,
	leftCol: breakpoints.leftCol,
	wide: breakpoints.wide,
}

export const gridContainer = css`
	@supports (display: grid) {
		display: grid;
	}

	padding: 0 ${space[3]}px;
	grid-auto-columns: max-content;
	column-gap: ${space[5]}px;

	width: 100%;
	grid-template-columns: repeat(4, 1fr);

	${from.tablet} {
		padding: 0 ${space[5]}px;
	}

	${gridBreakpoints.reduce((acc, breakpoint) => {
		return `${acc}
			${from[breakpoint]} {
				width: ${containerWidths[breakpoint]}px;
				grid-template-columns: repeat(${gridColumns[breakpoint]}, 1fr);
			}
		`
	}, "")}
`
const borderRightStyle = css`
	border-right: 1px solid ${palette.border.secondary};
	padding-right: ${space[5] / 2}px;
	margin-right: ${-space[5] / 2}px;
`

const gridItemBreakpoints: readonly Extract<
	Breakpoint,
	"mobile" | "tablet" | "desktop" | "leftCol" | "wide"
>[] = ["mobile", "tablet", "desktop", "leftCol", "wide"] as const
type GridItemBreakpoints = typeof gridItemBreakpoints[number]

export type Spans = {
	[key in GridItemBreakpoints]?: number
}

export type StartingPos = {
	[key in GridItemBreakpoints]?: number
}

const gridItemSpans = (spans: Spans) => {
	let minimumBreakpointSet = false
	let style = ""

	for (let i = 0; i < gridItemBreakpoints.length; i += 1) {
		const breakpoint = gridItemBreakpoints[i]

		if (spans[breakpoint]) {
			style = `${style}
				${from[breakpoint]} {
					display: initial;
					grid-column-end: span ${spans[breakpoint]};
				}
			`

			if (!minimumBreakpointSet) {
				minimumBreakpointSet = true
			}
		} else {
			if (!minimumBreakpointSet) {
				style = `${style}
				${from[breakpoint]} {
					display: none;
				}
			`
			}
		}
	}

	return style
}

const gridItemStartingPos = (startingPos: StartingPos) => {
	return gridItemBreakpoints.reduce((acc, breakpoint) => {
		if (startingPos[breakpoint]) {
			return `${acc}
				${from[breakpoint]} {
					grid-column-start: ${startingPos[breakpoint]};
				}
			`
		}

		return acc
	}, "")
}

export const gridItem = ({
	span,
	startingPos,
	borderRight = false,
}: {
	span: Spans
	startingPos?: StartingPos
	borderRight?: boolean
}) => css`
	${gridItemSpans(span)}
	${startingPos ? gridItemStartingPos(startingPos) : ""}
	${borderRight ? borderRightStyle : ""}
`
