import type { Category, FontWeight, FontWeightDefinition } from './types';

const textSansSizes = {
	xxsmall: 12,
	xsmall: 14,
	small: 15,
	medium: 17,
	large: 20,
	xlarge: 24,
	xxlarge: 28,
	xxxlarge: 34,
} as const;
const bodySizes = {
	xsmall: 14,
	small: 15,
	medium: 17,
} as const;
const headlineSizes = {
	xxxsmall: 17,
	xxsmall: 20,
	xsmall: 24,
	small: 28,
	medium: 34,
	large: 42,
	xlarge: 50,
} as const;
const titlepieceSizes = {
	small: 42,
	medium: 50,
	large: 70,
} as const;

const fontSizeMapping = {
	titlepiece: titlepieceSizes,
	headline: headlineSizes,
	body: bodySizes,
	textSans: textSansSizes,
};

const remTitlepieceSizes = {
	small: 2.625, //42px
	medium: 3.125, //50px
	large: 4.375, //70px
} as const;
const remHeadlineSizes = {
	xxxsmall: 1.0625, //17px
	xxsmall: 1.25, //20px
	xsmall: 1.5, //24px
	small: 1.75, //28px
	medium: 2.125, //34px
	large: 2.625, //42px
	xlarge: 3.125, //50px
} as const;
const remBodySizes = {
	xsmall: 0.875, //14px
	small: 0.9375, //15px
	medium: 1.0625, //17px
} as const;
const remTextSansSizes = {
	xxsmall: 0.75, //12px
	xsmall: 0.875, //14px
	small: 0.9375, //15px
	medium: 1.0625, //17px
	large: 1.25, //20px
	xlarge: 1.5, //24px
	xxlarge: 1.75, //28px
	xxxlarge: 2.125, //34px
} as const;

const remFontSizeMapping = {
	titlepiece: remTitlepieceSizes,
	headline: remHeadlineSizes,
	body: remBodySizes,
	textSans: remTextSansSizes,
};

const fontMapping = {
	titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
	headlineSerif: 'GH Guardian Headline, Guardian Egyptian Web, Georgia, serif',
	bodySerif: 'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
	bodySans:
		'GuardianTextSans, Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

const lineHeightMapping = {
	tight: 1.15,
	regular: 1.35,
	loose: 1.5,
};
const fontWeightMapping = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700,
};
const availableFonts = {
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
} as {
	[cat in Category]: {
		[fontWeight in FontWeight]?: FontWeightDefinition;
	};
};
const underlineThicknessMapping = {
	textSans: {
		xxsmall: 2,
		xsmall: 2,
		small: 2,
		medium: 2,
		large: 3,
		xlarge: 3,
		xxlarge: 3,
		xxxlarge: 4,
	},
	body: {
		xsmall: 2,
		small: 2,
		medium: 2,
	},
	headline: {
		xxxsmall: 2,
		xxsmall: 3,
		xsmall: 3,
		small: 3,
		medium: 4,
		large: 5,
		xlarge: 6,
	},
	titlepiece: {
		small: 5,
		medium: 6,
		large: 6,
	},
};

export {
	availableFonts,
	fontSizeMapping,
	remFontSizeMapping,
	underlineThicknessMapping,
	bodySizes,
	fontMapping,
	fontWeightMapping,
	headlineSizes,
	lineHeightMapping,
	remBodySizes,
	remHeadlineSizes,
	remTextSansSizes,
	remTitlepieceSizes,
	textSansSizes,
	titlepieceSizes,
};
