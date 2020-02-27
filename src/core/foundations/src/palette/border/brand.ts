import { neutral, error as _error, brand } from "../global"

const primary = brand[800]
const checkableChecked = neutral[100]
const checkableHover = neutral[100]
const error = _error[500]

const root = {
	primary,
	error,
}

const checkbox = {
	checkbox: primary,
	checkboxHover: checkableHover,
	checkboxChecked: checkableChecked,
	checkboxError: error,
}

const radio = {
	radio: primary,
	radioHover: checkableHover,
	radioError: error,
}

export const brandBorder = {
	...root,
	...checkbox,
	...radio,
}
