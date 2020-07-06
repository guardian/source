import { text, background, border } from "@guardian/src-foundations/palette"
import { userFeedbackDefault, UserFeedbackTheme } from "./user-feedback"

export type SelectTheme = {
	textUserInput: string
	textLabel: string
	textLabelOptional: string
	textLabelSupporting: string
	textError: string
	textSuccess: string
	backgroundInput: string
	border: string
	borderActive: string
	borderError: string
	borderSuccess: string
}

export const selectDefault: {
	select: SelectTheme
	userFeedback: UserFeedbackTheme
} = {
	select: {
		textUserInput: text.userInput,
		textLabel: text.inputLabel,
		textLabelOptional: text.supporting,
		textLabelSupporting: text.supporting,
		textError: text.error,
		textSuccess: text.success,
		backgroundInput: background.input,
		border: border.input,
		borderActive: border.inputActive,
		borderError: border.error,
		borderSuccess: border.success,
	},
	...userFeedbackDefault,
}
