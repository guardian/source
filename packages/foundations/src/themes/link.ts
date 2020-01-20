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

export const linkBrandDefault: { link: LinkTheme } = {
	link: {
		textPrimary: palette.text.brandDefault.linkPrimary,
		textPrimaryHover: palette.text.brandDefault.linkPrimaryHover,
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
export const linkBrand = linkBrandDefault
export const linkBrandYellow = linkBrandAlt

export const link = {
	linkDefault,
	linkBrandDefault,
	linkBrandAlt,
	// continue to expose legacy theme names
	linkLight,
	linkBrand,
	linkBrandYellow,
}
