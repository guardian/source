import { text, background } from "../index"

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
		textPrimary: text.buttonPrimary,
		backgroundPrimary: background.buttonPrimary,
		backgroundPrimaryHover: background.buttonPrimaryHover,
		textSecondary: text.buttonSecondary,
		backgroundSecondary: background.buttonSecondary,
		backgroundSecondaryHover: background.buttonSecondaryHover,
		textTertiary: text.buttonSecondary,
		backgroundTertiary: background.primary,
	},
}

export const buttonBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: text.brand.buttonPrimary,
		backgroundPrimary: background.brand.buttonPrimary,
		backgroundPrimaryHover: background.brand.buttonPrimaryHover,
		textSecondary: text.brand.buttonSecondary,
		backgroundSecondary: background.brand.buttonSecondary,
		backgroundSecondaryHover: background.brand.buttonSecondaryHover,
		textTertiary: text.brand.buttonSecondary,
		backgroundTertiary: background.brand.primary,
	},
}

export const buttonBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: text.brandAlt.buttonPrimary,
		backgroundPrimary: background.brandAlt.buttonPrimary,
		backgroundPrimaryHover: background.brandAlt.buttonPrimaryHover,
		textSecondary: text.brandAlt.buttonSecondary,
		backgroundSecondary: background.brandAlt.buttonSecondary,
		backgroundSecondaryHover: background.brandAlt.buttonSecondaryHover,
		textTertiary: text.brandAlt.buttonSecondary,
		backgroundTertiary: background.brandAlt.primary,
	},
}

// continue to expose legacy theme names
export const buttonLight = buttonDefault
export const buttonBrandYellow = buttonBrandAlt
