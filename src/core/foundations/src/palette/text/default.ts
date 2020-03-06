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
const input = neutral[7]
const inputSupporting = neutral[46]
const inputChecked = brand[400]
const inputHover = brand[400]

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
	input,
	inputSupporting,
	inputChecked,
	inputHover,
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

const choiceCard = {
	choiceCard: inputSupporting,
	choiceCardChecked: inputChecked,
	choiceCardHover: inputChecked,
}

const link = {
	linkPrimary: anchorPrimary,
	linkPrimaryHover: anchorPrimary,
	linkSecondary: anchorSecondary,
	linkSecondaryHover: anchorSecondary,
}

const radio = {
	radio: input,
	radioSupporting: inputSupporting,
}

const textInput = {
	textInput: input,
	textInputLabel: input,
	textInputOptionalLabel: inputSupporting,
	textInputSupporting: inputSupporting,
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
