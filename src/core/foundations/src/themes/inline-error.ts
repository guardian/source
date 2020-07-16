import { text, brandText } from "@guardian/src-foundations/palette"

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
