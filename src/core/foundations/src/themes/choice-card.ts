import { border, text, background } from "@guardian/src-foundations/palette"
import { UserFeedbackTheme, userFeedbackDefault } from "./user-feedback"

export type ChoiceCardTheme = {
	textLabel: string
	textLabelSupporting: string
	textGroupLabel: string
	textGroupLabelSupporting: string
	border: string
	textChecked: string
	backgroundChecked: string
	backgroundTick: string
	borderChecked: string
	textHover: string
	borderHover: string
	textError: string
	borderError: string
}

export const choiceCardDefault: {
	choiceCard: ChoiceCardTheme
	userFeedback: UserFeedbackTheme
} = {
	choiceCard: {
		textLabel: text.supporting,
		textLabelSupporting: text.supporting,
		textGroupLabel: text.groupLabel,
		textGroupLabelSupporting: text.groupLabelSupporting,
		border: border.input,
		textChecked: text.inputChecked,
		backgroundChecked: "#E3F6FF",
		backgroundTick: background.inputChecked,
		borderChecked: border.inputChecked,
		textHover: text.inputHover,
		borderHover: border.inputHover,
		textError: text.error,
		borderError: border.error,
	},
	...userFeedbackDefault,
}
