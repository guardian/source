import { text } from "../index"

export type LinkTheme = {
	textPrimary: string
	textPrimaryHover: string
	textSecondary?: string
	textSecondaryHover?: string
}

export const linkDefault: { link: LinkTheme } = {
	link: {
		textPrimary: text.linkPrimary,
		textPrimaryHover: text.linkPrimaryHover,
		textSecondary: text.linkSecondary,
		textSecondaryHover: text.linkSecondaryHover,
	},
}

export const linkBrand: { link: LinkTheme } = {
	link: {
		textPrimary: text.brand.linkPrimary,
		textPrimaryHover: text.brand.linkPrimaryHover,
	},
}

export const linkBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: text.brandAlt.linkPrimary,
		textPrimaryHover: text.brandAlt.linkPrimaryHover,
	},
}

// continue to expose legacy theme names
export const linkLight = linkDefault
export const linkBrandYellow = linkBrandAlt
