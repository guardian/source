import { palette } from "../index"

export type InlineErrorTheme = {
	textColor: string
}

export const inlineErrorDefault: { inlineError: InlineErrorTheme } = {
	inlineError: {
		textColor: palette.error.main,
	},
}

export const inlineErrorBrand: { inlineError: InlineErrorTheme } = {
	inlineError: {
		textColor: palette.error.bright,
	},
}
