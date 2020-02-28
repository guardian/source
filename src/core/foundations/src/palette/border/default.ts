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
const checkableChecked = brand[500]
const checkableHover = brand[500]
const focusHalo = sport[500]

const root = {
	primary,
	secondary,
	success,
	error,
	checkableChecked,
	checkableHover,
	focusHalo,
}

const checkbox = {
	checkbox: primary,
	checkboxHover: checkableHover,
	checkboxChecked: checkableChecked,
	checkboxError: error,
}

const choiceCard = {
	choiceCard: primary,
	choiceCardHover: checkableHover,
	choiceCardChecked: checkableChecked,
}

const radio = {
	radio: primary,
	radioHover: checkableHover,
	radioError: error,
}

const textInput = {
	textInput: primary,
	textInputError: error,
}

export const border = {
	...root,
	...checkbox,
	...choiceCard,
	...radio,
	...textInput,
}
