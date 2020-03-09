import { border, text } from "../index"
import { InlineErrorTheme, inlineErrorDefault } from "./inline-error"

export type ChoiceCardTheme = {
	textLabel: string
	textLabelSupporting: string
	textGroupLabel: string
	textGroupLabelSupporting: string
	borderColor: string
	textChecked: string
	backgroundChecked: string
	borderColorChecked: string
	textHover: string
	borderColorHover: string
}

export const choiceCardDefault: {
	choiceCard: ChoiceCardTheme
	inlineError: InlineErrorTheme
} = {
	choiceCard: {
		textLabel: text.supporting,
		textLabelSupporting: text.supporting,
		textGroupLabel: text.groupLabel,
		textGroupLabelSupporting: text.groupLabelSupporting,
		borderColor: border.input,
		textChecked: text.inputChecked,
		backgroundChecked: "#E3F6FF",
		borderColorChecked: border.inputChecked,
		textHover: text.inputHover,
		borderColorHover: border.inputHover,
	},
	...inlineErrorDefault,
}
