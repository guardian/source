import React, { ReactNode, HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import {
	container,
	containerBorder,
	columns,
	column,
	columnsNotCollapsed,
	collapseBelowTabletColumns,
	collapseBelowDesktopColumns,
	collapseBelowLeftColColumns,
	collapseBelowWideColumns,
	collapseBelowTablet,
	collapseBelowDesktop,
	collapseBelowleftCol,
	collapseBelowWide,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { Breakpoint } from "@guardian/src-foundations/mq"

interface Container extends HTMLAttributes<HTMLDivElement>, Props {
	border?: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const Container = ({
	border = false,
	cssOverrides,
	children,
	...props
}: Container) => {
	return (
		<div
			css={[container, border ? containerBorder : "", cssOverrides]}
			{...props}
		>
			{children}
		</div>
	)
}
type GridBreakpoint = Extract<
	Breakpoint,
	"mobile" | "tablet" | "desktop" | "leftCol" | "wide"
>

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	"tablet" | "desktop" | "leftCol" | "wide"
>

interface ColumnsProps extends HTMLAttributes<HTMLDivElement>, Props {
	collapseBelow?: CollapseBreakpoint
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const collapseBelowMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: collapseBelowTablet,
	desktop: collapseBelowDesktop,
	leftCol: collapseBelowleftCol,
	wide: collapseBelowWide,
}

const collapseBelowColumnsMap: {
	[key in CollapseBreakpoint]: SerializedStyles
} = {
	tablet: collapseBelowTabletColumns,
	desktop: collapseBelowDesktopColumns,
	leftCol: collapseBelowLeftColColumns,
	wide: collapseBelowWideColumns,
}

const Columns = ({
	collapseBelow,
	cssOverrides,
	children,
	...props
}: ColumnsProps) => {
	return (
		<div
			css={[
				columns,
				collapseBelow
					? collapseBelowColumnsMap[collapseBelow]
					: columnsNotCollapsed,
				collapseBelow ? collapseBelowMap[collapseBelow] : "",
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	)
}

interface ColumnProps extends HTMLAttributes<HTMLDivElement>, Props {
	width?: number
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const Column = ({
	width = 0,
	cssOverrides,
	children,
	...props
}: ColumnProps) => {
	return (
		<div css={[column(width), cssOverrides]} {...props}>
			{children}
		</div>
	)
}

export { Container, Columns, Column }
