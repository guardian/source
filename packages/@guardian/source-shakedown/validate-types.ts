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
export type SourceFoundations =
	| Breakpoint
	| ScaleUnit
	| Category
	| LineHeight
	| FontWeight
	| FontStyle
	| FontWeightDefinition
	| Option<Breakpoint>
	| TypographyStyles
	| TypographySizes
	| TitlepieceSizes
	| HeadlineSizes
	| BodySizes
	| TextSansSizes
	| Fs
	| FontScaleFunction
	| FontScaleFunctionStr
	| FontScaleArgs;
