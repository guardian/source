import { brandAltText, brandText, text } from '@guardian/source-foundations';

export type LinkTheme = {
	textPrimary: string;
	textPrimaryHover: string;
	textSecondary?: string;
	textSecondaryHover?: string;
};

export const linkThemeDefault: { link: LinkTheme } = {
	link: {
		textPrimary: text.anchorPrimary,
		textPrimaryHover: text.anchorPrimary,
		textSecondary: text.anchorSecondary,
		textSecondaryHover: text.anchorSecondary,
	},
};

export const linkThemeBrand: { link: LinkTheme } = {
	link: {
		textPrimary: brandText.anchorPrimary,
		textPrimaryHover: brandText.anchorPrimary,
	},
};

export const linkThemeBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: brandAltText.anchorPrimary,
		textPrimaryHover: brandAltText.anchorPrimary,
	},
};
