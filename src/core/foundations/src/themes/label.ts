import { text } from "@guardian/src-foundations/palette"
import { userFeedbackDefault, UserFeedbackTheme } from "./user-feedback"

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
