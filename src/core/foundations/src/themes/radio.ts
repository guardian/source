import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "../index"
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
	borderError: string
}

export const radioDefault: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: border.radioHover,
		border: border.radio,
		backgroundChecked: background.radioChecked,
		text: text.radio,
		textSupporting: text.radioSupporting,
		borderError: border.radioError,
	},
	...inlineErrorLight,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: brandBorder.radioHover,
		border: brandBorder.radio,
		backgroundChecked: brandBackground.radioChecked,
		text: brandText.radio,
		textSupporting: brandText.radioSupporting,
		borderError: brandBorder.radioError,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const radioLight = radioDefault
