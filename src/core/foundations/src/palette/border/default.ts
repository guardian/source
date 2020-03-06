import {
	neutral,
	error as _error,
	success as _success,
	brand,
	sport,
} from "../global"

const primary = neutral[60]
const secondary = neutral[86]
const success = _success[400]
const error = _error[400]
const input = neutral[60]
const inputChecked = brand[500]
const inputHover = brand[500]
const focusHalo = sport[500]

const root = {
	primary,
	secondary,
	success,
	error,
	input,
	inputChecked,
	inputHover,
	focusHalo,
}

const checkbox = {
	checkbox: input,
	checkboxHover: inputHover,
	checkboxChecked: inputChecked,
	checkboxError: error,
}

const choiceCard = {
	choiceCard: input,
	choiceCardHover: inputHover,
	choiceCardChecked: inputChecked,
}

const radio = {
	radio: input,
	radioHover: inputHover,
	radioError: error,
}

const textInput = {
	textInput: input,
	textInputError: error,
}

export const border = {
	...root,
	...checkbox,
	...choiceCard,
	...radio,
	...textInput,
}
