import { css } from "@emotion/core"
import { space, palette } from "@guardian/src-foundations"
import { from } from "@guardian/src-foundations/mq"
import {
	GUTTER_WIDTH,
	gridBreakpoints,
	gridColumns,
	containerWidths,
	CustomBreakpoint,
	GridBreakpoint,
} from "./data"

const gridRow = css`
	@supports (display: grid) {
		display: grid;
	}
	/* stylelint-disable-next-line value-no-vendor-prefix */
	display: -ms-grid;

	grid-auto-columns: max-content;
	column-gap: ${GUTTER_WIDTH}px;

	/* horizontal padding is smaller on mobile */
	padding: 0 ${space[3]}px;
	${from.tablet} {
		padding: 0 ${GUTTER_WIDTH}px;
	}
`

const [
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
] = gridBreakpoints.map(breakpoint => {
	const msGridColumns = `-ms-grid-columns: (minmax(0, 1fr))[${gridColumns[breakpoint]}]`

	return css`
		${from[breakpoint]} {
			width: ${containerWidths[breakpoint]}px;
			grid-template-columns: repeat(${gridColumns[breakpoint]}, 1fr);
			${msGridColumns};
		}
	`
})

const mqForBreakpoint = (breakpoint: GridBreakpoint | CustomBreakpoint) => {
	return typeof breakpoint === "string"
	? from[breakpoint]
	: `@media (min-width: ${`${breakpoint.width}px`})`
}

const gridItemSpans = ({
	breakpoints,
	spans,
}: {
	breakpoints: Array<GridBreakpoint | CustomBreakpoint>
	spans: number[]
}) => {
	return breakpoints.reduce((acc, breakpoint, index) => {
		const mq = mqForBreakpoint(breakpoint)

		if (spans[index] === 0) {
			return `${acc}
				${mq} {
					display: none;
				}
			`
		}

		return `${acc}
			${mq} {
				display: block;
				grid-column-end: span ${spans[index]};
				-ms-grid-column-span: ${spans[index]};,
			}
		`
	}, "")
}

const gridItemStartingPos = ({
	breakpoints,
	startingPositions,
}: {
	breakpoints: Array<GridBreakpoint | CustomBreakpoint>
	startingPositions: number[]
}) => {
	return breakpoints.reduce((acc, breakpoint, index) => {
		const mq = mqForBreakpoint(breakpoint)
		const columns =
			typeof breakpoint === "string"
				? gridColumns[breakpoint]
				: breakpoint.columns

		return `${acc}
			${mq} {
				grid-column-start: ${startingPositions[index]};
				-ms-grid-column: ${
					startingPositions[index] > 0
						? startingPositions[index]
						: columns + 2 + startingPositions[index]
				};
			}
		`
	}, "")
}

const gridItem = ({
	breakpoints,
	spans,
	startingPositions,
}: {
	breakpoints: Array<GridBreakpoint | CustomBreakpoint>
	spans: number[]
	startingPositions: number[]
}) => css`
	${gridItemSpans({ breakpoints, spans })}
	${gridItemStartingPos({
		breakpoints,
		startingPositions,
	})}
	/* stylelint-disable-next-line property-no-vendor-prefix */
	-ms-grid-row: 1;
`

const borderRightStyle = css`
	border-right: 1px solid ${palette.border.secondary};
	padding-right: ${GUTTER_WIDTH / 2}px;
	margin-right: ${-GUTTER_WIDTH / 2}px;
`

const createCustomGridRow = ({
	width,
	columns,
}: {
	width: number
	columns: number
}) => {
	const msGridColumns = `-ms-grid-columns: (minmax(0, 1fr))[${columns}]`

	return css`
		${mqForBreakpoint({width, columns})} {
			width: ${width}px;
			grid-template-columns: repeat(${columns}, 1fr);
			${msGridColumns};
		}
	`
}

export {
	gridRow,
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
	gridItem,
	borderRightStyle,
	createCustomGridRow,
}
