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
		textInput: text.textInput,
		textLabel: text.textInputLabel,
		textOptionalLabel: text.textInputOptionalLabel,
		textSupporting: text.textInputSupporting,
		textError: text.textInputError,
		backgroundInput: background.textInput,
		border: border.textInput,
		borderError: border.textInputError,
	},
	...inlineErrorDefault,
}

// continue to expose legacy theme names
export const textInputLight = textInputDefault
