import { neutral, brand } from "../global"

const primary = brand[400]
const checked = neutral[100]
const ctaPrimary = neutral[100]
const ctaPrimaryHover = "#E0E0E0"
const ctaSecondary = brand[600]
const ctaSecondaryHover = "#234B8A"

const root = {
	primary,
	checked,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonPrimaryHover: ctaPrimaryHover,
	buttonSecondary: ctaSecondary,
	buttonSecondaryHover: ctaSecondaryHover,
}

const checkbox = {
	checkboxChecked: checked,
}

const radio = {
	radioChecked: checked,
}

export const brandBackground = {
	...root,
	...button,
	...checkbox,
	...radio,
}
