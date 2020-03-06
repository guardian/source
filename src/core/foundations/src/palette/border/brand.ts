import { neutral, success as _success, error as _error, brand } from "../global"

const primary = brand[800]
const success = _success[400]
const error = _error[500]
const input = brand[800]
const inputChecked = neutral[100]
const inputHover = neutral[100]

const root = {
	primary,
	success,
	error,
	input,
	inputChecked,
	inputHover,
}

const checkbox = {
	checkbox: input,
	checkboxHover: inputHover,
	checkboxChecked: inputChecked,
	checkboxError: error,
}

const radio = {
	radio: input,
	radioHover: inputHover,
	radioError: error,
}

export const brandBorder = {
	...root,
	...checkbox,
	...radio,
}
