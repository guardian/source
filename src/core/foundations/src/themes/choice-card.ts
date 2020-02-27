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
		text: text.choiceCard,
		borderColor: border.choiceCard,
		textChecked: text.choiceCardChecked,
		backgroundChecked: "rgba(0, 122, 188, 0.1)",
		borderColorChecked: border.choiceCardChecked,
		textHover: text.choiceCardHover,
		borderColorHover: border.choiceCardHover,
	},
	...inlineErrorDefault,
}
