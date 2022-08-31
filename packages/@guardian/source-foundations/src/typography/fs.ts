import {
	bodySizes,
	fonts,
	fontWeights,
	headlineSizes,
	lineHeights,
	remBodySizes,
	remHeadlineSizes,
	remTextSansSizes,
	remTitlepieceSizes,
	textSansSizes,
	titlepieceSizes,
	underlineThickness,
} from './data';
import type {
	AvailableFontsMapping,
	FontStyle,
	FontWeightDefinition,
	Fs,
	Option,
} from './types';

const fontSizes = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
} as const;

const remFontSizes = {
	titlepiece: remTitlepieceSizes,
	headline: remHeadlineSizes,
	body: remBodySizes,
	textSans: remTextSansSizes,
} as const;

export const availableFonts = {
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
} as AvailableFontsMapping;

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
				? Number(fontSizes[category][level])
				: // @ts-expect-error -- the types actually overlap, see https://gist.github.com/mxdvl/5e31fd5b13670b6a41ddac6c65efeee4
				  `${Number(remFontSizes[category][level])}rem`;
		const lineHeightValue: `${number}px` | number =
			unit === 'px'
				? // line-height is defined as a unitless value, so we multiply
				  // by the element's font-size in px to get the px value
				  `${lineHeights[lineHeight] * Number(fontSizes[category][level])}px`
				: lineHeights[lineHeight];
		// TODO: consider logging an error in development if a requested
		// font is unavailable
		const requestedFont = availableFonts[category][fontWeight];
		const fontWeightValue = requestedFont ? fontWeights[fontWeight] : '';
		const fontStyleValue = getFontStyle(requestedFont, fontStyle);
		const textDecorationThicknessValue = Number(
			// @ts-expect-error -- the types actually overlap, see https://gist.github.com/mxdvl/5e31fd5b13670b6a41ddac6c65efeee4
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
