import {
	fontMapping,
	fontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
} from "./data"
import { Fs } from "./types"

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
	const fontStyleValue =
		italic && requestedFont && requestedFont.hasItalic ? "italic" : ""

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
