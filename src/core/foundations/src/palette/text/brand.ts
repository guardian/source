import { neutral, success as _success, error as _error, brand } from "../global"

const primary = neutral[100]
const secondary = brand[800] //TODO: deprecate?
const supporting = brand[800]
const success = _success[400]
const error = _error[500]
const ctaPrimary = brand[400]
const ctaSecondary = neutral[100]
const anchorPrimary = neutral[100]
const input = neutral[100]
const inputSupporting = brand[800]

const root = {
	primary,
	secondary,
	supporting,
	success,
	error,
	ctaPrimary,
	ctaSecondary,
	anchorPrimary,
	input,
	inputSupporting,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonSecondary: ctaSecondary,
}

const checkbox = {
	checkbox: input,
	checkboxSupporting: inputSupporting,
	checkboxIndeterminate: inputSupporting,
}

const link = {
	linkPrimary: anchorPrimary,
	linkPrimaryHover: anchorPrimary,
}

const radio = {
	radio: input,
	radioSupporting: inputSupporting,
}

export const brandText = {
	...root,
	...button,
	...checkbox,
	...link,
	...radio,
}
