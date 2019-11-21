import { palette } from "@guardian/src-foundations"
import { Priority } from "./index"

export type ButtonTheme = {
	[key in Priority]: {
		backgroundColor?: string
		color?: string
		hoverBackgroundColor?: string
		borderColor?: string
	}
}

export const lightTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.brand.main,
			color: palette.neutral[100],
			hoverBackgroundColor: "#234B8A", //non-palette colour
		},
		secondary: {
			backgroundColor: palette.brand.faded,
			color: palette.brand.main,
			hoverBackgroundColor: "#96B0D9", //non-palette colour
		},
		tertiary: {
			backgroundColor: palette.neutral[100],
			color: palette.brand.main,
		},
	},
}

export const darkTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.neutral[100],
			color: palette.neutral[7],
			hoverBackgroundColor: palette.neutral[93],
		},
		secondary: {
			backgroundColor: palette.neutral[46],
			color: palette.neutral[100],
			hoverBackgroundColor: "#5C5C5C", //non-palette colour
		},
		tertiary: {
			backgroundColor: palette.background.inverse,
			color: palette.neutral[100],
		},
	},
}

export const blueTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.neutral[100],
			color: palette.brand.main,
			hoverBackgroundColor: palette.neutral[93],
		},
		secondary: {
			backgroundColor: palette.brand.pastel,
			color: palette.neutral[100],
			hoverBackgroundColor: "#234B8A", // non-palette colour
		},
		tertiary: {
			backgroundColor: palette.brand.main,
			color: palette.neutral[100],
		},
	},
}

export const yellowTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.neutral[7],
			color: palette.neutral[100],
			hoverBackgroundColor: palette.neutral[20],
		},
		secondary: {
			backgroundColor: palette.readerRevenue.dark,
			color: palette.neutral[7],
			hoverBackgroundColor: "#F2AE00", //non-palette colour
		},
		tertiary: {
			backgroundColor: palette.readerRevenue.main,
			color: palette.neutral[7],
		},
	},
}

export const rrBlueTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.readerRevenue.main,
			color: palette.brand.main,
			hoverBackgroundColor: palette.readerRevenue.dark,
		},
		secondary: {
			backgroundColor: palette.brand.main,
			color: palette.readerRevenue.main,
			hoverBackgroundColor: palette.brand.dark,
			borderColor: palette.readerRevenue.main,
		},
		tertiary: {},
	},
}

export const rrYellowTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.neutral[7],
			color: palette.neutral[100],
			hoverBackgroundColor: palette.neutral[20],
		},
		secondary: {
			backgroundColor: palette.readerRevenue.main,
			color: palette.neutral[7],
			hoverBackgroundColor: palette.readerRevenue.dark,
			borderColor: palette.neutral[7],
		},
		tertiary: {
			backgroundColor: palette.neutral[100],
			color: palette.brand.main,
		},
	},
}
