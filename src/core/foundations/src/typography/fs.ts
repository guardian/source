import {
	Fs,
	fontMapping,
	fontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
	FontWeightDefinition,
} from "./data"

function fontStyle(
	font: FontWeightDefinition | undefined,
	italic: boolean | undefined,
): string {
	switch (italic) {
		case true:
			return font && font.hasItalic ? "italic" : ""
		case false:
			return "normal"
		case undefined:
		default:
			return ""
	}
}

export const fs: Fs = category => (
	level,
	{ lineHeight, fontWeight, italic, unit },
) => {
	const fontFamilyValue = fontMapping[category]
	const fontSizeValue =
		unit === "px"
			? fontSizeMapping[category][level]
			: `${fontSizeMapping[category][level] / 16}rem`
	const lineHeightValue =
		unit === "px"
			? `${lineHeightMapping[lineHeight] *
					fontSizeMapping[category][level]}px`
			: lineHeightMapping[lineHeight]
	// TODO: consider logging an error in development if a requested
	// font is unavailable
	const requestedFont = availableFonts[category][fontWeight]
	const fontWeightValue = requestedFont ? fontWeightMapping[fontWeight] : ""
	const fontStyleValue = fontStyle(requestedFont, italic)

	return Object.assign(
		{
			fontFamily: fontFamilyValue,
			fontSize: fontSizeValue,
			lineHeight: lineHeightValue,
		},
		fontWeightValue ? { fontWeight: fontWeightValue } : {},
		fontStyleValue ? { fontStyle: fontStyleValue } : {},
	)
}
