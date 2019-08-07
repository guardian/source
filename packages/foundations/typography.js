import { fontSizes, fonts, lineHeights, fontWeights } from "./theme";

const fontSizeMapping = {
	headline: {
		1: fontSizes[2],
		2: fontSizes[3],
		3: fontSizes[4],
		4: fontSizes[5],
		5: fontSizes[6],
		6: fontSizes[7],
		7: fontSizes[8],
		8: fontSizes[9]
	},
	body: {
		1: fontSizes[1],
		2: fontSizes[2]
	},
	textSans: {
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
	}
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
	const fontFamilyValue = fontMapping[category];
	const fontSizeValue = fontSizeMapping[category][level];
	const lineHeightValue = lineHeightMapping[lineHeight];
	const fontWeightValue = fontWeightMapping[fontWeight];

	return `
	font-family: ${fontFamilyValue};
	font-size: ${fontSizeValue};
	line-height: ${lineHeightValue};
	font-weight: ${fontWeightValue};
	`;
};

export const headline = ({
	level,
	lineHeight = "regular",
	fontWeight = "regular"
}) => {
	return fs({ category: "headline", level, lineHeight, fontWeight });
};

export const body = ({
	level,
	lineHeight = "regular",
	fontWeight = "regular"
}) => {
	return fs({ category: "body", level, lineHeight, fontWeight });
};

export const textSans = ({
	level,
	lineHeight = "regular",
	fontWeight = "regular"
}) => {
	return fs({ category: "textSans", level, lineHeight, fontWeight });
};
