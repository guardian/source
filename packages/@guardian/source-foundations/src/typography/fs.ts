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
): FontWeights | '' => {
	const isFontWeightAvailable =
		fontWeightsAvailable[category]?.[fontWeight] ?? false;

	if (isFontWeightAvailable) {
		return fontWeights[fontWeight];
	}
	return '';
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
	const fontFamilyValue = getFontFamilyValue(category);
	const fontSizeValue = getFontSizeValue(category, level, unit);
	const lineHeightValue = getLineHeightValue(category, level, unit, lineHeight);
	const fontWeightValue = getFontWeightValue(category, fontWeight);
	const fontStyleValue = getFontStyleValue(category, fontWeight, fontStyle);
	const textDecorationThicknessValue = getTextDecorationThicknessValue(
		category,
		level,
	);

	return Object.assign(
		{
			fontFamily: fontFamilyValue,
			fontSize: fontSizeValue,
			lineHeight: lineHeightValue,
			textDecorationThickness: textDecorationThicknessValue,
		},
		fontWeightValue ? { fontWeight: fontWeightValue } : {},
		fontStyleValue ? { fontStyle: fontStyleValue } : {},
	);
};
