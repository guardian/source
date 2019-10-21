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
			hoverBackgroundColor: palette.brand.pastel,
		},
		secondary: {
			backgroundColor: palette.brand.faded,
			color: palette.brand.main,
			hoverBackgroundColor: palette.brand.pastel,
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
			hoverBackgroundColor: palette.neutral[46],
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
			hoverBackgroundColor: palette.neutral[93],
		},
		secondary: {
			backgroundColor: palette.brand.pastel,
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
			backgroundColor: palette.yellow.dark,
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
			hoverBackgroundColor: palette.brand.pastel,
			borderColor: palette.yellow.main,
		},
		tertiary: {},
	},
}
