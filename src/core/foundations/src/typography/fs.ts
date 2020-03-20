import {
	Fs,
	fontMapping,
	remFontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
} from "./data"

export const fs: Fs = (category, level, { lineHeight, fontWeight, italic }) => {
	const fontFamilyValue = fontMapping[category]
	const fontSizeValue = remFontSizeMapping[category][level]
	const lineHeightValue = lineHeightMapping[lineHeight]
	// TODO: consider logging an error in development if a requested
	// font is unavailable
	const requestedFont = availableFonts[category][fontWeight]
	const fontWeightValue = requestedFont ? fontWeightMapping[fontWeight] : ""
	const fontStyleValue =
		italic && requestedFont && requestedFont.hasItalic ? "italic" : ""

	return Object.assign(
		{
			fontFamily: fontFamilyValue,
			fontSize: `${fontSizeValue}rem`,
			lineHeight: lineHeightValue,
		},
		fontWeightValue ? { fontWeight: fontWeightValue } : {},
		fontStyleValue ? { fontStyle: fontStyleValue } : {},
	)
}
