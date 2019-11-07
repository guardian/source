import { fontSizes, fonts, lineHeights, fontWeights } from "../theme"

type Category = "headline" | "body" | "textSans"
type LineHeight = "tight" | "regular" | "loose"
type FontWeight = "light" | "regular" | "medium" | "bold"
type FontWeightDefinition = { fontWeight: number; hasItalic: boolean }

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
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
}

const fontMapping: { [cat in Category]: string } = {
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans,
}

const lineHeightMapping: { [lineHight in LineHeight]: string } = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2],
}

const fontWeightMapping: {
	[cat in Category]: {
		[fontWeight in FontWeight]?: FontWeightDefinition
	}
} = {
	headline: {
		light: {
			fontWeight: fontWeights[0],
			hasItalic: true,
		},
		medium: {
			fontWeight: fontWeights[2],
			hasItalic: true,
		},
		bold: {
			fontWeight: fontWeights[3],
			hasItalic: false,
		},
	},
	body: {
		regular: {
			fontWeight: fontWeights[1],
			hasItalic: true,
		},
		bold: {
			fontWeight: fontWeights[3],
			hasItalic: true,
		},
	},
	textSans: {
		regular: {
			fontWeight: fontWeights[1],
			hasItalic: true,
		},
		bold: {
			fontWeight: fontWeights[3],
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
	const fontWeightDefinition = fontWeightMapping[category][fontWeight]

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue}rem;
	line-height: ${lineHeightValue};
	${
		fontWeightDefinition
			? `font-weight: ${fontWeightDefinition.fontWeight}`
			: ""
	};
	`
}

interface FontScaleArgs {
	lineHeight?: LineHeight
	fontWeight?: FontWeight
}

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

Object.freeze(headlineSizes)
Object.freeze(bodySizes)
Object.freeze(textSansSizes)

export { headline, body, textSans, headlineSizes, bodySizes, textSansSizes }
