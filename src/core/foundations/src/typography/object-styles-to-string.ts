import { TypographyStyles, ScaleUnit } from "./data"

export const objectStylesToString = (
	{
		fontFamily,
		fontSize,
		lineHeight,
		fontWeight,
		fontStyle,
	}: TypographyStyles,
	unit?: ScaleUnit,
) => `
	font-family: ${fontFamily};
	font-size: ${unit === "px" ? `${fontSize}px` : fontSize};
	line-height: ${unit === "px" ? `${lineHeight}px` : lineHeight};
	${fontWeight ? `font-weight: ${fontWeight}` : ""};
	${fontStyle ? `font-style: ${fontStyle}` : ""};
`
