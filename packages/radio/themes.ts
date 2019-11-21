import { palette } from "@guardian/src-foundations"
import {
	lightTheme as inlineErrorLightTheme,
	blueTheme as inlineErrorBlueTheme,
	InlineErrorTheme,
} from "@guardian/src-inline-error"

export type RadioTheme = {
	hoverBorderColor: string
	color: string
	checkedColor: string
	textColor: string
	supportingTextColor: string
	errorColor: string
}

export const lightTheme: {
	radio: RadioTheme
	inlineError: InlineErrorTheme
} = {
	radio: {
		color: palette.border.radio, // consider renaming to border
		hoverBorderColor: palette.border.radioHover,
		checkedColor: palette.background.radioChecked, // consider renaming to backgroundChecked
		textColor: palette.text.primary,
		supportingTextColor: palette.text.secondary,
		errorColor: palette.border.error,
	},
	...inlineErrorLightTheme,
}

export const blueTheme: { radio: RadioTheme; inlineError: InlineErrorTheme } = {
	radio: {
		color: palette.border.radio, // consider renaming to border
		hoverBorderColor: palette.border.radioHover,
		checkedColor: palette.background.brand.radioChecked, // consider renaming to backgroundChecked
		textColor: palette.text.brand.primary,
		supportingTextColor: palette.text.brand.secondary,
		errorColor: palette.border.brand.error,
	},
	...inlineErrorBlueTheme,
}
