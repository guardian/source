import { fontSizes, fonts, lineHeights, fontWeights } from "../theme"

type Category = "titlepiece" | "headline" | "body" | "textSans"
type LineHeight = "tight" | "regular" | "loose"
type FontWeight = "light" | "regular" | "medium" | "bold"
type FontWeightDefinition = { hasItalic: boolean }

type TitlepieceSizes = "small" | "medium" | "large"

type HeadlineSizes =
	| "xxxsmall"
	| "xxsmall"
	| "xsmall"
	| "small"
	| "medium"
	| "large"
	| "xlarge"

type BodySizes = "small" | "medium"

type TextSansSizes = "xsmall" | "small" | "medium" | "large"

const fontSizesRem = fontSizes.map(fontSize => fontSize / 16)

const titlepieceSizes: { [key in TitlepieceSizes]: number } = {
	small: fontSizesRem[7], //42px
	medium: fontSizesRem[8], //50px
	large: fontSizesRem[9], //70px
}

const headlineSizes: { [key in HeadlineSizes]: number } = {
	xxxsmall: fontSizesRem[2], //17px
	xxsmall: fontSizesRem[3], //20px
	xsmall: fontSizesRem[4], //24px
	small: fontSizesRem[5], //28px
	medium: fontSizesRem[6], //34px
	large: fontSizesRem[7], //42px
	xlarge: fontSizesRem[8], //50px
}

const bodySizes: { [key in BodySizes]: number } = {
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
}

const textSansSizes: { [key in TextSansSizes]: number } = {
	xsmall: fontSizesRem[0], //12px
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
	large: fontSizesRem[3], //20px
}

const fontSizeMapping: { [cat in Category]: { [level in string]: number } } = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
}

const fontMapping: { [cat in Category]: string } = {
	titlepiece: fonts.titlepiece,
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans,
}

const lineHeightMapping: { [lineHight in LineHeight]: number } = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2],
}

const fontWeightMapping: { [fontWeight in FontWeight]: number } = {
	light: fontWeights[0],
	regular: fontWeights[1],
	medium: fontWeights[2],
	bold: fontWeights[3],
}

const availableFonts: {
	[cat in Category]: {
		[fontWeight in FontWeight]?: FontWeightDefinition
	}
} = {
	titlepiece: {
		bold: {
			hasItalic: false,
		},
	},
	headline: {
		light: {
			hasItalic: true,
		},
		medium: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
	body: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: true,
		},
	},
	textSans: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
}

const fs = (
	category: Category,
	level: string,
	{
		lineHeight,
		fontWeight,
		italic,
	}: {
		lineHeight: LineHeight
		fontWeight: FontWeight
		italic: boolean
	},
) => {
	const fontFamilyValue = fontMapping[category]
	const fontSizeValue = fontSizeMapping[category][level]
	const lineHeightValue = lineHeightMapping[lineHeight]
	// TODO: consider logging an error in development if a requested
	// font is unavailable
	const requestedFont = availableFonts[category][fontWeight]
	const fontWeightValue = requestedFont ? fontWeightMapping[fontWeight] : ""
	const fontStyleValue =
		italic && requestedFont && requestedFont.hasItalic ? "italic" : ""

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue}rem;
	line-height: ${lineHeightValue};
	${fontWeightValue ? `font-weight: ${fontWeightValue}` : ""};
	${fontStyleValue ? `font-style: ${fontStyleValue}` : ""};
	`
}

interface FontScaleArgs {
	lineHeight?: LineHeight
	fontWeight?: FontWeight
	italic?: boolean
}

type TitlepieceFunctions = {
	[key in TitlepieceSizes]: (options?: FontScaleArgs) => number
}

const titlepiece: TitlepieceFunctions = Object.keys(titlepieceSizes).reduce(
	(acc, key) => {
		return Object.assign({}, acc, {
			[key]: (options: FontScaleArgs) => {
				const defaultOptions = {
					lineHeight: "tight",
					fontWeight: "bold",
					italic: false,
				}
				const fsOptions = Object.assign(defaultOptions, options)

				return fs("titlepiece", key, fsOptions)
			},
		})
	},
	{} as HeadlineFunctions,
)

type HeadlineFunctions = {
	[key in HeadlineSizes]: (options?: FontScaleArgs) => number
}

const headline: HeadlineFunctions = Object.keys(headlineSizes).reduce(
	(acc, key) => {
		return Object.assign({}, acc, {
			[key]: (options: FontScaleArgs) => {
				const defaultOptions = {
					lineHeight: "tight",
					fontWeight: "medium",
					italic: false,
				}
				const fsOptions = Object.assign(defaultOptions, options)

				return fs("headline", key, fsOptions)
			},
		})
	},
	{} as HeadlineFunctions,
)

type BodyFunctions = {
	[key in BodySizes]: (options?: FontScaleArgs) => number
}

const body: BodyFunctions = Object.keys(bodySizes).reduce(
	(acc, key) => {
		return Object.assign({}, acc, {
			[key]: (options: FontScaleArgs) => {
				const defaultOptions = {
					lineHeight: "loose",
					fontWeight: "regular",
					italic: false,
				}
				const fsOptions = Object.assign(defaultOptions, options)

				return fs("body", key, fsOptions)
			},
		})
	},
	{} as BodyFunctions,
)

type TextSansFunctions = {
	[key in TextSansSizes]: (options?: FontScaleArgs) => number
}

const textSans: TextSansFunctions = Object.keys(textSansSizes).reduce(
	(acc, key) => {
		return Object.assign({}, acc, {
			[key]: (options: FontScaleArgs) => {
				const defaultOptions = {
					lineHeight: "loose",
					fontWeight: "regular",
					italic: false,
				}
				const fsOptions = Object.assign(defaultOptions, options)

				return fs("textSans", key, fsOptions)
			},
		})
	},
	{} as TextSansFunctions,
)

Object.freeze(titlepieceSizes)
Object.freeze(headlineSizes)
Object.freeze(bodySizes)
Object.freeze(textSansSizes)

export {
	titlepiece,
	headline,
	body,
	textSans,
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
}
