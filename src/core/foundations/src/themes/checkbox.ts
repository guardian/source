import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from "@guardian/src-foundations/palette"
import {
	userFeedbackDefault,
	userFeedbackBrand,
	UserFeedbackTheme,
} from "./user-feedback"

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
	userFeedback: UserFeedbackTheme
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
	...userFeedbackDefault,
}

export const checkboxBrand: {
	checkbox: CheckboxTheme
	userFeedback: UserFeedbackTheme
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
	...userFeedbackBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
