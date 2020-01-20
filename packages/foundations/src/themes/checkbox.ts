import { palette } from "../index"
import {
	inlineErrorDefault,
	inlineErrorBrandDefault,
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

export const checkboxBrandDefault: {
	checkbox: CheckboxTheme
	inlineError: InlineErrorTheme
} = {
	checkbox: {
		border: palette.border.brandDefault.checkbox,
		borderHover: palette.border.brandDefault.checkboxHover,
		borderChecked: palette.border.brandDefault.checkboxChecked,
		borderError: palette.border.brandDefault.checkboxError,
		backgroundChecked: palette.background.brandDefault.checkboxChecked,
		text: palette.text.brandDefault.checkbox,
		textSupporting: palette.text.brandDefault.checkboxSupporting,
		textIndeterminate: palette.text.brandDefault.checkboxIndeterminate,
	},
	...inlineErrorBrandDefault,
}

// continue to expose legacy theme names
export const checkboxLight = checkboxDefault
export const checkboxBrand = checkboxBrandDefault
