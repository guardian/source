import { palette } from "../index"

export type LinkTheme = {
	textPrimary: string
	textPrimaryHover: string
	textSecondary?: string
	textSecondaryHover?: string
}

export const linkDefault: { link: LinkTheme } = {
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
	},
}

export const linkBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: palette.text.brandAlt.linkPrimary,
		textPrimaryHover: palette.text.brandAlt.linkPrimaryHover,
	},
}

// continue to expose legacy theme names
export const linkLight = linkDefault
export const linkBrandYellow = linkBrandAlt

export const link = {
	linkDefault,
	linkBrand,
	linkBrandAlt,
	// continue to expose legacy theme names
	linkLight,
	linkBrandYellow,
}
