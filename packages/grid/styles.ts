import { css } from "@emotion/core"
import {
	Breakpoint,
	space,
	breakpoints,
	palette,
} from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"

type GridBreakpoints = Extract<Breakpoint, "tablet" | "desktop" | "wide">

type GridColumns = {
	[key in GridBreakpoints]: number
}

type ContainerWidths = {
	[key in GridBreakpoints]: number
}

const gridColumns: GridColumns = {
	tablet: 12,
	desktop: 12,
	wide: 16,
}

const containerWidths: ContainerWidths = {
	tablet: breakpoints.tablet,
	desktop: breakpoints.desktop,
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
		width: ${containerWidths.tablet}px;
		grid-template-columns: repeat(${gridColumns.tablet}, 1fr);
	}

	${from.desktop} {
		width: ${containerWidths.desktop}px;
		grid-template-columns: repeat(${gridColumns.desktop}, 1fr);
	}

	${from.wide} {
		width: ${containerWidths.wide}px;
		grid-template-columns: repeat(${gridColumns.wide}, 1fr);
	}
`
const borderRightStyle = css`
	border-right: 1px solid ${palette.border.secondary};
	padding-right: ${space[5] / 2}px;
	margin-right: ${-space[5] / 2}px;
`

const gridItemBreakpoints: readonly Extract<
	Breakpoint,
	"mobile" | "tablet" | "desktop" | "wide"
>[] = ["mobile", "tablet", "desktop", "wide"] as const
type GridItemBreakpoints = typeof gridItemBreakpoints[number]

export type Spans = {
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

export const gridItem = ({
	span,
	startingPos,
	borderRight = false,
}: {
	span: Spans
	startingPos?: number
	borderRight?: boolean
}) => css`
	${gridItemSpans(span)}
	${startingPos ? `grid-column-start: ${startingPos};` : ""}
	${borderRight ? borderRightStyle : ""}
`
