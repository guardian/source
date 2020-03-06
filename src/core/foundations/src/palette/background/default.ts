import { neutral, brand } from "../global"

const primary = neutral[100]
const inverse = neutral[10]
const ctaPrimary = brand[400]
const ctaPrimaryHover = "#234B8A"
const ctaSecondary = brand[800]
const ctaSecondaryHover = "#ACC9F7"
const input = neutral[100]
const inputChecked = brand[500]

const root = {
	primary,
	inverse,
	ctaPrimary,
	ctaPrimaryHover,
	ctaSecondary,
	ctaSecondaryHover,
	input,
	inputChecked,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonPrimaryHover: ctaPrimaryHover,
	buttonSecondary: ctaSecondary,
	buttonSecondaryHover: ctaSecondaryHover,
}

const checkbox = {
	checkboxChecked: inputChecked,
}

const radio = {
	radioChecked: inputChecked,
}

const textInput = {
	textInput: input,
}

export const background = {
	...root,
	...button,
	...checkbox,
	...radio,
	...textInput,
}
