import {
	background,
	border,
	brand,
	brandAlt,
	brandAltBackground,
	brandAltBorder,
	brandAltText,
	brandBackground,
	brandBorder,
	brandText,
	neutral,
	text,
} from '@guardian/src-foundations/palette';

export type ButtonTheme = {
	textPrimary: string;
	backgroundPrimary: string;
	backgroundPrimaryHover: string;
	textSecondary?: string;
	backgroundSecondary?: string;
	backgroundSecondaryHover?: string;
	textTertiary?: string;
	backgroundTertiaryHover?: string;
	borderTertiary?: string;
	textSubdued?: string;
};

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
};

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
};

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
};

const buttonText = {
	readerRevenue: {
		ctaPrimary: brand[400],
		ctaTertiary: brand[400],
	},
	readerRevenueBrand: {
		ctaPrimary: brand[400],
		ctaTertiary: brandAlt[400],
	},
	readerRevenueBrandAlt: {
		ctaPrimary: neutral[100],
		ctaTertiary: neutral[7],
	},
};
const buttonBackground = {
	readerRevenue: {
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: '#FFD213',
		ctaTertiaryHover: '#E5E5E5',
	},
	readerRevenueBrand: {
		ctaPrimary: brandAlt[400],
		ctaPrimaryHover: '#FFD213',
		ctaTertiaryHover: brand[300],
	},
	readerRevenueBrandAlt: {
		ctaPrimary: neutral[7],
		ctaPrimaryHover: '#454545',
		ctaTertiaryHover: '#FFD213',
	},
};
const buttonBorder = {
	readerRevenue: {
		ctaTertiary: brand[400],
	},
	readerRevenueBrand: {
		ctaTertiary: brandAlt[400],
	},
	readerRevenueBrandAlt: {
		ctaTertiary: neutral[7],
	},
};

export const buttonReaderRevenue: { button: ButtonTheme } = {
	button: {
		textPrimary: buttonText.readerRevenue.ctaPrimary,
		backgroundPrimary: buttonBackground.readerRevenue.ctaPrimary,
		backgroundPrimaryHover: buttonBackground.readerRevenue.ctaPrimaryHover,
		textTertiary: buttonText.readerRevenue.ctaTertiary,
		backgroundTertiaryHover:
			buttonBackground.readerRevenue.ctaTertiaryHover,
		borderTertiary: buttonBorder.readerRevenue.ctaTertiary,
	},
};
export const buttonReaderRevenueBrand: { button: ButtonTheme } = {
	button: {
		textPrimary: buttonText.readerRevenueBrand.ctaPrimary,
		backgroundPrimary: buttonBackground.readerRevenueBrand.ctaPrimary,
		backgroundPrimaryHover:
			buttonBackground.readerRevenueBrand.ctaPrimaryHover,
		textTertiary: buttonText.readerRevenueBrand.ctaTertiary,
		backgroundTertiaryHover:
			buttonBackground.readerRevenueBrand.ctaTertiaryHover,
		borderTertiary: buttonBorder.readerRevenueBrand.ctaTertiary,
	},
};

export const buttonReaderRevenueBrandAlt: { button: ButtonTheme } = {
	button: {
		textPrimary: buttonText.readerRevenueBrandAlt.ctaPrimary,
		backgroundPrimary: buttonBackground.readerRevenueBrandAlt.ctaPrimary,
		backgroundPrimaryHover:
			buttonBackground.readerRevenueBrandAlt.ctaPrimaryHover,
		textTertiary: buttonText.readerRevenueBrandAlt.ctaTertiary,
		backgroundTertiaryHover:
			buttonBackground.readerRevenueBrandAlt.ctaTertiaryHover,
		borderTertiary: buttonBorder.readerRevenueBrandAlt.ctaTertiary,
	},
};
