import { palette } from "../index"
import { inlineErrorLight, InlineErrorTheme } from "./inline-error"

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

export const textInputLight: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textInput: palette.text.textInput,
		textLabel: palette.text.textInputLabel,
		textOptionalLabel: palette.text.textInputOptionalLabel,
		textSupporting: palette.text.textInputSupporting,
		textError: palette.text.textInputError,
		backgroundInput: palette.background.textInput,
		border: palette.border.textInput,
		borderError: palette.border.textInputError,
	},
	...inlineErrorLight,
}
