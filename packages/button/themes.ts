import { palette } from "@guardian/src-foundations"
import { ButtonTheme } from "@guardian/src-foundations/themes"

const text = {
	readerRevenue: {
		primary: palette.neutral[100],
		secondary: palette.neutral[60],
		ctaPrimary: palette.brand[400],
		ctaSecondary: palette.brandYellow[400],
	},
	readerRevenueYellow: {
		primary: palette.neutral[7],
		secondary: palette.neutral[60],
		ctaPrimary: palette.neutral[100],
		ctaSecondary: palette.neutral[7],
	},
}
const background = {
	readerRevenue: {
		primary: palette.brand[400],
		ctaPrimary: palette.brandYellow[400],
		ctaPrimaryHover: palette.brandYellow[300],
		ctaSecondary: palette.brand[400],
		ctaSecondaryHover: "#234B8A",
	},
	readerRevenueYellow: {
		primary: palette.brandYellow[400],
		ctaPrimary: palette.neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: palette.brandYellow[400],
		ctaSecondaryHover: palette.brandYellow[300],
	},
}
const border = {
	readerRevenue: {
		ctaSecondary: palette.brandYellow[400],
	},
	readerRevenueYellow: {
		ctaSecondary: palette.neutral[7],
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

export const buttonReaderRevenueYellow: { button: ButtonTheme } = {
	button: {
		textPrimary: text.readerRevenueYellow.ctaPrimary,
		backgroundPrimary: background.readerRevenueYellow.ctaPrimary,
		backgroundPrimaryHover: background.readerRevenueYellow.ctaPrimaryHover,
		textSecondary: text.readerRevenueYellow.ctaSecondary,
		backgroundSecondary: background.readerRevenueYellow.ctaSecondary,
		backgroundSecondaryHover:
			background.readerRevenueYellow.ctaSecondaryHover,
		borderSecondary: border.readerRevenueYellow.ctaSecondary,
	},
}
