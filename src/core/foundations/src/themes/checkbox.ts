import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "@guardian/src-foundations/palette"
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
	textLabel: string
	textLabelSupporting: string
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
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
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
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.inputLabelSupporting,
		textIndeterminate: brandText.supporting,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
