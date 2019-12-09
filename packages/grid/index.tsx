import React from "react"
import { gridContainer, gridItem, Spans } from "./styles"

const Grid = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={gridContainer}>{children}</div>
)

const GridItem = ({
	span,
	startingPos,
	borderRight,
	children,
}: {
	span: Spans
	startingPos?: number
	borderRight?: boolean
	children: JSX.Element | JSX.Element[]
}) => {
	return (
		<div css={gridItem({ span, startingPos, borderRight })}>{children}</div>
	)
}

export { Grid, GridItem, gridItem }
