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

export const buttonDefault: { button: ButtonTheme } = {
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

export const buttonBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brandAlt.buttonPrimary,
		backgroundPrimary: palette.background.brandAlt.buttonPrimary,
		backgroundPrimaryHover: palette.background.brandAlt.buttonPrimaryHover,
		textSecondary: palette.text.brandAlt.buttonSecondary,
		backgroundSecondary: palette.background.brandAlt.buttonSecondary,
		backgroundSecondaryHover:
			palette.background.brandAlt.buttonSecondaryHover,
		textTertiary: palette.text.brandAlt.buttonSecondary,
		backgroundTertiary: palette.background.brandAlt.primary,
	},
}

// continue to expose legacy theme names
export const buttonLight = buttonDefault
export const buttonBrandYellow = buttonBrandAlt

export const button = {
	buttonDefault,
	buttonBrand,
	buttonBrandAlt,
	// continue to expose legacy theme names
	buttonLight,
	buttonBrandYellow,
}
