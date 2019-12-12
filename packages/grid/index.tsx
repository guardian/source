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
		{children}
	</div>
)

const GridItem = ({
	span,
	children,
}: {
	span: number[]
	children: JSX.Element | JSX.Element[]
}) => {
	return <div css={gridItem}>{children}</div>
}

export { GridRow, GridItem }
