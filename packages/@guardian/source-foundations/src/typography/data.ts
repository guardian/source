import { pxToRem } from '../utils/px-to-rem';
import type { Category, FontWeight, FontWeightDefinition } from './types';

const fontSizes = [12, 14, 15, 17, 20, 24, 28, 34, 42, 50, 70] as const;

const fonts = {
	titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
	headlineSerif:
		'GH Guardian Headline, Guardian Egyptian Web, Georgia, serif',
	bodySerif:
		'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
	bodySans:
		'GuardianTextSans, Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

export const lineHeights = [1.15, 1.35, 1.5] as const;

const fontWeights = [300, 400, 500, 700] as const;

const titlepieceSizes = {
	small: fontSizes[8], //42px
	medium: fontSizes[9], //50px
	large: fontSizes[10], //70px
} as const;

const headlineSizes = {
	xxxsmall: fontSizes[3], //17px
	xxsmall: fontSizes[4], //20px
	xsmall: fontSizes[5], //24px
	small: fontSizes[6], //28px
	medium: fontSizes[7], //34px
	large: fontSizes[8], //42px
	xlarge: fontSizes[9], //50px
} as const;

const bodySizes = {
	small: fontSizes[2], //15px
	medium: fontSizes[3], //17px
} as const;

const textSansSizes = {
	xxsmall: fontSizes[0], //12px
	xsmall: fontSizes[1], //14px
	small: fontSizes[2], //15px
	medium: fontSizes[3], //17px
	large: fontSizes[4], //20px
	xlarge: fontSizes[5], //24px
	xxlarge: fontSizes[6], //28px
	xxxlarge: fontSizes[7], //34px
} as const;

const fontSizeMapping = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
} as const;

const remFontSizes = fontSizes.map((fontSize) => pxToRem(fontSize));

const remTitlepieceSizes = {
	small: remFontSizes[8], //42px
	medium: remFontSizes[9], //50px
	large: remFontSizes[10], //70px
} as const;

const remHeadlineSizes = {
	xxxsmall: remFontSizes[3], //17px
	xxsmall: remFontSizes[4], //20px
	xsmall: remFontSizes[5], //24px
	small: remFontSizes[6], //28px
	medium: remFontSizes[7], //34px
	large: remFontSizes[8], //42px
	xlarge: remFontSizes[9], //50px
} as const;

const remBodySizes = {
	small: remFontSizes[2], //15px
	medium: remFontSizes[3], //17px
} as const;

const remTextSansSizes = {
	xxsmall: remFontSizes[0], //12px
	xsmall: remFontSizes[1], //14px
	small: remFontSizes[2], //15px
	medium: remFontSizes[3], //17px
	large: remFontSizes[4], //20px
	xlarge: remFontSizes[5], //24px
	xxlarge: remFontSizes[6], //28px
	xxxlarge: remFontSizes[7], //34px
} as const;

const remFontSizeMapping = {
	titlepiece: remTitlepieceSizes,
	headline: remHeadlineSizes,
	body: remBodySizes,
	textSans: remTextSansSizes,
} as const;

const fontMapping = {
	titlepiece: fonts.titlepiece,
	headline: fonts.headlineSerif,
	body: fonts.bodySerif,
	textSans: fonts.bodySans,
} as const;

const lineHeightMapping = {
	tight: lineHeights[0],
	regular: lineHeights[1],
	loose: lineHeights[2],
} as const;

const fontWeightMapping = {
	light: fontWeights[0],
	regular: fontWeights[1],
	medium: fontWeights[2],
	bold: fontWeights[3],
} as const;

const availableFonts: {
	[cat in Category]: {
		[fontWeight in FontWeight]?: FontWeightDefinition;
	};
} = {
	titlepiece: {
		bold: {
			hasItalic: false,
		},
	},
	headline: {
		light: {
			hasItalic: true,
		},
		medium: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
	body: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: true,
		},
	},
	textSans: {
		regular: {
			hasItalic: true,
		},
		bold: {
			hasItalic: false,
		},
	},
};

Object.freeze(titlepieceSizes);
Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);
Object.freeze(remTitlepieceSizes);
Object.freeze(remHeadlineSizes);
Object.freeze(remBodySizes);
Object.freeze(remTextSansSizes);
Object.freeze(fontMapping);
Object.freeze(fontSizeMapping);
Object.freeze(fontWeightMapping);
Object.freeze(lineHeightMapping);
Object.freeze(availableFonts);

export {
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	remFontSizes,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	remFontSizeMapping,
	fontMapping,
	fontSizeMapping,
	lineHeightMapping,
	fontWeightMapping,
	availableFonts,
};
