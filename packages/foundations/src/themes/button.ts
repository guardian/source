import { palette } from "../index"

export type ButtonTheme = {
	textPrimary: string
	backgroundPrimary: string
	backgroundPrimaryHover: string
	textSecondary: string
	backgroundSecondary: string
	backgroundSecondaryHover: string
	borderSecondary?: string
	textTertiary?: string
	backgroundTertiary?: string
}

export const buttonLight: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.buttonPrimary,
		backgroundPrimary: palette.background.buttonPrimary,
		backgroundPrimaryHover: palette.background.buttonPrimaryHover,
		textSecondary: palette.text.buttonSecondary,
		backgroundSecondary: palette.background.buttonSecondary,
		backgroundSecondaryHover: palette.background.buttonSecondaryHover,
		textTertiary: palette.text.buttonSecondary,
		backgroundTertiary: palette.background.primary,
	},
}

export const buttonBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brand.buttonPrimary,
		backgroundPrimary: palette.background.brand.buttonPrimary,
		backgroundPrimaryHover: palette.background.brand.buttonPrimaryHover,
		textSecondary: palette.text.brand.buttonSecondary,
		backgroundSecondary: palette.background.brand.buttonSecondary,
		backgroundSecondaryHover: palette.background.brand.buttonSecondaryHover,
		textTertiary: palette.text.brand.buttonSecondary,
		backgroundTertiary: palette.background.brand.primary,
	},
}

export const buttonBrandYellow: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brandYellow.buttonPrimary,
		backgroundPrimary: palette.background.brandYellow.buttonPrimary,
		backgroundPrimaryHover:
			palette.background.brandYellow.buttonPrimaryHover,
		textSecondary: palette.text.brandYellow.buttonSecondary,
		backgroundSecondary: palette.background.brandYellow.buttonSecondary,
		backgroundSecondaryHover:
			palette.background.brandYellow.buttonSecondaryHover,
		textTertiary: palette.text.brandYellow.buttonSecondary,
		backgroundTertiary: palette.background.brandYellow.primary,
	},
}

export const button = {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
}
