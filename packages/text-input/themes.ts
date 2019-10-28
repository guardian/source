import { palette } from "@guardian/src-foundations"

export type TextInputTheme = {
	inputColor: string
	textColor: string
}

export const lightTheme: { textInput: TextInputTheme } = {
	textInput: {
		inputColor: palette.neutral[7],
		textColor: palette.neutral[20],
	},
}

export const darkTheme: { textInput: TextInputTheme } = {
	textInput: {
		inputColor: palette.brand.pastel,
		textColor: palette.neutral[100],
	},
}
