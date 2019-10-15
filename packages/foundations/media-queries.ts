import { tweakpoints, breakpoints } from "./theme"

const breakpointMap = {
	mobileMedium: tweakpoints[0],
	mobileLandscape: tweakpoints[1],
	phablet: tweakpoints[2],
	tablet: breakpoints[0],
	desktop: breakpoints[1],
	leftCol: breakpoints[2],
	wide: breakpoints[3],
}

const minWidth = (from: number): string => `@media (min-width: ${`${from}px`})`

const maxWidth = (until: number): string =>
	`@media (max-width: ${`${until - 1}px`})`

const minWidthMaxWidth = (from: number, until: number): string =>
	`@media (min-width: ${`${from}px`}) and (max-width: ${`${until - 1}px`})`

// e.g. until.*
const until = {
	mobileMedium: maxWidth(breakpointMap.mobileMedium),
	mobileLandscape: maxWidth(breakpointMap.mobileLandscape),
	phablet: maxWidth(breakpointMap.phablet),
	tablet: maxWidth(breakpointMap.tablet),
	desktop: maxWidth(breakpointMap.desktop),
	leftCol: maxWidth(breakpointMap.leftCol),
	wide: maxWidth(breakpointMap.wide),
}

// e.g. from.*.until.*
const from = {
	mobileMedium: {
		until: {
			mobileLandscape: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.mobileLandscape,
			),
			phablet: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.phablet,
			),
			tablet: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.tablet,
			),
			desktop: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.leftCol,
			),
			wide: minWidthMaxWidth(
				breakpointMap.mobileMedium,
				breakpointMap.wide,
			),
		},
	},
	mobileLandscape: {
		until: {
			phablet: minWidthMaxWidth(
				breakpointMap.mobileLandscape,
				breakpointMap.phablet,
			),
			tablet: minWidthMaxWidth(
				breakpointMap.mobileLandscape,
				breakpointMap.tablet,
			),
			desktop: minWidthMaxWidth(
				breakpointMap.mobileLandscape,
				breakpointMap.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpointMap.mobileLandscape,
				breakpointMap.leftCol,
			),
			wide: minWidthMaxWidth(
				breakpointMap.mobileLandscape,
				breakpointMap.wide,
			),
		},
	},
	phablet: {
		until: {
			tablet: minWidthMaxWidth(
				breakpointMap.phablet,
				breakpointMap.tablet,
			),
			desktop: minWidthMaxWidth(
				breakpointMap.phablet,
				breakpointMap.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpointMap.phablet,
				breakpointMap.leftCol,
			),
			wide: minWidthMaxWidth(breakpointMap.phablet, breakpointMap.wide),
		},
	},
	tablet: {
		until: {
			desktop: minWidthMaxWidth(
				breakpointMap.tablet,
				breakpointMap.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpointMap.tablet,
				breakpointMap.leftCol,
			),
			wide: minWidthMaxWidth(breakpointMap.tablet, breakpointMap.wide),
		},
	},
	desktop: {
		until: {
			leftCol: minWidthMaxWidth(
				breakpointMap.desktop,
				breakpointMap.leftCol,
			),
			wide: minWidthMaxWidth(breakpointMap.desktop, breakpointMap.wide),
		},
	},
	leftCol: {
		until: {
			wide: minWidthMaxWidth(breakpointMap.leftCol, breakpointMap.wide),
		},
	},
}

// min-widths
const mobileMedium = minWidth(breakpointMap.mobileMedium)
const mobileLandscape = minWidth(breakpointMap.mobileLandscape)
const phablet = minWidth(breakpointMap.phablet)
const tablet = minWidth(breakpointMap.tablet)
const desktop = minWidth(breakpointMap.desktop)
const leftCol = minWidth(breakpointMap.leftCol)
const wide = minWidth(breakpointMap.wide)

export {
	from,
	until,
	mobileMedium,
	mobileLandscape,
	phablet,
	tablet,
	desktop,
	leftCol,
	wide,
	breakpointMap,
}
