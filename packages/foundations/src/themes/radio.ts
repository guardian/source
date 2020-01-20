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
	borderError: string
}

export const radioDefault: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.radioHover,
		border: palette.border.radio,
		backgroundChecked: palette.background.radioChecked,
		text: palette.text.radio,
		textSupporting: palette.text.radioSupporting,
		borderError: palette.border.radioError,
	},
	...inlineErrorLight,
}

export const radioBrandDefault: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		borderHover: palette.border.brand.radioHover,
		border: palette.border.brand.radio,
		backgroundChecked: palette.background.brand.radioChecked,
		text: palette.text.brand.radio,
		textSupporting: palette.text.brand.radioSupporting,
		borderError: palette.border.brand.radioError,
	},
	...inlineErrorBrand,
}

// continue to expose legacy theme names
export const radioLight = radioDefault
export const radioBrand = radioBrandDefault
