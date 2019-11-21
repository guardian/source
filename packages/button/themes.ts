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
			color: palette.text.ctaPrimary,
			backgroundColor: palette.background.ctaPrimary,
			hoverBackgroundColor: palette.background.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.ctaSecondary,
			backgroundColor: palette.background.ctaSecondary,
			hoverBackgroundColor: palette.background.ctaSecondaryHover,
		},
		tertiary: {
			color: palette.text.ctaSecondary,
			backgroundColor: palette.background.primary,
		},
	},
}

export const darkTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			color: palette.text.mono.ctaPrimary,
			backgroundColor: palette.background.mono.ctaPrimary,
			hoverBackgroundColor: palette.background.mono.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.mono.ctaSecondary,
			backgroundColor: palette.background.mono.ctaSecondary,
			hoverBackgroundColor: palette.background.mono.ctaSecondaryHover,
		},
		tertiary: {
			color: palette.text.mono.ctaSecondary,
			backgroundColor: palette.background.mono.primary,
		},
	},
}

export const blueTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			color: palette.text.brand.ctaPrimary,
			backgroundColor: palette.background.brand.ctaPrimary,
			hoverBackgroundColor: palette.background.brand.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.brand.ctaSecondary,
			backgroundColor: palette.background.brand.ctaSecondary,
			hoverBackgroundColor: palette.background.brand.ctaSecondaryHover,
		},
		tertiary: {
			color: palette.text.brand.ctaSecondary,
			backgroundColor: palette.background.brand.primary,
		},
	},
}

export const yellowTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			color: palette.text.brandYellow.ctaPrimary,
			backgroundColor: palette.background.brandYellow.ctaPrimary,
			hoverBackgroundColor:
				palette.background.brandYellow.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.brandYellow.ctaSecondary,
			backgroundColor: palette.background.brandYellow.ctaSecondary,
			hoverBackgroundColor:
				palette.background.brandYellow.ctaSecondaryHover,
		},
		tertiary: {
			color: palette.text.brandYellow.ctaSecondary,
			backgroundColor: palette.background.brandYellow.primary,
		},
	},
}

export const rrBlueTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			color: palette.text.readerRevenue.ctaPrimary,
			backgroundColor: palette.background.readerRevenue.ctaPrimary,
			hoverBackgroundColor:
				palette.background.readerRevenue.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.readerRevenue.ctaSecondary,
			backgroundColor: palette.background.readerRevenue.ctaSecondary,
			hoverBackgroundColor:
				palette.background.readerRevenue.ctaSecondaryHover,
			borderColor: palette.border.readerRevenue.ctaSecondary,
		},
		tertiary: {},
	},
}

export const rrYellowTheme: { button: ButtonTheme } = {
	button: {
		primary: {
			color: palette.text.readerRevenueYellow.ctaPrimary,
			backgroundColor: palette.background.readerRevenueYellow.ctaPrimary,
			hoverBackgroundColor:
				palette.background.readerRevenueYellow.ctaPrimaryHover,
		},
		secondary: {
			color: palette.text.readerRevenueYellow.ctaSecondary,
			backgroundColor:
				palette.background.readerRevenueYellow.ctaSecondary,
			hoverBackgroundColor:
				palette.background.readerRevenueYellow.ctaSecondaryHover,
			borderColor: palette.border.readerRevenueYellow.ctaSecondary,
		},
		tertiary: {},
	},
}
