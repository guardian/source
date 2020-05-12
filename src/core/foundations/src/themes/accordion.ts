import { text, border } from "@guardian/src-foundations/palette"

export type AccordionTheme = {
	textPrimary: string
	borderPrimary: string
}

export const accordionDefault: { accordion: AccordionTheme } = {
	accordion: {
		textPrimary: text.primary,
		borderPrimary: border.primary,
	},
}
