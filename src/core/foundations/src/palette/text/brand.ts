import { neutral, error as _error, brand } from "../global"

const primary = neutral[100]
const secondary = brand[800]
const supporting = brand[800]
const error = _error[500]
const ctaPrimary = brand[400]
const ctaSecondary = neutral[100]
const anchorPrimary = neutral[100]

const root = {
	primary,
	secondary,
	supporting,
	error,
	ctaPrimary,
	ctaSecondary,
	anchorPrimary,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonSecondary: ctaSecondary,
}

const checkbox = {
	checkbox: primary,
	checkboxSupporting: supporting,
	checkboxIndeterminate: supporting,
}

const link = {
	linkPrimary: anchorPrimary,
	linkPrimaryHover: anchorPrimary,
}

const radio = {
	radio: primary,
	radioSupporting: supporting,
}

export const brandText = {
	...root,
	...button,
	...checkbox,
	...link,
	...radio,
}
