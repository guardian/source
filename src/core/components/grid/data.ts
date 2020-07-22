import { Breakpoint, space, breakpoints } from "@guardian/src-foundations"

export type GridBreakpoint = Extract<
	Breakpoint,
	"mobile" | "tablet" | "desktop" | "leftCol" | "wide"
>
export const gridBreakpoints: readonly GridBreakpoint[] = [
	"mobile",
	"tablet",
	"desktop",
	"leftCol",
	"wide",
] as const

type GridBreakpoints = typeof gridBreakpoints[number]

type GridColumns = {
	[key in GridBreakpoints]: number
}

type ContainerWidths = {
	[key in GridBreakpoints]: string
}

export type CustomBreakpoint = {
	width: number
	columns: number
}

export const gridColumns: GridColumns = {
	mobile: 4,
	tablet: 12,
	desktop: 12,
	leftCol: 14,
	wide: 16,
}

export const containerWidths: ContainerWidths = {
	mobile: "100%",
	tablet: `${breakpoints.tablet}px`,
	desktop: `${breakpoints.desktop}px`,
	leftCol: `${breakpoints.leftCol}px`,
	wide: `${breakpoints.wide}px`,
}

export const GUTTER_WIDTH = space[5]
