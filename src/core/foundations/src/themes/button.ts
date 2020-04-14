import {
	text,
	background,
	brandText,
	brandBackground,
	brandAltText,
	brandAltBackground,
} from "@guardian/src-foundations/palette"

export type ButtonTheme = {
	textPrimary: string
	backgroundPrimary: string
	backgroundPrimaryHover: string
	textSecondary: string
	backgroundSecondary: string
	backgroundSecondaryHover: string
	borderSecondary?: string
	textTertiary?: string
	textSubdued?: string
}

export const buttonDefault: { button: ButtonTheme } = {
	button: {
		textPrimary: text.ctaPrimary,
		backgroundPrimary: background.ctaPrimary,
		backgroundPrimaryHover: background.ctaPrimaryHover,
		textSecondary: text.ctaSecondary,
		backgroundSecondary: background.ctaSecondary,
		backgroundSecondaryHover: background.ctaSecondaryHover,
		textTertiary: text.ctaSecondary,
		textSubdued: text.ctaSecondary,
	},
}

export const buttonBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: brandText.ctaPrimary,
		backgroundPrimary: brandBackground.ctaPrimary,
		backgroundPrimaryHover: brandBackground.ctaPrimaryHover,
		textSecondary: brandText.ctaSecondary,
		backgroundSecondary: brandBackground.ctaSecondary,
		backgroundSecondaryHover: brandBackground.ctaSecondaryHover,
		textTertiary: brandText.ctaSecondary,
		textSubdued: brandText.ctaSecondary,
	},
}

export const buttonBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: brandAltText.ctaPrimary,
		backgroundPrimary: brandAltBackground.ctaPrimary,
		backgroundPrimaryHover: brandAltBackground.ctaPrimaryHover,
		textSecondary: brandAltText.ctaSecondary,
		backgroundSecondary: brandAltBackground.ctaSecondary,
		backgroundSecondaryHover: brandAltBackground.ctaSecondaryHover,
		textTertiary: brandAltText.ctaSecondary,
		textSubdued: brandAltText.ctaSecondary,
	},
}

// continue to expose legacy theme names
export const buttonLight = buttonDefault
export const buttonBrandYellow = buttonBrandAlt
