import { palette } from "../index"
import {
	inlineErrorDefault,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type RadioTheme = {
	borderHover: string
	// this name needs some thought!
	color: string
	checked: string
	text: string
	textSupporting: string
	textError: string
}

export const radioDefault: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.brand.main,
		color: palette.neutral[60],
		checked: palette.brand.main,
		text: palette.neutral[20],
		textSupporting: palette.neutral[46],
		textError: palette.error.main,
	},
	...inlineErrorDefault,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.neutral[100],
		color: palette.brand.faded,
		checked: palette.neutral[100],
		text: palette.neutral[100],
		textSupporting: palette.brand.faded,
		textError: palette.error.bright,
	},
	...inlineErrorBrand,
}
