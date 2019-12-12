import { css } from "@emotion/core"
import { Breakpoint, space, breakpoints } from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"

type GridBreakpoint = Extract<
	Breakpoint,
	"mobile" | "tablet" | "desktop" | "wide"
>
const gridBreakpoints: readonly GridBreakpoint[] = <const>[
	"mobile",
	"tablet",
	"desktop",
	"wide",
]
type GridBreakpoints = typeof gridBreakpoints[number]

type GridColumns = {
	[key in GridBreakpoints]: number
}

type ContainerWidths = {
	[key in GridBreakpoints]: string
}

const gridColumns: GridColumns = {
	mobile: 4,
	tablet: 12,
	desktop: 12,
	wide: 16,
}

const containerWidths: ContainerWidths = {
	mobile: "100%",
	tablet: `${breakpoints.tablet}px`,
	desktop: `${breakpoints.desktop}px`,
	wide: `${breakpoints.wide}px`,
}

const gridRow = css`
	@supports (display: grid) {
		display: grid;
	}

	grid-auto-columns: max-content;
	column-gap: ${space[5]}px;

	/* horizontal padding is smaller on mobile */
	padding: 0 ${space[3]}px;
	${from.tablet} {
		padding: 0 ${space[5]}px;
	}
`

const [
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
] = gridBreakpoints.map(
	breakpoint => css`
		${from[breakpoint]} {
			width: ${containerWidths[breakpoint]}px;
			grid-template-columns: repeat(${gridColumns[breakpoint]}, 1fr);
		}
	`,
)

const gridItemSpans = ({
	breakpoints,
	spans,
}: {
	breakpoints: GridBreakpoint[]
	spans: number[]
}) => {
	return breakpoints.reduce((acc, breakpoint, index) => {
		if (spans[index] === 0) {
			return `${acc}
				${from[breakpoint]} {
					display: none;
				}
			`
		}

		return `${acc}
			${from[breakpoint]} {
				display: block;
				grid-column-end: span ${spans[index]};
			}
		`
	}, "")
}

const gridItemStartingPos = ({
	breakpoints,
	startingPositions,
}: {
	breakpoints: GridBreakpoint[]
	startingPositions: number[]
}) => {
	return breakpoints.reduce((acc, breakpoint, index) => {
		return `${acc}
			${from[breakpoint]} {
				grid-column-start: ${startingPositions[index]};
			}
		`
	}, "")
}

const gridItem = ({
	breakpoints,
	spans,
	startingPositions,
}: {
	breakpoints: GridBreakpoint[]
	spans: number[]
	startingPositions: number[]
}) => css`
	${gridItemSpans({ breakpoints, spans })}
	${gridItemStartingPos({ breakpoints, startingPositions })}
`

export {
	gridRow,
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
	gridItem,
	GridBreakpoint,
}
