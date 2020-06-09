import { text, brandText } from "@guardian/src-foundations/palette"

export type UserFeedbackTheme = {
	textSuccess?: string
	textError: string
}

export const userFeedbackDefault: { userFeedback: UserFeedbackTheme } = {
	userFeedback: {
		textSuccess: text.success,
		textError: text.error,
	},
}

export const userFeedbackBrand: { userFeedback: UserFeedbackTheme } = {
	userFeedback: {
		textError: brandText.error,
	},
}
