import { text, brandText } from "@guardian/src-foundations/palette"

export type LabelTheme = {
	textLabel: string
	textOptional: string
	textSupporting: string
	textError: string
	textSuccess: string
}

export const labelDefault: {
	label: LabelTheme
} = {
	label: {
		textLabel: text.inputLabel,
		textOptional: text.supporting,
		textSupporting: text.supporting,
		textError: text.error,
		textSuccess: text.success,
	},
}

export const labelBrand: {
	label: LabelTheme
} = {
	label: {
		textLabel: brandText.inputLabel,
		textOptional: brandText.supporting,
		textSupporting: brandText.supporting,
		textError: brandText.error,
		textSuccess: brandText.success,
	},
}
