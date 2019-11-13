import { fontSizes, fonts, lineHeights, fontWeights } from "../theme"

type Category = "titlepiece" | "headline" | "body" | "textSans"
type LineHeight = "tight" | "regular" | "loose"
type FontWeight = "light" | "regular" | "medium" | "bold"
type FontWeightDefinition = { hasItalic: boolean }

type TitlepieceSizes = "small" | "medium" | "large"

type HeadlineSizes =
	| "tiny"
	| "xxsmall"
	| "xsmall"
	| "small"
	| "medium"
	| "large"
	| "xlarge"
	| "jumbo"

type BodySizes = "small" | "medium"

type TextSansSizes =
	| "xsmall"
	| "small"
	| "medium"
	| "large"
	| "xlarge"
	| "xxlarge"

const fontSizesRem = fontSizes.map(fontSize => fontSize / 16)

const titlepieceSizes: { [key in TitlepieceSizes]: number } = {
	small: fontSizesRem[7], //42px
	medium: fontSizesRem[8], //50px
	large: fontSizesRem[9], //70px
}

const headlineSizes: { [key in HeadlineSizes]: number } = {
	tiny: fontSizesRem[2], //17px
	// BEGIN SUGGESTED RANGE
	xxsmall: fontSizesRem[3], //20px
	xsmall: fontSizesRem[4], //24px
	small: fontSizesRem[5], //28px
	medium: fontSizesRem[6], //34px
	large: fontSizesRem[7], //42px
	xlarge: fontSizesRem[8], //50px
	// END SUGGESTED RANGE
	jumbo: fontSizesRem[9], //70px
}

const bodySizes: { [key in BodySizes]: number } = {
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
}

const textSansSizes: { [key in TextSansSizes]: number } = {
	// BEGIN SUGGESTED RANGE
	xsmall: fontSizesRem[0], //12px
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
	// END SUGGESTED RANGE
	large: fontSizesRem[3], //20px
	xlarge: fontSizesRem[4], //24px
	xxlarge: fontSizesRem[5], //28px
	// xxxlarge: fontSizesRem[6], //34px
	// xxxxlarge: fontSizesRem[7], //42px
	// xxxxxlarge: fontSizesRem[8], //50px
	// xxxxxxlarge: fontSizesRem[9], //70px
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

const lineHeightMapping: { [lineHight in LineHeight]: string } = {
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

const fs = ({
	category,
	level,
	lineHeight,
	fontWeight,
}: {
	category: Category
	level: string
	lineHeight: LineHeight
	fontWeight: FontWeight
}) => {
	const fontFamilyValue = fontMapping[category]
	const fontSizeValue = fontSizeMapping[category][level]
	const lineHeightValue = lineHeightMapping[lineHeight]
	const fontWeightValue = availableFonts[category][fontWeight]
		? fontWeightMapping[fontWeight]
		: ""

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue}rem;
	line-height: ${lineHeightValue};
	${fontWeightValue ? `font-weight: ${fontWeightValue}` : ""};
	`
}

interface FontScaleArgs {
	lineHeight?: LineHeight
	fontWeight?: FontWeight
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
				}
				const { lineHeight, fontWeight } = Object.assign(
					defaultOptions,
					options,
				)

				return fs({
					category: "titlepiece",
					level: key,
					lineHeight,
					fontWeight,
				})
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
				}
				const { lineHeight, fontWeight } = Object.assign(
					defaultOptions,
					options,
				)

				return fs({
					category: "headline",
					level: key,
					lineHeight,
					fontWeight,
				})
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
				}
				const { lineHeight, fontWeight } = Object.assign(
					defaultOptions,
					options,
				)

				return fs({
					category: "body",
					level: key,
					lineHeight,
					fontWeight,
				})
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
				}
				const { lineHeight, fontWeight } = Object.assign(
					defaultOptions,
					options,
				)

				return fs({
					category: "textSans",
					level: key,
					lineHeight,
					fontWeight,
				})
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
