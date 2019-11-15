import { palette } from "../index"
import { inlineErrorDefault, InlineErrorTheme } from "./inline-error"

export type TextInputTheme = {
	textInput: string
	textLabel: string
	backgroundInput: string
}

export const textInputDefault: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textInput: palette.neutral[7],
		textLabel: palette.neutral[20],
		backgroundInput: palette.neutral[100],
	},
	...inlineErrorDefault,
}
