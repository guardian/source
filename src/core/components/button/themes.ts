import { neutral, brand, brandAlt } from "@guardian/src-foundations/palette"
import { ButtonTheme } from "@guardian/src-foundations/themes"

const text = {
	readerRevenue: {
		ctaPrimary: brand[400],
		ctaSecondary: brand[400],
	},
	readerRevenueBrand: {
		ctaPrimary: brand[400],
		ctaSecondary: brandAlt[400],
	},
	readerRevenueBrandAlt: {
		ctaPrimary: neutral[100],
		ctaSecondary: neutral[7],
	},
}
const background = {
	readerRevenue: {
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: "#FFD213",
		ctaSecondary: neutral[100],
		ctaSecondaryHover: "#E5E5E5",
	},
	readerRevenueBrand: {
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: "#FFD213",
		ctaSecondary: brand[400],
		ctaSecondaryHover: "#234B8A",
	},
	readerRevenueBrandAlt: {
		ctaPrimary: neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: brandAlt[400],
		ctaSecondaryHover: brandAlt[200],
	},
}
const border = {
	readerRevenue: {
		ctaSecondary: brand[400],
	},
	readerRevenueBrand: {
		ctaSecondary: brandAlt[400],
	},
	readerRevenueBrandAlt: {
		ctaSecondary: neutral[7],
	},
}

export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenue.ctaPrimary,
		backgroundPrimary: background.readerRevenue.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenue.ctaPrimaryHover,
		textSecondary: text.readerRevenue.ctaSecondary,
		backgroundSecondary: background.readerRevenue.ctaSecondary,
		backgroundSecondaryHover: background.readerRevenue.ctaSecondaryHover,
		borderSecondary: border.readerRevenue.ctaSecondary,
	},
}
export const buttonReaderRevenueBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueBrand.ctaPrimary,
		backgroundPrimary: background.readerRevenueBrand.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenueBrand.ctaPrimaryHover,
		textSecondary: text.readerRevenueBrand.ctaSecondary,
		backgroundSecondary: background.readerRevenueBrand.ctaSecondary,
		backgroundSecondaryHover:
			background.readerRevenueBrand.ctaSecondaryHover,
		borderSecondary: border.readerRevenueBrand.ctaSecondary,
	},
}

export const buttonReaderRevenueBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueBrandAlt.ctaPrimary,
		backgroundPrimary: background.readerRevenueBrandAlt.ctaPrimary,
		backgroundPrimaryHover:
			background.readerRevenueBrandAlt.ctaPrimaryHover,
		textSecondary: text.readerRevenueBrandAlt.ctaSecondary,
		backgroundSecondary: background.readerRevenueBrandAlt.ctaSecondary,
		backgroundSecondaryHover:
			background.readerRevenueBrandAlt.ctaSecondaryHover,
		borderSecondary: border.readerRevenueBrandAlt.ctaSecondary,
	},
}
