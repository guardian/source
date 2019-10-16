import { palette } from "@guardian/src-foundations"
import { Priority } from "./button"

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
			hoverBackgroundColor: palette.brand.dark,
		},
		secondary: {
			backgroundColor: palette.brand.pastel,
			color: palette.brand.main,
			hoverBackgroundColor: palette.brand.faded,
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
			hoverBackgroundColor: palette.neutral[85],
		},
		secondary: {
			backgroundColor: palette.neutral[46],
			color: palette.neutral[100],
			hoverBackgroundColor: palette.neutral[20],
		},
		tertiary: {
			backgroundColor: palette.neutral[10],
			color: palette.neutral[100],
		},
	},
}

export const blueTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.neutral[100],
			color: palette.brand.main,
			hoverBackgroundColor: palette.brand.faded,
		},
		secondary: {
			backgroundColor: "#506991",
			color: palette.neutral[100],
			hoverBackgroundColor: palette.brand.faded,
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
			backgroundColor: "#E9D100",
			color: palette.neutral[7],
			hoverBackgroundColor: palette.yellow.dark,
		},
		tertiary: {
			backgroundColor: palette.yellow.main,
			color: palette.neutral[7],
		},
	},
}

export const rrTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			backgroundColor: palette.yellow.main,
			color: palette.brand.main,
			hoverBackgroundColor: palette.yellow.dark,
		},
		secondary: {
			backgroundColor: palette.brand.main,
			color: palette.yellow.main,
			hoverBackgroundColor: palette.brand.dark,
			borderColor: palette.yellow.main,
		},
		tertiary: {},
	},
}
