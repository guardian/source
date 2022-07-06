import type { TypographyStyles } from './types';

export const objectStylesToString = ({
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	fontStyle,
	textDecorationThickness,
}: TypographyStyles): string => `
	font-family: ${fontFamily};
	font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
	line-height: ${lineHeight};
	${fontWeight ? `font-weight: ${fontWeight}` : ''};
	${fontStyle ? `font-style: ${fontStyle}` : ''};

	&:hover {
		${
			textDecorationThickness
				? `text-decoration-thickness: ${textDecorationThickness}`
				: ``
		};
	}
`;
