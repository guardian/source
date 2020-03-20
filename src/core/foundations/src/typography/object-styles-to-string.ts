import { TypographyStyles } from "./data"

export const objectStylesToString = ({
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	fontStyle,
}: TypographyStyles) => `
	font-family: ${fontFamily};
	font-size: ${typeof fontSize === "number" ? `${fontSize}px` : fontSize};
	line-height: ${lineHeight};
	${fontWeight ? `font-weight: ${fontWeight}` : ""};
	${fontStyle ? `font-style: ${fontStyle}` : ""};
`
