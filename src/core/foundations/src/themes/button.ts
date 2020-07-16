import {
	text,
	border,
	background,
	brandText,
	brandBackground,
	brandBorder,
	brandAltText,
	brandAltBackground,
	brandAltBorder,
} from "@guardian/src-foundations/palette"

export type ButtonTheme = {
	textPrimary: string
	backgroundPrimary: string
	backgroundPrimaryHover: string
	textSecondary?: string
	backgroundSecondary?: string
	backgroundSecondaryHover?: string
	textTertiary?: string
	backgroundTertiaryHover?: string
	borderTertiary?: string
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
		textTertiary: text.ctaTertiary,
		backgroundTertiaryHover: background.ctaTertiaryHover,
		borderTertiary: border.ctaTertiary,
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
		textTertiary: brandText.ctaTertiary,
		backgroundTertiaryHover: brandBackground.ctaTertiaryHover,
		borderTertiary: brandBorder.ctaTertiary,
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
		textTertiary: brandAltText.ctaTertiary,
		backgroundTertiaryHover: brandAltBackground.ctaTertiaryHover,
		borderTertiary: brandAltBorder.ctaTertiary,
		textSubdued: brandAltText.ctaSecondary,
	},
}
