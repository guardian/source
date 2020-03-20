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

export const fontSizesRem = fontSizes.map(fontSize => fontSize / 16)

export const titlepieceSizes: { [key in TitlepieceSizes]: number } = {
	small: fontSizesRem[7], //42px
	medium: fontSizesRem[8], //50px
	large: fontSizesRem[9], //70px
}

export const headlineSizes: { [key in HeadlineSizes]: number } = {
	xxxsmall: fontSizesRem[2], //17px
	xxsmall: fontSizesRem[3], //20px
	xsmall: fontSizesRem[4], //24px
	small: fontSizesRem[5], //28px
	medium: fontSizesRem[6], //34px
	large: fontSizesRem[7], //42px
	xlarge: fontSizesRem[8], //50px
}

export const bodySizes: { [key in BodySizes]: number } = {
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
}

export const textSansSizes: { [key in TextSansSizes]: number } = {
	xsmall: fontSizesRem[0], //12px
	small: fontSizesRem[1], //15px
	medium: fontSizesRem[2], //17px
	large: fontSizesRem[3], //20px
	xlarge: fontSizesRem[4], //24px
}

export const fontSizeMapping: {
	[cat in Category]: { [level in string]: number }
} = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
}

export const fontMapping: { [cat in Category]: string } = {
	titlepiece: fonts.titlepiece,
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans,
}

export const lineHeightMapping: { [lineHight in LineHeight]: number } = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2],
}

export const fontWeightMapping: { [fontWeight in FontWeight]: number } = {
	light: fontWeights[0],
	regular: fontWeights[1],
	medium: fontWeights[2],
	bold: fontWeights[3],
}

export const availableFonts: {
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
