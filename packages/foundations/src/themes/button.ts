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

export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.readerRevenue.ctaPrimary,
		backgroundPrimary: palette.background.readerRevenue.ctaPrimary,
		backgroundPrimaryHover:
			palette.background.readerRevenue.ctaPrimaryHover,
		textSecondary: palette.text.readerRevenue.ctaSecondary,
		backgroundSecondary: palette.background.readerRevenue.ctaSecondary,
		backgroundSecondaryHover:
			palette.background.readerRevenue.ctaSecondaryHover,
		borderSecondary: palette.border.readerRevenue.ctaSecondary,
	},
}

export const buttonReaderRevenueYellow: { button: ButtonTheme } = {
	button: {
		textPrimary: palette.text.readerRevenueYellow.ctaPrimary,
		backgroundPrimary: palette.background.readerRevenueYellow.ctaPrimary,
		backgroundPrimaryHover:
			palette.background.readerRevenueYellow.ctaPrimaryHover,
		textSecondary: palette.text.readerRevenueYellow.ctaSecondary,
		backgroundSecondary:
			palette.background.readerRevenueYellow.ctaSecondary,
		backgroundSecondaryHover:
			palette.background.readerRevenueYellow.ctaSecondaryHover,
		borderSecondary: palette.border.readerRevenueYellow.ctaSecondary,
	},
}

export const button = {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonReaderRevenue,
	buttonReaderRevenueYellow,
}
