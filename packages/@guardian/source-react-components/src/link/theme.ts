import { palette } from '@guardian/source-foundations';

export type LinkTheme = {
	textPrimary: string;
	textPrimaryHover: string;
	textSecondary?: string;
	textSecondaryHover?: string;
};

export const linkThemeDefault: { link: LinkTheme } = {
	link: {
		textPrimary: palette.brand[500],
		textPrimaryHover: palette.brand[500],
		textSecondary: palette.neutral[7],
		textSecondaryHover: palette.neutral[7],
	},
};

export const linkThemeBrand: { link: LinkTheme } = {
	link: {
		textPrimary: palette.neutral[100],
		textPrimaryHover: palette.neutral[100],
	},
};

export const linkThemeBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: palette.neutral[7],
		textPrimaryHover: palette.neutral[7],
	},
};
