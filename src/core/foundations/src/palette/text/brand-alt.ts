import { neutral } from "../global"

const primary = neutral[7]
const secondary = neutral[60]
const ctaPrimary = neutral[100]
const ctaSecondary = neutral[7]
const linkPrimary = neutral[7]

const root = {
	primary,
	secondary,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonSecondary: ctaSecondary,
}

const link = {
	linkPrimary: linkPrimary,
	linkPrimaryHover: linkPrimary,
}

export const brandAltText = {
	...root,
	...button,
	...link,
}
