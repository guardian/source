import { palette } from "../index"

export type InlineErrorTheme = {
	text: string
}

export const inlineErrorDefault: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: palette.text.error,
	},
}

export const inlineErrorBrandDefault: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: palette.text.brand.error,
	},
}

export const inlineErrorLight = inlineErrorDefault
export const inlineErrorBrand = inlineErrorBrandDefault
