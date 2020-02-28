import { neutral } from "../global"

const primary = neutral[7]
const secondary = neutral[60] //TODO: deprecate?
const supporting = neutral[60]
const ctaPrimary = neutral[100]
const ctaSecondary = neutral[7]
const anchorPrimary = neutral[7]

const root = {
	primary,
	secondary,
	supporting,
	ctaPrimary,
	ctaSecondary,
	anchorPrimary,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonSecondary: ctaSecondary,
}

const link = {
	linkPrimary: anchorPrimary,
	linkPrimaryHover: anchorPrimary,
}

export const brandAltText = {
	...root,
	...button,
	...link,
}
