import { palette } from "@guardian/src-foundations"
import {
	lightTheme as inlineErrorLightTheme,
	InlineErrorTheme,
} from "@guardian/src-inline-error"

export type TextInputTheme = {
	inputColor: string
	textColor: string
	backgroundColor: string
}

export const lightTheme: {
	textInput: TextInputTheme
	inlineError: InlineErrorTheme
} = {
	textInput: {
		inputColor: palette.text.primary,
		textColor: palette.text.primary,
		backgroundColor: palette.background.primary,
	},
	...inlineErrorLightTheme,
}
