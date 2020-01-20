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

export const buttonBrandDefault: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brandDefault.buttonPrimary,
		backgroundPrimary: palette.background.brandDefault.buttonPrimary,
		backgroundPrimaryHover:
			palette.background.brandDefault.buttonPrimaryHover,
		textSecondary: palette.text.brandDefault.buttonSecondary,
		backgroundSecondary: palette.background.brandDefault.buttonSecondary,
		backgroundSecondaryHover:
			palette.background.brandDefault.buttonSecondaryHover,
		textTertiary: palette.text.brandDefault.buttonSecondary,
		backgroundTertiary: palette.background.brandDefault.primary,
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
export const buttonBrand = buttonBrandDefault
export const buttonBrandYellow = buttonBrandAlt

export const button = {
	buttonDefault,
	buttonBrandDefault,
	buttonBrandAlt,
	// continue to expose legacy theme names
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
}
