import React from "react"
import {
	gridRow,
	gridRowMobile,
	gridRowTablet,
	gridRowDesktop,
	gridRowWide,
	gridItem,
	GridBreakpoint,
} from "./styles"
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
	breakpoints: GridBreakpoint[]
	children: JSX.Element | JSX.Element[]
}) => (
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
		{React.Children.map(children, child =>
			React.cloneElement(child, {
				breakpoints,
				spans: child.props.spans,
			}),
		)}
	</div>
)

const GridItem = ({
	breakpoints,
	spans,
	children,
}: {
	breakpoints: GridBreakpoint[]
	spans: number[]
	children: JSX.Element | JSX.Element[]
}) => {
	return <div css={gridItem({ breakpoints, spans })}>{children}</div>
}

GridItem.defaultProps = { breakpoints: [] }

export { GridRow, GridItem }
