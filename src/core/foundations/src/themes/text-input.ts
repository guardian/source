import { text, background, border } from "../index"
import { inlineErrorDefault, InlineErrorTheme } from "./inline-error"

export type TextInputTheme = {
	textUserInput: string
	textLabel: string
	textLabelOptional: string
	textLabelSupporting: string
	textError: string
	backgroundInput: string
	border: string
	borderActive: string
	borderError: string
}

export const textInputDefault: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textUserInput: text.userInput,
		textLabel: text.inputLabel,
		textLabelOptional: text.supporting,
		textLabelSupporting: text.supporting,
		textError: text.error,
		backgroundInput: background.input,
		border: border.input,
		borderActive: border.inputActive,
		borderError: border.error,
	},
	...inlineErrorDefault,
}

// continue to expose legacy theme names
export const textInputLight = textInputDefault
