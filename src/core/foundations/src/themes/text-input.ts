import { text, background, border } from "../index"
import { inlineErrorDefault, InlineErrorTheme } from "./inline-error"

export type TextInputTheme = {
	textInput: string
	textLabel: string
	textOptionalLabel: string
	textSupporting: string
	textError: string
	backgroundInput: string
	border: string
	borderError: string
}

export const textInputDefault: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textInput: text.input,
		textLabel: text.input,
		textOptionalLabel: text.supporting,
		textSupporting: text.supporting,
		textError: text.error,
		backgroundInput: background.input,
		border: border.input,
		borderError: border.error,
	},
	...inlineErrorDefault,
}

// continue to expose legacy theme names
export const textInputLight = textInputDefault
