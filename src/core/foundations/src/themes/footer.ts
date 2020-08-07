import {
	brandBorder,
	brandBackground,
	brandText,
} from "@guardian/src-foundations/palette"

export type FooterTheme = {
	border: string
	background: string
	text: string
}

export const footerBrand: {
	footer: FooterTheme
} = {
	footer: {
		border: brandBorder.primary,
		background: brandBackground.primary,
		text: brandText.primary,
	},
}
