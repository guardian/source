import { neutral, brandAlt } from "../global"

const primary = brandAlt[400]
const ctaPrimary = neutral[7]
const ctaPrimaryHover = "#454545"
const ctaSecondary = brandAlt[200]
const ctaSecondaryHover = "#F2AE00"

const root = {
	primary,
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

export const brandAltBackground = {
	...root,
	...button,
}
