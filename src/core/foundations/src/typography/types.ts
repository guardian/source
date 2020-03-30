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
