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
export type AvailableSizes =
	| TitlepieceSizes
	| HeadlineSizes
	| BodySizes
	| TextSansSizes;

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

export type ItalicsFontWeights = {
	[cat in Category]?: { [weight in FontWeight]?: boolean };
};

export type TypographyConfiguration = {
	lineHeight: LineHeight;
	fontWeight: FontWeight;
	fontStyle: Option<FontStyle>;
	unit: ScaleUnit;
};

export type FontScaleArgs = Partial<
	Pick<TypographyConfiguration, 'fontWeight' | 'lineHeight' | 'unit'>
> & {
	fontStyle?: FontStyle;
};

export type FontScaleFunction = (options?: FontScaleArgs) => TypographyStyles;

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string;

export type TypographyStrFunctions<Sizes extends AvailableSizes> = {
	[key in keyof Sizes]: FontScaleFunctionStr;
};

export type TypographyFunctions<Sizes extends AvailableSizes> = {
	[key in keyof Sizes]: FontScaleFunction;
};

/**
 * This is left over from the refactor of the font style method.
 * It is exported from source-foundations but has now been replaced
 * by the fontStyleFunction method type definition.
 *
 * Before we remove it, we need to determine if it is being used.
 *
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
