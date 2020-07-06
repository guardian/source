import { text, background, border } from "@guardian/src-foundations/palette"
import { userFeedbackDefault, UserFeedbackTheme } from "./user-feedback"

export type TextInputTheme = {
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

export const textInputDefault: {
	textInput: TextInputTheme
	userFeedback: UserFeedbackTheme
} = {
	textInput: {
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

// continue to expose legacy theme names
export const textInputLight = textInputDefault
