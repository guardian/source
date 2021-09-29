import type {
	Breakpoint,
	ScaleUnit,
	Category,
	LineHeight,
	FontWeight,
	FontStyle,
	FontWeightDefinition,
	Option,
	TypographyStyles,
	TypographySizes,
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
	Fs,
	FontScaleFunction,
	FontScaleFunctionStr,
	FontScaleArgs,
} from '@guardian/source-foundations';

// The types have to be used somewhere or tsc falls over
export interface SourceFoundations {
	a: Breakpoint;
	b: ScaleUnit;
	c: Category;
	d: LineHeight;
	e: FontWeight;
	f: FontStyle;
	g: FontWeightDefinition;
	h: Option<Breakpoint>;
	i: TypographyStyles;
	j: TypographySizes;
	k: TitlepieceSizes;
	l: HeadlineSizes;
	m: BodySizes;
	n: TextSansSizes;
	o: Fs;
	p: FontScaleFunction;
	q: FontScaleFunctionStr;
	r: FontScaleArgs;
}
