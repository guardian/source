import type { titlepieceSizes } from '.';

export type ScaleUnit = 'rem' | 'px';
export type LineHeight = 'tight' | 'regular' | 'loose';
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type FontStyle = 'normal' | 'italic';
export type FontWeightDefinition = { hasItalic: boolean };
export type Option<A> = A | null;

export type TypographyStyles = {
	fontFamily: string;
	fontSize: string | number;
	lineHeight: string | number;
	fontWeight?: number;
	fontStyle?: string;
};
export type TypographySizes = {
	[key in string]: number;
};

export type TitlepieceSizes = typeof titlepieceSizes;

export interface HeadlineSizes extends TypographySizes {
	xxxsmall: number;
	xxsmall: number;
	xsmall: number;
	small: number;
	medium: number;
	large: number;
	xlarge: number;
}
export interface BodySizes extends TypographySizes {
	small: number;
	medium: number;
}
export interface TextSansSizes extends TypographySizes {
	xxsmall: number;
	xsmall: number;
	small: number;
	medium: number;
	large: number;
	xlarge: number;
	xxlarge: number;
	xxxlarge: number;
}

type Categories = {
	titlepiece: TitlepieceSizes;
	headline: HeadlineSizes;
	body: BodySizes;
	textSans: TextSansSizes;
};

export type Category = keyof Categories;

export type Fs = <C extends Category>(
	category: C,
) => (
	level: keyof Categories[C],
	{
		lineHeight,
		fontWeight,
		fontStyle,
		unit,
	}: {
		lineHeight: LineHeight;
		fontWeight: FontWeight;
		fontStyle: Option<FontStyle>;
		unit: ScaleUnit;
	},
) => TypographyStyles;

export type FontScaleFunction = (options?: FontScaleArgs) => TypographyStyles;

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string;

export interface FontScaleArgs {
	lineHeight?: LineHeight;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
	unit?: ScaleUnit;
}
