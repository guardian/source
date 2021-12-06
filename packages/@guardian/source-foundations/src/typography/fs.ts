import {
	availableFonts,
	fontMapping,
	fontSizeMapping,
	fontWeightMapping,
	lineHeightMapping,
	remFontSizeMapping,
} from './data';
import type { FontStyle, FontWeightDefinition, Fs, Option } from './types';

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
		const fontFamilyValue = fontMapping[category];
		const fontSizeValue: `${number}rem` | number =
			unit === 'px'
				? Number(fontSizeMapping[category][level])
				: // @ts-expect-error -- the types actually overlap
				  `${Number(remFontSizeMapping[category][level])}rem`;
		const lineHeightValue: `${number}px` | number =
			unit === 'px'
				? // line-height is defined as a unitless value, so we multiply
				  // by the element's font-size in px to get the px value
				  `${
						lineHeightMapping[lineHeight] *
						Number(fontSizeMapping[category][level])
				  }px`
				: lineHeightMapping[lineHeight];
		// TODO: consider logging an error in development if a requested
		// font is unavailable
		const requestedFont = availableFonts[category][fontWeight];
		const fontWeightValue = requestedFont
			? fontWeightMapping[fontWeight]
			: '';
		const fontStyleValue = getFontStyle(requestedFont, fontStyle);

		return Object.assign(
			{
				fontFamily: fontFamilyValue,
				fontSize: fontSizeValue,
				lineHeight: lineHeightValue,
			},
			fontWeightValue ? { fontWeight: fontWeightValue } : {},
			fontStyleValue ? { fontStyle: fontStyleValue } : {},
		);
	};
