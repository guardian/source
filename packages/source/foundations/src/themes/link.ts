import {
	text,
	brandText,
	brandAltText,
} from '../palette';

export type LinkTheme = {
	textPrimary: string;
	textPrimaryHover: string;
	textSecondary?: string;
	textSecondaryHover?: string;
};

export const linkDefault: { link: LinkTheme } = {
	link: {
		textPrimary: text.anchorPrimary,
		textPrimaryHover: text.anchorPrimary,
		textSecondary: text.anchorSecondary,
		textSecondaryHover: text.anchorSecondary,
	},
};

export const linkBrand: { link: LinkTheme } = {
	link: {
		textPrimary: brandText.anchorPrimary,
		textPrimaryHover: brandText.anchorPrimary,
	},
};

export const linkBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: brandAltText.anchorPrimary,
		textPrimaryHover: brandAltText.anchorPrimary,
	},
};
