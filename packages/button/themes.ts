import { palette } from "@guardian/src-foundations"
import { ButtonTheme } from "@guardian/src-foundations/themes"

const text = {
	readerRevenue: {
		primary: palette.neutral[100],
		secondary: palette.neutral[60],
		ctaPrimary: palette.brand.main,
		ctaSecondary: palette.brandYellow.main,
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
		primary: palette.brand.main,
		ctaPrimary: palette.brandYellow.main,
		ctaPrimaryHover: palette.brandYellow.dark,
		ctaSecondary: palette.brand.main,
		ctaSecondaryHover: "#234B8A",
	},
	readerRevenueYellow: {
		primary: palette.brandYellow.main,
		ctaPrimary: palette.neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: palette.brandYellow.main,
		ctaSecondaryHover: palette.brandYellow.dark,
	},
}
const border = {
	readerRevenue: {
		ctaSecondary: palette.brandYellow.main,
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
