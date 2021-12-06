import type { lineHeights } from './data';
import type {
	bodySizes,
	headlineSizes,
	textSansSizes,
	titlepieceSizes,
} from '.';

export type ScaleUnit = 'rem' | 'px';
export type LineHeight = typeof lineHeights;
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
export type HeadlineSizes = typeof headlineSizes;
export type BodySizes = typeof bodySizes;
export type TextSansSizes = typeof textSansSizes;

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
