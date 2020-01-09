import { palette } from "../index"

export type LinkTheme = {
	textPrimary: string
	textPrimaryHover: string
	textSecondary: string
	textSecondaryHover: string
}

export const linkLight: { link: LinkTheme } = {
	link: {
		textPrimary: palette.text.linkPrimary,
		textPrimaryHover: palette.text.linkPrimaryHover,
		textSecondary: palette.text.linkSecondary,
		textSecondaryHover: palette.text.linkSecondaryHover,
	},
}

export const linkBrand: { link: LinkTheme } = {
	link: {
		textPrimary: palette.text.brand.linkPrimary,
		textPrimaryHover: palette.text.brand.linkPrimaryHover,
		textSecondary: palette.text.brand.linkSecondary,
		textSecondaryHover: palette.text.brand.linkSecondaryHover,
	},
}

export const linkBrandYellow: { link: LinkTheme } = {
	link: {
		textPrimary: palette.text.brandYellow.linkPrimary,
		textPrimaryHover: palette.text.brandYellow.linkPrimaryHover,
		textSecondary: palette.text.brandYellow.linkSecondary,
		textSecondaryHover: palette.text.brandYellow.linkSecondaryHover,
	},
}
export const link = {
	linkLight,
	linkBrand,
	linkBrandYellow,
}
