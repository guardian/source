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
	Category,
	GetFontStyle,
	GetFontSizeValue,
	GetFontStyleValue,
	GetFontWeightValue,
	GetLineHeightValue,
	GetTextDecorationThicknessValue,
} from './types';

const getFontFamilyValue = (category: Category) => fonts[category];

const getFontSizeValue: GetFontSizeValue = (category, level, unit) =>
	unit === 'px'
		? Number(pxTextSizes[category][level])
		: `${Number(remTextSizes[category][level])}rem`;

const getLineHeightValue: GetLineHeightValue = (
	category,
	level,
	unit,
	lineHeight,
) =>
	unit === 'px'
		? // line-height is defined as a unitless value, so we multiply
		  // by the element's font-size in px to get the px value
		  `${lineHeights[lineHeight] * Number(pxTextSizes[category][level])}px`
		: lineHeights[lineHeight];

const getFontWeightValue: GetFontWeightValue = (category, fontWeight) => {
	const isFontWeightAvailable =
		fontWeightsAvailable[category]?.[fontWeight] ?? false;

	if (isFontWeightAvailable) {
		return fontWeights[fontWeight];
	}

	return undefined;
};

const getFontStyleValue: GetFontStyleValue = (
	category,
	fontWeight,
	fontStyle,
) => {
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

const getTextDecorationThicknessValue: GetTextDecorationThicknessValue = (
	category,
	level,
) => Number(underlineThickness[category][level]);

export const getFontStyle: GetFontStyle = (category, level, options) => {
	const { lineHeight, fontWeight, fontStyle, unit } = options;
	return {
		fontFamily: getFontFamilyValue(category),
		fontSize: getFontSizeValue(category, level, unit),
		lineHeight: getLineHeightValue(category, level, unit, lineHeight),
		textDecorationThickness: getTextDecorationThicknessValue(category, level),
		fontWeight: getFontWeightValue(category, fontWeight),
		fontStyle: getFontStyleValue(category, fontWeight, fontStyle) ?? undefined,
	};
};
