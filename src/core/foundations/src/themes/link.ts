import { text, brandText, brandAltText } from "../index"

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
		textPrimary: brandText.linkPrimary,
		textPrimaryHover: brandText.linkPrimaryHover,
	},
}

export const linkBrandAlt: { link: LinkTheme } = {
	link: {
		textPrimary: brandAltText.linkPrimary,
		textPrimaryHover: brandAltText.linkPrimaryHover,
	},
}

// continue to expose legacy theme names
export const linkLight = linkDefault
export const linkBrandYellow = linkBrandAlt
