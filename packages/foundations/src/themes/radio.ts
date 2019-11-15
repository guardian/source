import { palette } from "../index"
import {
	inlineErrorDefault,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type RadioTheme = {
	hoverBorderColor: string
	// this name needs some thought!
	color: string
	checkedColor: string
	textColor: string
	textColorSupporting: string
	textColorError: string
}

export const radioDefault: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		hoverBorderColor: palette.brand.main,
		color: palette.neutral[60],
		checkedColor: palette.brand.main,
		textColor: palette.neutral[20],
		textColorSupporting: palette.neutral[46],
		textColorError: palette.error.main,
	},
	...inlineErrorDefault,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		hoverBorderColor: palette.neutral[100],
		color: palette.brand.faded,
		checkedColor: palette.neutral[100],
		textColor: palette.neutral[100],
		textColorSupporting: palette.brand.faded,
		textColorError: palette.error.bright,
	},
	...inlineErrorBrand,
}
