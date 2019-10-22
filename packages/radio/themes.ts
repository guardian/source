import { palette } from "@guardian/src-foundations"

export type RadioTheme = {
	hoverBorderColor: string
	color: string
	checkedColor: string
	textColor: string
	supportingTextColor: string
}

export const lightTheme: { radio: RadioTheme } = {
	radio: {
		hoverBorderColor: palette.brand.main,
		color: palette.neutral[60],
		checkedColor: palette.brand.main,
		textColor: palette.neutral[20],
		supportingTextColor: palette.neutral[46],
	},
}

export const darkTheme: { radio: RadioTheme } = {
	radio: {
		hoverBorderColor: palette.neutral[100],
		color: palette.brand.pastel,
		checkedColor: palette.neutral[100],
		textColor: palette.neutral[100],
		supportingTextColor: palette.neutral[60],
	},
}

export const blueTheme: { radio: RadioTheme } = {
	radio: {
		hoverBorderColor: palette.neutral[100],
		color: palette.brand.pastel,
		checkedColor: palette.neutral[100],
		textColor: palette.neutral[100],
		supportingTextColor: palette.neutral[60],
	},
}
