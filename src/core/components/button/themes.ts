import { neutral, brand, brandYellow } from "@guardian/src-foundations/palette"
import { ButtonTheme } from "@guardian/src-foundations/themes"

const text = {
	readerRevenue: {
		primary: neutral[100],
		secondary: neutral[60],
		ctaPrimary: brand[400],
		ctaSecondary: brandYellow[400],
	},
	readerRevenueAlt: {
		primary: neutral[7],
		secondary: neutral[60],
		ctaPrimary: neutral[100],
		ctaSecondary: neutral[7],
	},
}
const background = {
	readerRevenue: {
		primary: brand[400],
		ctaPrimary: brandYellow[400],
		ctaPrimaryHover: brandYellow[300],
		ctaSecondary: brand[400],
		ctaSecondaryHover: "#234B8A",
	},
	readerRevenueAlt: {
		primary: brandYellow[400],
		ctaPrimary: neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: brandYellow[400],
		ctaSecondaryHover: brandYellow[300],
	},
}
const border = {
	readerRevenue: {
		ctaSecondary: brandYellow[400],
	},
	readerRevenueAlt: {
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

export const buttonReaderRevenueAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueAlt.ctaPrimary,
		backgroundPrimary: background.readerRevenueAlt.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenueAlt.ctaPrimaryHover,
		textSecondary: text.readerRevenueAlt.ctaSecondary,
		backgroundSecondary: background.readerRevenueAlt.ctaSecondary,
		backgroundSecondaryHover: background.readerRevenueAlt.ctaSecondaryHover,
		borderSecondary: border.readerRevenueAlt.ctaSecondary,
	},
}
