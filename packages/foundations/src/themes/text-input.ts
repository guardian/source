import { palette } from "../index"
import { inlineErrorLight, InlineErrorTheme } from "./inline-error"

export type TextInputTheme = {
	textInput: string
	textLabel: string
	backgroundInput: string
}

export const textInputLight: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textInput: palette.text.textInput,
		textLabel: palette.text.textInput,
		backgroundInput: palette.background.textInput,
	},
	...inlineErrorLight,
}
