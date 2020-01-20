import { border, background, text } from "../index"
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
		borderHover: border.brand.radioHover,
		border: border.brand.radio,
		backgroundChecked: background.brand.radioChecked,
		text: text.brand.radio,
		textSupporting: text.brand.radioSupporting,
		borderError: border.brand.radioError,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const radioLight = radioDefault
