import {
	text,
	background,
	brandText,
	brandBackground,
	brandAltText,
	brandAltBackground,
} from "../index"

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
		textPrimary: brandText.buttonPrimary,
		backgroundPrimary: brandBackground.buttonPrimary,
		backgroundPrimaryHover: brandBackground.buttonPrimaryHover,
		textSecondary: brandText.buttonSecondary,
		backgroundSecondary: brandBackground.buttonSecondary,
		backgroundSecondaryHover: brandBackground.buttonSecondaryHover,
		textTertiary: brandText.buttonSecondary,
		backgroundTertiary: brandBackground.primary,
	},
}

export const buttonBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: brandAltText.buttonPrimary,
		backgroundPrimary: brandAltBackground.buttonPrimary,
		backgroundPrimaryHover: brandAltBackground.buttonPrimaryHover,
		textSecondary: brandAltText.buttonSecondary,
		backgroundSecondary: brandAltBackground.buttonSecondary,
		backgroundSecondaryHover: brandAltBackground.buttonSecondaryHover,
		textTertiary: brandAltText.buttonSecondary,
		backgroundTertiary: brandAltBackground.primary,
	},
}

// continue to expose legacy theme names
export const buttonLight = buttonDefault
export const buttonBrandYellow = buttonBrandAlt
