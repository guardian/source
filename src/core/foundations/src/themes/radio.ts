import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "@guardian/src-foundations/palette"
import {
	inlineErrorLight,
	inlineErrorBrand,
	InlineErrorTheme,
} from "./inline-error"

export type RadioTheme = {
	borderHover: string
	border: string
	backgroundChecked: string
	textLabel: string
	textLabelSupporting: string
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
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
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
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.supporting,
		borderError: brandBorder.error,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const radioLight = radioDefault
