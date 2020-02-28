import { neutral, brand } from "../global"

const primary = brand[400]
const checkableChecked = neutral[100]
const ctaPrimary = neutral[100]
const ctaPrimaryHover = "#E0E0E0"
const ctaSecondary = brand[600]
const ctaSecondaryHover = "#234B8A"

const root = {
	primary,
	checkableChecked,
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
	checkboxChecked: checkableChecked,
}

const radio = {
	radioChecked: checkableChecked,
}

export const brandBackground = {
	...root,
	...button,
	...checkbox,
	...radio,
}
