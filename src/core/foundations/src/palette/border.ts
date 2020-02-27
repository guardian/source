import { neutral, error, brand, sport } from "./global"

export const border = {
	primary: neutral[60],
	secondary: neutral[86],
	error: error[400],
	focusHalo: sport[500],
	checkbox: neutral[60],
	checkboxHover: brand[500],
	checkboxChecked: brand[500],
	checkboxError: error[400],
	choiceCard: neutral[60],
	choiceCardChecked: brand[500],
	choiceCardHover: brand[500],
	radio: neutral[60],
	radioHover: brand[500],
	radioError: error[400],
	textInput: neutral[60],
	textInputError: error[400],
}
export const brandBorder = {
	error: error[500],
	checkbox: brand[800],
	checkboxHover: neutral[100],
	checkboxChecked: neutral[100],
	checkboxError: error[500],
	radio: brand[800],
	radioHover: neutral[100],
	radioError: error[500],
}
