import { palette } from "../index"
import { inlineErrorDefault, InlineErrorTheme } from "./inline-error"

export type TextInputTheme = {
	textColorInput: string
	textColorLabel: string
	backgroundColor: string
}

export const textInputDefault: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		textColorInput: palette.neutral[7],
		textColorLabel: palette.neutral[20],
		backgroundColor: palette.neutral[100],
	},
	...inlineErrorDefault,
}
