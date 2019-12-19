import { palette } from "../index"
import {
	inlineErrorLight,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type RadioTheme = {
	borderHover: string
	border: string
	backgroundChecked: string
	text: string
	textSupporting: string
	textError: string
}

export const radioLight: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.radioHover,
		border: palette.border.radio,
		backgroundChecked: palette.background.radioChecked,
		text: palette.text.primary,
		textSupporting: palette.text.secondary,
		textError: palette.border.error,
	},
	...inlineErrorLight,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.brand.radioHover,
		border: palette.border.brand.radio,
		backgroundChecked: palette.background.brand.radioChecked,
		text: palette.text.brand.primary,
		textSupporting: palette.text.brand.secondary,
		textError: palette.border.brand.error,
	},
	...inlineErrorBrand,
}
