import { palette } from "../index"

export type ButtonTheme = {
	backgroundColorPrimary: string
	textColorPrimary: string
	backgroundColorPrimaryHover: string
	backgroundColorSecondary: string
	textColorSecondary: string
	backgroundColorSecondaryHover: string
	borderColorSecondary?: string
	backgroundColorTertiary?: string
	textColorTertiary?: string
}

// light
export const buttonDefault: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.brand.main,
		textColorPrimary: palette.neutral[100],
		backgroundColorPrimaryHover: "#234B8A",
		backgroundColorSecondary: palette.brand.faded,
		textColorSecondary: palette.brand.main,
		backgroundColorSecondaryHover: "#96B0D9",
		backgroundColorTertiary: palette.neutral[100],
		textColorTertiary: palette.brand.main,
	},
}

// dark
export const buttonInverse: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.neutral[100],
		textColorPrimary: palette.neutral[7],
		backgroundColorPrimaryHover: palette.neutral[93],
		backgroundColorSecondary: palette.neutral[46],
		textColorSecondary: palette.neutral[100],
		backgroundColorSecondaryHover: "#5C5C5C",
		backgroundColorTertiary: palette.neutral.darkMode,
		textColorTertiary: palette.neutral[100],
	},
}

// brand blue
export const buttonBrand: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.neutral[100],
		textColorPrimary: palette.brand.main,
		backgroundColorPrimaryHover: palette.neutral[93],
		backgroundColorSecondary: palette.brand.pastel,
		textColorSecondary: palette.neutral[100],
		backgroundColorSecondaryHover: "#234B8A",
		backgroundColorTertiary: palette.brand.main,
		textColorTertiary: palette.neutral[100],
	},
}

// yellow
export const buttonBrandInverse: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.neutral[7],
		textColorPrimary: palette.neutral[100],
		backgroundColorPrimaryHover: palette.neutral[20],
		backgroundColorSecondary: palette.yellow.dark,
		textColorSecondary: palette.neutral[7],
		backgroundColorSecondaryHover: "#F2AE00",
		backgroundColorTertiary: palette.yellow.main,
		textColorTertiary: palette.neutral[7],
	},
}

// reader revenue blue
export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.yellow.main,
		textColorPrimary: palette.brand.main,
		backgroundColorPrimaryHover: palette.yellow.dark,
		backgroundColorSecondary: palette.brand.main,
		textColorSecondary: palette.yellow.main,
		backgroundColorSecondaryHover: palette.brand.dark,
		borderColorSecondary: palette.yellow.main,
	},
}

// reader revenue yellow
export const buttonReaderRevenueInverse: { button: ButtonTheme } = {
	button: {
		backgroundColorPrimary: palette.neutral[7],
		textColorPrimary: palette.neutral[100],
		backgroundColorPrimaryHover: palette.neutral[20],
		backgroundColorSecondary: palette.yellow.main,
		textColorSecondary: palette.neutral[7],
		backgroundColorSecondaryHover: palette.yellow.dark,
		borderColorSecondary: palette.neutral[7],
		backgroundColorTertiary: palette.neutral[100],
		textColorTertiary: palette.brand.main,
	},
}

export const button = {
	buttonDefault,
	buttonInverse,
	buttonBrand,
	buttonBrandInverse,
	buttonReaderRevenue,
	buttonReaderRevenueInverse,
}
