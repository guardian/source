import { border, background, text } from "../index"
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
		border: border.checkbox,
		borderHover: border.checkboxHover,
		borderChecked: border.checkboxChecked,
		borderError: border.checkboxError,
		backgroundChecked: background.checkboxChecked,
		text: text.checkbox,
		textSupporting: text.checkboxSupporting,
		textIndeterminate: text.checkboxIndeterminate,
	},
	...inlineErrorDefault,
}

export const checkboxBrand: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: border.brand.checkbox,
		borderHover: border.brand.checkboxHover,
		borderChecked: border.brand.checkboxChecked,
		borderError: border.brand.checkboxError,
		backgroundChecked: background.brand.checkboxChecked,
		text: text.brand.checkbox,
		textSupporting: text.brand.checkboxSupporting,
		textIndeterminate: text.brand.checkboxIndeterminate,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
