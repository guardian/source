import type {
	bodySizes,
	fontWeightMapping,
	headlineSizes,
	lineHeightMapping,
	textSansSizes,
	titlepieceSizes,
} from './data';

export type ScaleUnit = 'rem' | 'px';
export type LineHeight = keyof typeof lineHeightMapping;
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type FontStyle = 'normal' | 'italic';
export type FontWeightDefinition = { hasItalic: boolean };
export type Option<A> = A | null;

export type TypographyStyles<Unit extends ScaleUnit> = {
	fontFamily: string;
	fontSize: Unit extends 'px' ? number : `${number}rem`;
	lineHeight: string | number;
	fontWeight?:
		| typeof fontWeightMapping[keyof typeof fontWeightMapping]
		| FontWeight;
	fontStyle?: 'normal' | 'italic';
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

export type Fs = <
	Category extends keyof Categories,
	Level extends keyof Categories[Category],
>(
	category: Category,
) => (
	level: Level,
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
) => TypographyStyles<ScaleUnit>;

export type FontScaleFunction = (
	options?: FontScaleArgs,
) => TypographyStyles<ScaleUnit>;

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string;

export interface FontScaleArgs {
	lineHeight?: LineHeight;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
	unit?: ScaleUnit;
}
