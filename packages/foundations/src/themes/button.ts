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
		textPrimary: palette.text.ctaPrimary,
		backgroundPrimary: palette.background.ctaPrimary,
		backgroundPrimaryHover: palette.background.ctaPrimaryHover,
		textSecondary: palette.text.ctaSecondary,
		backgroundSecondary: palette.background.ctaSecondary,
		backgroundSecondaryHover: palette.background.ctaSecondaryHover,
		textTertiary: palette.text.ctaSecondary,
		backgroundTertiary: palette.background.primary,
	},
}

export const buttonBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brand.ctaPrimary,
		backgroundPrimary: palette.background.brand.ctaPrimary,
		backgroundPrimaryHover: palette.background.brand.ctaPrimaryHover,
		textSecondary: palette.text.brand.ctaSecondary,
		backgroundSecondary: palette.background.brand.ctaSecondary,
		backgroundSecondaryHover: palette.background.brand.ctaSecondaryHover,
		textTertiary: palette.text.brand.ctaSecondary,
		backgroundTertiary: palette.background.brand.primary,
	},
}

export const buttonBrandYellow: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.brandYellow.ctaPrimary,
		backgroundPrimary: palette.background.brandYellow.ctaPrimary,
		backgroundPrimaryHover: palette.background.brandYellow.ctaPrimaryHover,
		textSecondary: palette.text.brandYellow.ctaSecondary,
		backgroundSecondary: palette.background.brandYellow.ctaSecondary,
		backgroundSecondaryHover:
			palette.background.brandYellow.ctaSecondaryHover,
		textTertiary: palette.text.brandYellow.ctaSecondary,
		backgroundTertiary: palette.background.brandYellow.primary,
	},
}

export const button = {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
}
