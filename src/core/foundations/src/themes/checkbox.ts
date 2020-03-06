import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "../index"
import {
	inlineErrorDefault,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type CheckboxTheme = {
	border: string
	borderHover: string
	borderChecked: string
	borderError: string
	backgroundChecked: string
	text: string
	textSupporting: string
	textIndeterminate: string
}

export const checkboxDefault: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: border.input,
		borderHover: border.inputHover,
		borderChecked: border.inputChecked,
		borderError: border.error,
		backgroundChecked: background.inputChecked,
		text: text.primary,
		textSupporting: text.supporting,
		textIndeterminate: text.supporting,
	},
	...inlineErrorDefault,
}

export const checkboxBrand: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: brandBorder.input,
		borderHover: brandBorder.inputHover,
		borderChecked: brandBorder.inputChecked,
		borderError: brandBorder.error,
		backgroundChecked: brandBackground.inputChecked,
		text: brandText.primary,
		textSupporting: brandText.supporting,
		textIndeterminate: brandText.supporting,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
