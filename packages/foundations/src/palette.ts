import { colors } from "./theme"

const palette = {
	brand: {
		dark: colors.blues[5],
		main: colors.blues[6],
		bright: colors.blues[7],
		pastel: colors.blues[8],
		faded: colors.blues[9],
	},
	// TODO: remove in v0.9.0, prefer readerRevenue
	yellow: {
		dark: colors.yellows[0],
		main: colors.yellows[1],
	},
	neutral: {
		7: colors.grays[0],
		20: colors.grays[1],
		36: colors.grays[2],
		46: colors.grays[3],
		60: colors.grays[4],
		86: colors.grays[5],
		93: colors.grays[6],
		97: colors.grays[7],
		100: colors.grays[8],
		specialReport: colors.grays[9],
		// TODO: remove in v0.9.0, prefer themes.inverse.background
		darkMode: colors.grays[10],
	},
	error: {
		main: colors.reds[1],
		bright: colors.reds[2],
	},
	success: {
		main: colors.greens[1],
	},
	readerRevenue: {
		dark: colors.yellows[0],
		main: colors.yellows[1],
	},
	text: {
		main: colors.grays[0],
		weak: colors.grays[3],
	},
	background: {
		inverse: colors.grays[10],
		brand: colors.blues[6],
		brandInverse: colors.yellows[1],
		readerRevenue: colors.blues[6],
		readerRevenueInverse: colors.yellows[1],
		header: colors.blues[6],
		footer: colors.blues[6],
	},
	news: {
		dark: colors.reds[0],
		main: colors.reds[1],
		bright: colors.reds[2],
		pastel: colors.reds[3],
		faded: colors.reds[4],
	},
	opinion: {
		dark: colors.oranges[0],
		main: colors.oranges[1],
		bright: colors.oranges[2],
		pastel: colors.oranges[3],
		faded: colors.oranges[4],
	},
	sport: {
		dark: colors.blues[0],
		main: colors.blues[1],
		bright: colors.blues[2],
		pastel: colors.blues[3],
		faded: colors.blues[4],
	},
	culture: {
		dark: colors.browns[0],
		main: colors.browns[1],
		bright: colors.browns[2],
		pastel: colors.browns[3],
		faded: colors.browns[4],
	},
	lifestyle: {
		dark: colors.pinks[0],
		main: colors.pinks[1],
		bright: colors.pinks[2],
		pastel: colors.pinks[3],
		faded: colors.pinks[4],
	},
	labs: {
		dark: colors.greens[2],
		main: colors.greens[3],
	},
}

export { palette }
