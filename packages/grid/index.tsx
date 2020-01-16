import React from "react"
import {
	gridRow,
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
	gridItem,
	borderRightStyle,
} from "./styles"
import { CustomBreakpoint, GridBreakpoint } from "./data"
import { SerializedStyles } from "@emotion/css"

type GridRowBreakpoints = {
	[key in GridBreakpoint]: SerializedStyles
}
const gridRowBreakpoints: GridRowBreakpoints = {
	mobile: gridRowMobile,
	tablet: gridRowTablet,
	desktop: gridRowDesktop,
	wide: gridRowWide,
}

const GridRow = ({
	breakpoints,
	children,
}: {
	breakpoints: Array<GridBreakpoint | CustomBreakpoint>
	children: JSX.Element | JSX.Element[]
}) => {
	// Create an array with an entry for each child
	// Each entry is an array of starting positions,
	// all initially set to 1
	const startingPosForChildren: number[][] = []

	React.Children.forEach(children, () => {
		startingPosForChildren.push(breakpoints.map(() => 1))
	})

	React.Children.forEach(children, (child, index) => {
		// We always set the starting position of the next
		// child, so if this is the last child, we're done
		if (index === React.Children.count(children) - 1) {
			return
		}

		const startingPosForThisChild = startingPosForChildren[index]
		const startingPosForNextChild = startingPosForChildren[index + 1]

		// The starting position of the next child is the starting position
		// of the current child, plus the current child's span
		child.props.spans.forEach((span: number, i: number) => {
			startingPosForNextChild[i] = startingPosForThisChild[i] + span
		})
	})

	return (
		<div
			css={[
				gridRow,
				breakpoints.reduce(
					(acc, breakpoint) =>
						acc.concat([gridRowBreakpoints[breakpoint]]),
					[] as SerializedStyles[],
				),
			]}
		>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					breakpoints,
					spans: child.props.spans,
					startingPositions: startingPosForChildren[index],
				}),
			)}
		</div>
	)
}

const GridItem = ({
	spans,
	borderRight,
	breakpoints,
	startingPositions,
	children,
}: {
	spans: number[]
	borderRight?: boolean
	startingPositions: number[]
	breakpoints: GridBreakpoint[]
	children: JSX.Element | JSX.Element[]
}) => {
	return (
		<div
			css={[
				gridItem({ breakpoints, spans, startingPositions }),
				borderRight ? borderRightStyle : "",
			]}
		>
			{children}
		</div>
	)
}

GridRow.defaultProps = { breakpoints: ["mobile", "tablet", "desktop", "wide"] }
GridItem.defaultProps = {
	breakpoints: ["mobile", "tablet", "desktop", "wide"],
	startingPositions: [],
}

export { GridRow, GridItem }
