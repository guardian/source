import { fontSizes, fonts, lineHeights, fontWeights } from "./theme";

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

const fontSizeMapping = {
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes
};

const fontMapping = {
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans
};

const lineHeightMapping = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2]
};

const fontWeightMapping = {
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

const fs = ({ category, level, lineHeight, fontWeight }) => {
	// Gosh there's a lot of flaky logic here! We need to think about
	// what happens if a value is not found. Maybe a big try / catch?
	const fontFamilyValue = fontMapping[category];
	const fontSizeValue = fontSizeMapping[category][level];
	const lineHeightValue = lineHeightMapping[lineHeight];
	const fontWeightValue = fontWeightMapping[category][fontWeight].fontWeight;

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue}px;
	line-height: ${lineHeightValue};
	font-weight: ${fontWeightValue};
	`;
};

const headline = ({ level, lineHeight = "tight", fontWeight = "medium" }) =>
	fs({ category: "headline", level, lineHeight, fontWeight });

const body = ({ level, lineHeight = "loose", fontWeight = "regular" }) =>
	fs({ category: "body", level, lineHeight, fontWeight });

const textSans = ({ level, lineHeight = "loose", fontWeight = "regular" }) =>
	fs({ category: "textSans", level, lineHeight, fontWeight });

Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);

export { headline, body, textSans, headlineSizes, bodySizes, textSansSizes };
