import { neutral, error as _error, success as _success, brand } from "../global"

const primary = neutral[7]
const secondary = neutral[46] //TODO: deprecate?
const supporting = neutral[46]
const success = _success[400]
const error = _error[400]
const ctaPrimary = neutral[100]
const ctaSecondary = brand[400]
const anchorPrimary = brand[500]
const anchorSecondary = neutral[7]

const root = {
	primary,
	secondary,
	supporting,
	success,
	error,
	ctaPrimary,
	ctaSecondary,
	anchorPrimary,
	anchorSecondary,
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

const choiceCard = {
	choiceCard: supporting,
	choiceCardChecked: ctaSecondary,
	choiceCardHover: ctaSecondary,
}

const link = {
	linkPrimary: anchorPrimary,
	linkPrimaryHover: anchorPrimary,
	linkSecondary: anchorSecondary,
	linkSecondaryHover: anchorSecondary,
}

const radio = {
	radio: primary,
	radioSupporting: supporting,
}

const textInput = {
	textInput: primary,
	textInputLabel: primary,
	textInputOptionalLabel: supporting,
	textInputSupporting: supporting,
	textInputError: error,
}

export const text = {
	...root,
	...button,
	...checkbox,
	...choiceCard,
	...link,
	...radio,
	...textInput,
}
