import { palette } from "../index"
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
	// TODO: remove textError as it is not used
	textError: string
	borderError: string
}

export const radioLight: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.radioHover,
		border: palette.border.radio,
		backgroundChecked: palette.background.radioChecked,
		text: palette.text.radio,
		textSupporting: palette.text.radioSupporting,
		// TODO: remove textError as it is not used
		textError: palette.border.radioError,
		borderError: palette.border.radioError,
	},
	...inlineErrorLight,
}

export const radioBrand: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.brand.radioHover,
		border: palette.border.brand.radio,
		backgroundChecked: palette.background.brand.radioChecked,
		text: palette.text.brand.radio,
		textSupporting: palette.text.brand.radioSupporting,
		// TODO: remove textError as it is not used
		textError: palette.border.brand.radioError,
		borderError: palette.border.brand.radioError,
	},
	...inlineErrorBrand,
}
