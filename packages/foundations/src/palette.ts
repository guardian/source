import { colors } from "./theme"

const brand = {
	300: colors.blues[5],
	400: colors.blues[6],
	500: colors.blues[7],
	600: colors.blues[8],
	800: colors.blues[9],

	// legacy names: please do not use
	dark: colors.blues[5],
	main: colors.blues[6],
	bright: colors.blues[7],
	pastel: colors.blues[8],
	faded: colors.blues[9],
}
const brandYellow = {
	300: colors.yellows[0],
	400: colors.yellows[1],

	// legacy names: please do not use
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
	400: colors.reds[1],
	500: colors.reds[2],

	// legacy names: please do not use
	main: colors.reds[1],
	bright: colors.reds[2],
}
const success = {
	400: colors.greens[1],

	// legacy names: please do not use
	main: colors.greens[1],
}
const news = {
	300: colors.reds[0],
	400: colors.reds[1],
	500: colors.reds[2],
	600: colors.reds[3],
	800: colors.reds[4],

	// legacy names: please do not use
	dark: colors.reds[0],
	main: colors.reds[1],
	bright: colors.reds[2],
	pastel: colors.reds[3],
	faded: colors.reds[4],
}
const opinion = {
	300: colors.oranges[0],
	400: colors.oranges[1],
	500: colors.oranges[2],
	600: colors.oranges[3],
	800: colors.oranges[4],

	// legacy names: please do not use
	dark: colors.oranges[0],
	main: colors.oranges[1],
	bright: colors.oranges[2],
	pastel: colors.oranges[3],
	faded: colors.oranges[4],
}
const sport = {
	300: colors.blues[0],
	400: colors.blues[1],
	500: colors.blues[2],
	600: colors.blues[3],
	800: colors.blues[4],

	// legacy names: please do not use
	dark: colors.blues[0],
	main: colors.blues[1],
	bright: colors.blues[2],
	pastel: colors.blues[3],
	faded: colors.blues[4],
}
const culture = {
	300: colors.browns[0],
	400: colors.browns[1],
	500: colors.browns[2],
	600: colors.browns[3],
	800: colors.browns[4],

	// legacy names: please do not use
	dark: colors.browns[0],
	main: colors.browns[1],
	bright: colors.browns[2],
	pastel: colors.browns[3],
	faded: colors.browns[4],
}
const lifestyle = {
	300: colors.pinks[0],
	400: colors.pinks[1],
	500: colors.pinks[2],
	600: colors.pinks[3],
	800: colors.pinks[4],

	// legacy names: please do not use
	dark: colors.pinks[0],
	main: colors.pinks[1],
	bright: colors.pinks[2],
	pastel: colors.pinks[3],
	faded: colors.pinks[4],
}
const labs = {
	300: colors.greens[2],
	400: colors.greens[3],

	// legacy names: please do not use
	dark: colors.greens[2],
	main: colors.greens[3],
}

// functional colours
const text = {
	primary: neutral[7],
	secondary: neutral[46],
	error: error[400],
	buttonPrimary: neutral[100],
	buttonSecondary: brand[400],
	radio: neutral[7],
	radioSupporting: neutral[46],
	linkPrimary: brand[500],
	linkPrimaryHover: brand[500],
	linkSecondary: neutral[7],
	linkSecondaryHover: neutral[7],
	checkbox: neutral[7],
	checkboxSupporting: neutral[46],
	checkboxIndeterminate: neutral[46],
	brand: {
		primary: neutral[100],
		secondary: brand[800],
		error: error[500],
		buttonPrimary: brand[400],
		buttonSecondary: neutral[100],
		radio: neutral[100],
		radioSupporting: brand[800],
		linkPrimary: neutral[100],
		linkPrimaryHover: neutral[100],
		checkbox: neutral[100],
		checkboxSupporting: brand[800],
		checkboxIndeterminate: brand[800],
	},
	brandYellow: {
		primary: neutral[7],
		secondary: neutral[60],
		buttonPrimary: neutral[100],
		buttonSecondary: neutral[7],
		linkPrimary: neutral[7],
		linkPrimaryHover: neutral[7],
	},
}
const background = {
	primary: neutral[100],
	buttonPrimary: brand[400],
	buttonPrimaryHover: "#234B8A",
	buttonSecondary: brand[800],
	buttonSecondaryHover: "#ACC9F7",
	radioChecked: brand[500],
	checkboxChecked: brand[500],
	brand: {
		primary: brand[400],
		buttonPrimary: neutral[100],
		buttonPrimaryHover: "#E0E0E0",
		buttonSecondary: brand[600],
		buttonSecondaryHover: "#234B8A",
		radioChecked: neutral[100],
		checkboxChecked: neutral[100],
	},
	brandYellow: {
		primary: brandYellow[400],
		buttonPrimary: neutral[7],
		buttonPrimaryHover: "#454545",
		buttonSecondary: brandYellow[300],
		buttonSecondaryHover: "#F2AE00",
	},
}
const border = {
	primary: neutral[60],
	secondary: neutral[86],
	error: error[400],
	focusHalo: sport[500],
	radio: neutral[60],
	radioHover: brand[500],
	radioError: error[400],
	textInput: neutral[60],
	checkbox: neutral[60],
	checkboxHover: brand[500],
	checkboxChecked: brand[500],
	checkboxError: error[400],
	brand: {
		error: error[500],
		radio: brand[800],
		radioHover: neutral[100],
		radioError: error[500],
		checkbox: brand[800],
		checkboxHover: neutral[100],
		checkboxChecked: neutral[100],
		checkboxError: error[500],
	},
}
const line = {
	primary: neutral[86],
	brand: {
		primary: brand[600],
	},
	brandYellow: {
		primary: neutral[7],
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
	line,
}

export { palette }
