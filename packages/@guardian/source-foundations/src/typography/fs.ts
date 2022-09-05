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
	Category,
	FontStyle,
	FontWeight,
	Fs,
	LineHeight,
	Option,
	ScaleUnit,
} from './types';

const getFontFamilyValue = (category: Category) => fonts[category];
const getFontSizeValue = <
	Category extends keyof Categories,
	Level extends keyof Categories[Category],
>(
	category: Category,
	level: Level,
	unit: ScaleUnit,
): `${number}rem` | number =>
	unit === 'px'
		? Number(pxTextSizes[category][level])
		: `${Number(remTextSizes[category][level])}rem`;

const getLineHeightValue = <
	Category extends keyof Categories,
	Level extends keyof Categories[Category],
>(
	category: Category,
	level: Level,
	unit: ScaleUnit,
	lineHeight: LineHeight,
): `${number}px` | number => {
	return unit === 'px'
		? // line-height is defined as a unitless value, so we multiply
		  // by the element's font-size in px to get the px value
		  `${lineHeights[lineHeight] * Number(pxTextSizes[category][level])}px`
		: lineHeights[lineHeight];
};

type FontWeights = typeof fontWeights[FontWeight];

const getFontWeightValue = (
	category: Category,
	fontWeight: FontWeight,
): FontWeights | undefined => {
	const isFontWeightAvailable =
		fontWeightsAvailable[category]?.[fontWeight] ?? false;

	if (isFontWeightAvailable) {
		return fontWeights[fontWeight];
	}

	return undefined;
};

const getFontStyleValue = (
	category: Category,
	fontWeight: FontWeight,
	fontStyle: Option<FontStyle>,
): Option<FontStyle> => {
	const hasItalic =
		italicsAvailableForFontWeight[category]?.[fontWeight] ?? false;
	switch (fontStyle) {
		case 'italic':
			return hasItalic ? 'italic' : null;
		case 'normal':
			return 'normal';
		case null:
		default:
			return null;
	}
};

const getTextDecorationThicknessValue = <
	Category extends keyof Categories,
	Level extends keyof Categories[Category],
>(
	category: Category,
	level: Level,
): number => Number(underlineThickness[category][level]);

export const fs: Fs = (
	category,
	level,
	{ lineHeight, fontWeight, fontStyle, unit },
) => {
	return {
		fontFamily: getFontFamilyValue(category),
		fontSize: getFontSizeValue(category, level, unit),
		lineHeight: getLineHeightValue(category, level, unit, lineHeight),
		textDecorationThickness: getTextDecorationThicknessValue(category, level),
		fontWeight: getFontWeightValue(category, fontWeight),
		fontStyle: getFontStyleValue(category, fontWeight, fontStyle) ?? undefined,
	};
};
