import { border, text, background } from "../index"
import { InlineErrorTheme, inlineErrorDefault } from "./inline-error"

export type ChoiceCardTheme = {
	textLabel: string
	textLabelSupporting: string
	textGroupLabel: string
	textGroupLabelSupporting: string
	borderColor: string
	textChecked: string
	backgroundChecked: string
	backgroundTick: string
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
		backgroundTick: background.inputChecked,
		borderColorChecked: border.inputChecked,
		textHover: text.inputHover,
		borderColorHover: border.inputHover,
	},
	...inlineErrorDefault,
}
