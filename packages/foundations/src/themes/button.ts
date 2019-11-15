import { palette } from "../index"

export type ButtonTheme = {
	backgroundPrimary: string
	textPrimary: string
	backgroundPrimaryHover: string
	backgroundSecondary: string
	textSecondary: string
	backgroundSecondaryHover: string
	borderSecondary?: string
	backgroundTertiary?: string
	textTertiary?: string
}

// light
export const buttonDefault: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.brand.main,
		textPrimary: palette.neutral[100],
		backgroundPrimaryHover: "#234B8A",
		backgroundSecondary: palette.brand.faded,
		textSecondary: palette.brand.main,
		backgroundSecondaryHover: "#96B0D9",
		backgroundTertiary: palette.neutral[100],
		textTertiary: palette.brand.main,
	},
}

// dark
export const buttonInverse: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.neutral[100],
		textPrimary: palette.neutral[7],
		backgroundPrimaryHover: palette.neutral[93],
		backgroundSecondary: palette.neutral[46],
		textSecondary: palette.neutral[100],
		backgroundSecondaryHover: "#5C5C5C",
		backgroundTertiary: palette.neutral.darkMode,
		textTertiary: palette.neutral[100],
	},
}

// brand blue
export const buttonBrand: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.neutral[100],
		textPrimary: palette.brand.main,
		backgroundPrimaryHover: palette.neutral[93],
		backgroundSecondary: palette.brand.pastel,
		textSecondary: palette.neutral[100],
		backgroundSecondaryHover: "#234B8A",
		backgroundTertiary: palette.brand.main,
		textTertiary: palette.neutral[100],
	},
}

// yellow
export const buttonBrandInverse: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.neutral[7],
		textPrimary: palette.neutral[100],
		backgroundPrimaryHover: palette.neutral[20],
		backgroundSecondary: palette.yellow.dark,
		textSecondary: palette.neutral[7],
		backgroundSecondaryHover: "#F2AE00",
		backgroundTertiary: palette.yellow.main,
		textTertiary: palette.neutral[7],
	},
}

// reader revenue blue
export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.yellow.main,
		textPrimary: palette.brand.main,
		backgroundPrimaryHover: palette.yellow.dark,
		backgroundSecondary: palette.brand.main,
		textSecondary: palette.yellow.main,
		backgroundSecondaryHover: palette.brand.dark,
		borderSecondary: palette.yellow.main,
	},
}

// reader revenue yellow
export const buttonReaderRevenueInverse: { button: ButtonTheme } = {
	button: {
		backgroundPrimary: palette.neutral[7],
		textPrimary: palette.neutral[100],
		backgroundPrimaryHover: palette.neutral[20],
		backgroundSecondary: palette.yellow.main,
		textSecondary: palette.neutral[7],
		backgroundSecondaryHover: palette.yellow.dark,
		borderSecondary: palette.neutral[7],
		backgroundTertiary: palette.neutral[100],
		textTertiary: palette.brand.main,
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
