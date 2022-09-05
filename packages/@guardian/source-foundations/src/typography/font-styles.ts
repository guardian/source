import {
	fonts,
	fontWeights,
	fontWeightsAvailable,
	italicsAvailableForFontWeight,
	lineHeights,
	pxTextSizes,
	remTextSizes,
	underlineThickness,
} from './data';
import type {
	Categories,
	FontStyle,
	Option,
	TypographyOptions,
	TypographyStyles,
} from './types';

const determineFontStyleProperty = (
	fontStyle: Option<FontStyle>,
	hasItalic: boolean,
) => {
	switch (fontStyle) {
		case 'italic':
			return hasItalic ? 'italic' : undefined;
		case 'normal':
			return 'normal';
		case null:
		default:
			return undefined;
	}
};

export const getFontStyle = <
	Category extends keyof Categories,
	Level extends keyof Categories[Category],
>(
	category: Category,
	level: Level,
	options: TypographyOptions,
): TypographyStyles => {
	// Fetch the font size in pixels and rems for the given category and level
	const pxTextSize = Number(pxTextSizes[category][level]);
	const remTextSize = Number(remTextSizes[category][level]);

	// Determine if italic font-style is available for this font weight
	const hasItalic =
		italicsAvailableForFontWeight[category]?.[options.fontWeight] ?? false;

	// Determine if setting the font weight is allowed for the given category
	const isFontWeightAvailable =
		fontWeightsAvailable[category]?.[options.fontWeight] ?? false;

	const fontWeight = isFontWeightAvailable
		? fontWeights[options.fontWeight]
		: undefined;

	// line-height is defined as a unitless value, so we multiply
	// by the element's font-size in px to get the px value
	const lineHeight =
		options.unit === 'px'
			? `${lineHeights[options.lineHeight] * pxTextSize}px`
			: lineHeights[options.lineHeight];

	return {
		lineHeight,
		fontWeight,
		fontSize: options.unit === 'px' ? pxTextSize : `${remTextSize}rem`,
		fontFamily: fonts[category],
		textDecorationThickness: Number(underlineThickness[category][level]),
		fontStyle: determineFontStyleProperty(options.fontStyle, hasItalic),
	};
};
