import type {
	bodySizes,
	fontWeights,
	headlineSizes,
	lineHeights,
	remBodySizes,
	remHeadlineSizes,
	remTextSansSizes,
	remTitlepieceSizes,
	textSansSizes,
	titlepieceSizes,
} from './data';

export type ScaleUnit = 'rem' | 'px';
export type LineHeight = keyof typeof lineHeights;
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type FontStyle = 'normal' | 'italic';
export type FontWeightDefinition = { hasItalic: boolean };
export type Option<A> = A | null;

export type TypographyStyles<Unit extends ScaleUnit = ScaleUnit> = {
	fontFamily: string;
	fontSize: Unit extends 'px' ? number : `${number}rem`;
	lineHeight: string | number;
	fontWeight?: typeof fontWeights[keyof typeof fontWeights] | FontWeight;
	fontStyle?: 'normal' | 'italic';
	textDecorationThickness?: number;
};

/** @deprecated will be removed in the next major version */
export type TypographySizes = {
	[key in string]: number;
};

export type TitlepieceSizes =
	| typeof titlepieceSizes
	| typeof remTitlepieceSizes;
export type HeadlineSizes = typeof headlineSizes | typeof remHeadlineSizes;
export type BodySizes = typeof bodySizes | typeof remBodySizes;
export type TextSansSizes = typeof textSansSizes | typeof remTextSansSizes;

export type Categories = {
	titlepiece: TitlepieceSizes;
	headline: HeadlineSizes;
	body: BodySizes;
	textSans: TextSansSizes;
};

export type Category = keyof Categories;

export type AvailableFontWeights = {
	[cat in Category]?: { [weight in FontWeight]?: boolean };
};

export type ItalicsAvailableForFontWeight = {
	[cat in Category]?: { [weight in FontWeight]?: boolean };
};

export type TypographyOptions = {
	lineHeight: LineHeight;
	fontWeight: FontWeight;
	fontStyle: Option<FontStyle>;
	unit: ScaleUnit;
};

export type FontScaleArgs = Partial<
	Pick<TypographyOptions, 'fontWeight' | 'lineHeight' | 'unit'>
> & {
	fontStyle?: FontStyle;
};

export type FontScaleFunction = (options?: FontScaleArgs) => TypographyStyles;

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string;

export type TitlepieceFunctions = {
	[key in keyof TitlepieceSizes]: FontScaleFunction;
};

export type HeadlineFunctions = {
	[key in keyof HeadlineSizes]: FontScaleFunction;
};

export type BodyFunctions = {
	[key in keyof BodySizes]: FontScaleFunction;
};

export type TextSansFunctions = {
	[key in keyof TextSansSizes]: FontScaleFunction;
};

/**
 * @deprecated will be removed in the next major version
 */
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
) => TypographyStyles;
