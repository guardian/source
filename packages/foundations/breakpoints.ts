import { breakpoints as _breakpoints, tweakpoints } from "./theme"

export type Breakpoint =
	| "mobileMedium"
	| "mobileLandscape"
	| "phablet"
	| "tablet"
	| "desktop"
	| "leftCol"
	| "wide"

export const breakpoints = {
	mobileMedium: tweakpoints[0],
	mobileLandscape: tweakpoints[1],
	phablet: tweakpoints[2],
	tablet: _breakpoints[0],
	desktop: _breakpoints[1],
	leftCol: _breakpoints[2],
	wide: _breakpoints[3],
}
