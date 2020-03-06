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
		borderHover: border.inputHover,
		border: border.input,
		backgroundChecked: background.inputChecked,
		text: text.input,
		textSupporting: text.inputSupporting,
		borderError: border.error,
	},
	...inlineErrorLight,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: brandBorder.inputHover,
		border: brandBorder.input,
		backgroundChecked: brandBackground.inputChecked,
		text: brandText.input,
		textSupporting: brandText.supporting,
		borderError: brandBorder.error,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const radioLight = radioDefault
