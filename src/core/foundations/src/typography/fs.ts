import {
	fontMapping,
	fontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
} from "./data"
import { Fs, FontWeightDefinition, FontStyle, Option } from "./types"

// Exists to support deprecated API, should be removed at some point
const legacyItalic = (
	font: FontWeightDefinition | undefined,
	italic: boolean,
): Option<FontStyle> =>
	italic && font !== undefined && font.hasItalic ? "italic" : null

function getFontStyle(
	font: FontWeightDefinition | undefined,
	fontStyle: Option<FontStyle>,
	italic: boolean,
): Option<FontStyle> {
	switch (fontStyle) {
		case "italic":
			return font && font.hasItalic ? "italic" : null
		case "normal":
			return "normal"
		case null:
		default:
			return legacyItalic(font, italic)
	}
}

export const fs: Fs = category => (
	level,
	{ lineHeight, fontWeight, italic, fontStyle, unit },
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
	const fontStyleValue = getFontStyle(requestedFont, fontStyle, italic)

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
