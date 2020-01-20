import { text, brandText } from "../index"

export type InlineErrorTheme = {
	text: string
}

export const inlineErrorDefault: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: text.error,
	},
}

export const inlineErrorBrand: { inlineError: InlineErrorTheme } = {
	inlineError: {
		text: brandText.error,
	},
}

// continue to expose legacy theme names
export const inlineErrorLight = inlineErrorDefault
