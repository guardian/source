import { palette } from "../index"

export type InlineErrorTheme = {
	text: string
}

export const inlineErrorLight: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: palette.text.error,
	},
}

export const inlineErrorBrand: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: palette.text.brand.error,
	},
}
