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
		inputColor: palette.neutral[7],
		textColor: palette.neutral[20],
		backgroundColor: palette.neutral[100],
	},
	...inlineErrorLightTheme,
}
