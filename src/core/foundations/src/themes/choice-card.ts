import { border, text } from "../index"
import { InlineErrorTheme, inlineErrorDefault } from "./inline-error"

export type ChoiceCardTheme = {
	text: string
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
		text: text.supporting,
		borderColor: border.input,
		textChecked: text.inputChecked,
		backgroundChecked: "#E3F6FF",
		borderColorChecked: border.inputChecked,
		textHover: text.inputHover,
		borderColorHover: border.inputHover,
	},
	...inlineErrorDefault,
}
