import { palette } from "../index"
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
		border: palette.border.checkbox,
		borderHover: palette.border.checkboxHover,
		borderChecked: palette.border.checkboxChecked,
		borderError: palette.border.checkboxError,
		backgroundChecked: palette.background.checkboxChecked,
		text: palette.text.checkbox,
		textSupporting: palette.text.checkboxSupporting,
		textIndeterminate: palette.text.checkboxIndeterminate,
	},
	...inlineErrorDefault,
}

export const checkboxBrand: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: palette.border.brand.checkbox,
		borderHover: palette.border.brand.checkboxHover,
		borderChecked: palette.border.brand.checkboxChecked,
		borderError: palette.border.brand.checkboxError,
		backgroundChecked: palette.background.brand.checkboxChecked,
		text: palette.text.brand.checkbox,
		textSupporting: palette.text.brand.checkboxSupporting,
		textIndeterminate: palette.text.brand.checkboxIndeterminate,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
