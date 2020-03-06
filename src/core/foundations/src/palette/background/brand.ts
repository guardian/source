import { neutral, brand } from "../global"

const primary = brand[400]
const inputChecked = neutral[100]
const ctaPrimary = neutral[100]
const ctaPrimaryHover = "#E0E0E0"
const ctaSecondary = brand[600]
const ctaSecondaryHover = "#234B8A"

const root = {
	primary,
	inputChecked,
	ctaPrimary,
	ctaPrimaryHover,
	ctaSecondary,
	ctaSecondaryHover,
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

export const brandBackground = {
	...root,
	...button,
	...checkbox,
	...radio,
}
