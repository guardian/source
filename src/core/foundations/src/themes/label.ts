import { text, brandText } from "@guardian/src-foundations/palette"
import {
	userFeedbackDefault,
	userFeedbackBrand,
	UserFeedbackTheme,
} from "./user-feedback"

export type LabelTheme = {
	textLabel: string
	textOptional: string
	textSupporting: string
	textError: string
	textSuccess: string
}

export const labelDefault: {
	label: LabelTheme
	userFeedback: UserFeedbackTheme
} = {
	label: {
		textLabel: text.inputLabel,
		textOptional: text.supporting,
		textSupporting: text.supporting,
		textError: text.error,
		textSuccess: text.success,
	},
	...userFeedbackDefault,
}

export const labelBrand: {
	label: LabelTheme
	userFeedback: UserFeedbackTheme
} = {
	label: {
		textLabel: brandText.inputLabel,
		textOptional: brandText.supporting,
		textSupporting: brandText.supporting,
		textError: brandText.error,
		textSuccess: brandText.success,
	},
	...userFeedbackBrand,
}
