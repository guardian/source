import { colors } from "./theme"

const brand = {
	dark: colors.blues[5],
	main: colors.blues[6],
	bright: colors.blues[7],
	pastel: colors.blues[8],
	faded: colors.blues[9],
}
const brandYellow = {
	dark: colors.yellows[0],
	main: colors.yellows[1],
}
const neutral = {
	7: colors.grays[0],
	20: colors.grays[1],
	46: colors.grays[2],
	60: colors.grays[3],
	86: colors.grays[4],
	93: colors.grays[5],
	97: colors.grays[6],
	100: colors.grays[7],
	specialReport: colors.grays[8],
}
const error = {
	main: colors.reds[1],
	bright: colors.reds[2],
}
const success = {
	main: colors.greens[1],
}
const news = {
	dark: colors.reds[0],
	main: colors.reds[1],
	bright: colors.reds[2],
	pastel: colors.reds[3],
	faded: colors.reds[4],
}
const opinion = {
	dark: colors.oranges[0],
	main: colors.oranges[1],
	bright: colors.oranges[2],
	pastel: colors.oranges[3],
	faded: colors.oranges[4],
}
const sport = {
	dark: colors.blues[0],
	main: colors.blues[1],
	bright: colors.blues[2],
	pastel: colors.blues[3],
	faded: colors.blues[4],
}
const culture = {
	dark: colors.browns[0],
	main: colors.browns[1],
	bright: colors.browns[2],
	pastel: colors.browns[3],
	faded: colors.browns[4],
}
const lifestyle = {
	dark: colors.pinks[0],
	main: colors.pinks[1],
	bright: colors.pinks[2],
	pastel: colors.pinks[3],
	faded: colors.pinks[4],
}
const labs = {
	dark: colors.greens[2],
	main: colors.greens[3],
}

// functional colours
const text = {
	primary: neutral[7],
	secondary: neutral[46],
	error: error.main,
	ctaPrimary: neutral[100],
	ctaSecondary: brand.main,
	radio: neutral[7],
	radioSupporting: neutral[46],
	linkPrimary: brand.bright,
	linkPrimaryHover: brand.bright,
	linkSecondary: neutral[7],
	linkSecondaryHover: neutral[7],
	checkbox: neutral[7],
	checkboxSupporting: neutral[46],
	checkboxIndeterminate: neutral[46],
	mono: {
		primary: neutral[100],
		secondary: neutral[60],
		ctaPrimary: neutral[7],
		ctaSecondary: neutral[100],
		linkPrimary: neutral[100],
		linkPrimaryHover: neutral[100],
		linkSecondary: neutral[100],
		linkSecondaryHover: neutral[100],
	},
	brand: {
		primary: neutral[100],
		secondary: neutral[60],
		error: error.bright,
		ctaPrimary: brand.main,
		ctaSecondary: neutral[100],
		radio: neutral[100],
		radioSupporting: brand.faded,
		linkPrimary: neutral[100],
		linkPrimaryHover: neutral[100],
		linkSecondary: neutral[100],
		linkSecondaryHover: neutral[100],
		checkbox: neutral[100],
		checkboxSupporting: brand.faded,
		checkboxIndeterminate: brand.faded,
	},
	brandYellow: {
		primary: neutral[7],
		secondary: neutral[60],
		ctaPrimary: neutral[100],
		ctaSecondary: neutral[7],
		linkPrimary: neutral[7],
		linkPrimaryHover: neutral[7],
		linkSecondary: neutral[7],
		linkSecondaryHover: neutral[7],
	},
}
const background = {
	primary: neutral[100],
	ctaPrimary: brand.main,
	ctaPrimaryHover: "#234B8A",
	ctaSecondary: brand.faded,
	ctaSecondaryHover: "#ACC9F7",
	radioChecked: brand.bright,
	checkboxChecked: brand.bright,
	mono: {
		primary: neutral[7],
		ctaPrimary: neutral[100],
		ctaPrimaryHover: neutral[93],
		ctaSecondary: neutral[46],
		ctaSecondaryHover: "#5C5C5C",
	},
	brand: {
		primary: brand.main,
		ctaPrimary: neutral[100],
		ctaPrimaryHover: "#E0E0E0",
		ctaSecondary: brand.pastel,
		ctaSecondaryHover: "#234B8A",
		radioChecked: neutral[100],
		checkboxChecked: neutral[100],
	},
	brandYellow: {
		primary: brandYellow.main,
		ctaPrimary: neutral[7],
		ctaPrimaryHover: "#454545",
		ctaSecondary: brandYellow.dark,
		ctaSecondaryHover: "#F2AE00",
	},
}
const border = {
	primary: neutral[60],
	secondary: neutral[86],
	error: error.main,
	focusHalo: sport.bright,
	radio: neutral[60],
	radioHover: brand.bright,
	radioError: error.main,
	textInput: neutral[60],
	checkbox: neutral[60],
	checkboxHover: brand.bright,
	checkboxChecked: brand.bright,
	checkboxError: error.main,
	brand: {
		error: error.bright,
		radio: brand.faded,
		radioHover: neutral[100],
		radioError: error.bright,
		checkbox: brand.faded,
		checkboxHover: neutral[100],
		checkboxChecked: neutral[100],
		checkboxError: error.bright,
	},
}

const palette = {
	brand,
	brandYellow,
	neutral,
	error,
	success,
	news,
	opinion,
	sport,
	culture,
	lifestyle,
	labs,
	text,
	background,
	border,
}

export { palette }
