import { fontSizes, fonts, lineHeights, fontWeights } from "./theme";

type Category = "headline" | "body" | "textSans";
type LineHeight = "tight" | "regular" | "loose";
type FontWeight = "light" | "regular" | "medium" | "bold";
type FontWeightDefinition = { fontWeight: number; hasItalic: boolean };

const headlineSizes = {
	1: fontSizes[2],
	2: fontSizes[3],
	3: fontSizes[4],
	4: fontSizes[5],
	5: fontSizes[6],
	6: fontSizes[7],
	7: fontSizes[8],
	8: fontSizes[9]
};

const bodySizes = {
	1: fontSizes[1],
	2: fontSizes[2]
};

const textSansSizes = {
	1: fontSizes[0],
	2: fontSizes[1],
	3: fontSizes[2],
	4: fontSizes[3],
	5: fontSizes[4],
	6: fontSizes[5],
	7: fontSizes[6],
	8: fontSizes[7],
	9: fontSizes[8],
	10: fontSizes[9]
};

const fontSizeMapping: { [cat in Category]: { [level in number]: number } } = {
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes
};

const fontMapping: { [cat in Category]: string } = {
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans
};

const lineHeightMapping: { [lineHight in LineHeight]: string } = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2]
};

const fontWeightMapping: {
	[cat in Category]: {
		[fontWeight in FontWeight]?: FontWeightDefinition;
	};
} = {
	headline: {
		light: {
			fontWeight: fontWeights[0],
			hasItalic: true
		},
		medium: {
			fontWeight: fontWeights[2],
			hasItalic: true
		},
		bold: {
			fontWeight: fontWeights[3],
			hasItalic: false
		}
	},
	body: {
		regular: {
			fontWeight: fontWeights[1],
			hasItalic: true
		},
		bold: {
			fontWeight: fontWeights[3],
			hasItalic: true
		}
	},
	textSans: {
		regular: {
			fontWeight: fontWeights[1],
			hasItalic: true
		},
		bold: {
			fontWeight: fontWeights[3],
			hasItalic: false
		}
	}
};

const fs = ({
	category,
	level,
	lineHeight,
	fontWeight
}: {
	category: Category;
	level: number;
	lineHeight: LineHeight;
	fontWeight: FontWeight;
}) => {
	const fontFamilyValue = fontMapping[category];
	const fontSizeValue = fontSizeMapping[category][level];
	const lineHeightValue = lineHeightMapping[lineHeight];
	const fontWeightDefinition = fontWeightMapping[category][fontWeight];

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue}px;
	line-height: ${lineHeightValue};
	${
		fontWeightDefinition
			? `font-weight: ${fontWeightDefinition.fontWeight}`
			: ""
	};
	`;
};

interface FontScaleArgs {
	level: number;
	lineHeight?: LineHeight;
	fontWeight?: FontWeight;
}

const headline = ({
	level,
	lineHeight = "tight",
	fontWeight = "medium"
}: FontScaleArgs) =>
	fs({ category: "headline", level, lineHeight, fontWeight });

const body = ({
	level,
	lineHeight = "loose",
	fontWeight = "regular"
}: FontScaleArgs) => fs({ category: "body", level, lineHeight, fontWeight });

const textSans = ({
	level,
	lineHeight = "loose",
	fontWeight = "regular"
}: FontScaleArgs) =>
	fs({ category: "textSans", level, lineHeight, fontWeight });

Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);

export { headline, body, textSans, headlineSizes, bodySizes, textSansSizes };
