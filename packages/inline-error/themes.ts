import { palette } from "@guardian/src-foundations"

export type InlineErrorTheme = {
	color: string
}

export const lightTheme: { inlineError: InlineErrorTheme } = {
	inlineError: {
		color: palette.text.error,
	},
}

export const blueTheme: { inlineError: InlineErrorTheme } = {
	inlineError: {
		color: palette.text.brand.error,
	},
}
