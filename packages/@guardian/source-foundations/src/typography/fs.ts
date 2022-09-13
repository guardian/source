import {
	fonts,
	fontWeights,
	lineHeights,
	pxTextSizes,
	remTextSizes,
	underlineThickness,
} from './data';
import type {
	AvailableFontsMapping,
	FontStyle,
	FontWeightDefinition,
	Fs,
	Option,
} from './types';

export const availableFonts: AvailableFontsMapping = {
	titlepiece: {
		bold: {
			hasItalic: false,
		},
	},
	headline: {
		light: {
			hasItalic: true,
		},
		medium: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
	body: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: true,
		},
	},
	textSans: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
};

function getFontStyle(
	font: FontWeightDefinition | undefined,
	fontStyle: Option<FontStyle>,
): Option<FontStyle> {
	switch (fontStyle) {
		case 'italic':
			return font?.hasItalic ? 'italic' : null;
		case 'normal':
			return 'normal';
		case null:
		default:
			return null;
	}
}

export const fs: Fs =
	(category) =>
	(level, { lineHeight, fontWeight, fontStyle, unit }) => {
		const fontFamilyValue = fonts[category];
		const fontSizeValue: `${number}rem` | number =
			unit === 'px'
				? Number(pxTextSizes[category][level])
				: `${Number(remTextSizes[category][level])}rem`;
		const lineHeightValue: `${number}px` | number =
			unit === 'px'
				? // line-height is defined as a unitless value, so we multiply
				  // by the element's font-size in px to get the px value
				  `${lineHeights[lineHeight] * Number(pxTextSizes[category][level])}px`
				: lineHeights[lineHeight];
		// TODO: consider logging an error in development if a requested
		// font is unavailable
		const requestedFont = availableFonts[category][fontWeight];
		const fontWeightValue = requestedFont ? fontWeights[fontWeight] : '';
		const fontStyleValue = getFontStyle(requestedFont, fontStyle);
		const textDecorationThicknessValue = Number(
			underlineThickness[category][level],
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
