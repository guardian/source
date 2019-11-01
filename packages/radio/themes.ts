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
		hoverBorderColor: palette.brand.main,
		color: palette.neutral[60],
		checkedColor: palette.brand.main,
		textColor: palette.neutral[20],
		supportingTextColor: palette.neutral[46],
		errorColor: palette.error.main,
	},
	...inlineErrorLightTheme,
}

export const blueTheme: { radio: RadioTheme; inlineError: InlineErrorTheme } = {
	radio: {
		hoverBorderColor: palette.neutral[100],
		color: palette.brand.faded,
		checkedColor: palette.neutral[100],
		textColor: palette.neutral[100],
		supportingTextColor: palette.brand.faded,
		errorColor: palette.error.bright,
	},
	...inlineErrorBlueTheme,
}
