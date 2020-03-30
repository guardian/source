export type ScaleUnit = "rem" | "px"
export type Category = "titlepiece" | "headline" | "body" | "textSans"
export type LineHeight = "tight" | "regular" | "loose"
export type FontWeight = "light" | "regular" | "medium" | "bold"
export type FontWeightDefinition = { hasItalic: boolean }

export type TypographyStyles = {
	fontFamily: string
	fontSize: string | number
	lineHeight: string | number
	fontWeight?: number
	fontStyle?: string
}
export type TypographySizes = {
	[key in string]: number
}

export interface TitlepieceSizes extends TypographySizes {
	small: number
	medium: number
	large: number
}

export interface HeadlineSizes extends TypographySizes {
	xxxsmall: number
	xxsmall: number
	xsmall: number
	small: number
	medium: number
	large: number
	xlarge: number
}
export interface BodySizes extends TypographySizes {
	small: number
	medium: number
}
export interface TextSansSizes extends TypographySizes {
	xsmall: number
	small: number
	medium: number
	large: number
	xlarge: number
}

export type Fs = (
	category: Category,
) => (
	level: string,
	{
		lineHeight,
		fontWeight,
		italic,
		unit,
	}: {
		lineHeight: LineHeight
		fontWeight: FontWeight
		italic: boolean
		unit: ScaleUnit
	},
) => TypographyStyles

export type FontScaleFunction = (options?: FontScaleArgs) => TypographyStyles

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string

export interface FontScaleArgs {
	lineHeight?: LineHeight
	fontWeight?: FontWeight
	italic?: boolean
	unit?: ScaleUnit
}
