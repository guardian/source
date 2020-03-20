import { fontSizes, fonts, lineHeights, fontWeights } from "../theme"

export type Category = "titlepiece" | "headline" | "body" | "textSans"
export type LineHeight = "tight" | "regular" | "loose"
export type FontWeight = "light" | "regular" | "medium" | "bold"
export type FontWeightDefinition = { hasItalic: boolean }

export type TitlepieceSizes = "small" | "medium" | "large"

export type HeadlineSizes =
	| "xxxsmall"
	| "xxsmall"
	| "xsmall"
	| "small"
	| "medium"
	| "large"
	| "xlarge"

export type BodySizes = "small" | "medium"

export type TextSansSizes = "xsmall" | "small" | "medium" | "large" | "xlarge"

export type TypographyStyles = {
	fontFamily: string
	fontSize: string
	lineHeight: number
	fontWeight?: number
	fontStyle?: string
}

export type Fs = (
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
) => TypographyStyles

export interface FontScaleArgs {
	lineHeight?: LineHeight
	fontWeight?: FontWeight
	italic?: boolean
}

const titlepieceSizes: { [key in TitlepieceSizes]: number } = {
	small: fontSizes[7], //42px
	medium: fontSizes[8], //50px
	large: fontSizes[9], //70px
}

const headlineSizes: { [key in HeadlineSizes]: number } = {
	xxxsmall: fontSizes[2], //17px
	xxsmall: fontSizes[3], //20px
	xsmall: fontSizes[4], //24px
	small: fontSizes[5], //28px
	medium: fontSizes[6], //34px
	large: fontSizes[7], //42px
	xlarge: fontSizes[8], //50px
}

const bodySizes: { [key in BodySizes]: number } = {
	small: fontSizes[1], //15px
	medium: fontSizes[2], //17px
}

const textSansSizes: { [key in TextSansSizes]: number } = {
	xsmall: fontSizes[0], //12px
	small: fontSizes[1], //15px
	medium: fontSizes[2], //17px
	large: fontSizes[3], //20px
	xlarge: fontSizes[4], //24px
}

const fontSizeMapping: {
	[cat in Category]: { [level in string]: number }
} = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
}

const remFontSizes = fontSizes.map(fontSize => fontSize / 16)

const remTitlepieceSizes: { [key in TitlepieceSizes]: number } = {
	small: remFontSizes[7], //42px
	medium: remFontSizes[8], //50px
	large: remFontSizes[9], //70px
}

const remHeadlineSizes: { [key in HeadlineSizes]: number } = {
	xxxsmall: remFontSizes[2], //17px
	xxsmall: remFontSizes[3], //20px
	xsmall: remFontSizes[4], //24px
	small: remFontSizes[5], //28px
	medium: remFontSizes[6], //34px
	large: remFontSizes[7], //42px
	xlarge: remFontSizes[8], //50px
}

const remBodySizes: { [key in BodySizes]: number } = {
	small: remFontSizes[1], //15px
	medium: remFontSizes[2], //17px
}

const remTextSansSizes: { [key in TextSansSizes]: number } = {
	xsmall: remFontSizes[0], //12px
	small: remFontSizes[1], //15px
	medium: remFontSizes[2], //17px
	large: remFontSizes[3], //20px
	xlarge: remFontSizes[4], //24px
}

const remFontSizeMapping: {
	[cat in Category]: { [level in string]: number }
} = {
	titlepiece: remTitlepieceSizes,
	headline: remHeadlineSizes,
	body: remBodySizes,
	textSans: remTextSansSizes,
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

Object.freeze(titlepieceSizes)
Object.freeze(headlineSizes)
Object.freeze(bodySizes)
Object.freeze(textSansSizes)
Object.freeze(remTitlepieceSizes)
Object.freeze(remHeadlineSizes)
Object.freeze(remBodySizes)
Object.freeze(remTextSansSizes)
Object.freeze(fontMapping)
Object.freeze(fontSizeMapping)
Object.freeze(fontWeightMapping)
Object.freeze(lineHeightMapping)
Object.freeze(availableFonts)

export {
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	remFontSizes,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	remFontSizeMapping,
	fontMapping,
	fontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
}
