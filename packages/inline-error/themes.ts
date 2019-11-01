import { palette } from "@guardian/src-foundations"

export type InlineErrorTheme = {
	color: string
}

export const lightTheme: { inlineError: InlineErrorTheme } = {
	inlineError: {
		color: palette.error.main,
	},
}

export const blueTheme: { inlineError: InlineErrorTheme } = {
	inlineError: {
		color: palette.error.bright,
	},
}
