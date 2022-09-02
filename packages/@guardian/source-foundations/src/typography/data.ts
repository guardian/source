/**
 * Pixel size values for each font that we use in the design system.
 *
 * These fit the following px size scale:
 * [12, 14, 15, 17, 20, 24, 28, 34, 42, 50, 70]
 */
const pxTextSizes = {
	textSansSizes: {
		xxsmall: 12,
		xsmall: 14,
		small: 15,
		medium: 17,
		large: 20,
		xlarge: 24,
		xxlarge: 28,
		xxxlarge: 34,
	},
	bodySizes: {
		xsmall: 14,
		small: 15,
		medium: 17,
	},
	headlineSizes: {
		xxxsmall: 17,
		xxsmall: 20,
		xsmall: 24,
		small: 28,
		medium: 34,
		large: 42,
		xlarge: 50,
	},
	titlepieceSizes: {
		small: 42,
		medium: 50,
		large: 70,
	},
} as const;

/**
 * Relative font sizes, calculated from the pixel sizes above;
 * using the pxToRem method.
 *
 * The resulting scale that we draw from is:
 * [0.75, 0.875, 0.9375, 1.0625, 1.25, 1.5, 1.75, 2.125, 2.625, 3.125, 4.375]
 *
 * See {@link [pxToRem](../utils/px-to-rem.ts)} for more details.
 */
const remTextSizes = {
	titlepieceSizes: {
		small: 2.625,
		medium: 3.125,
		large: 4.375,
	},
	headlineSizes: {
		xxxsmall: 1.0625,
		xxsmall: 1.25,
		xsmall: 1.5,
		small: 1.75,
		medium: 2.125,
		large: 2.625,
		xlarge: 3.125,
	},
	bodySizes: {
		xsmall: 0.875,
		small: 0.9375,
		medium: 1.0625,
	},
	textSansSizes: {
		xxsmall: 0.75,
		xsmall: 0.875,
		small: 0.9375,
		medium: 1.0625,
		large: 1.25,
		xlarge: 1.5,
		xxlarge: 1.75,
		xxxlarge: 2.125,
	},
} as const;

export const fonts = {
	titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
	headlineSerif: 'GH Guardian Headline, Guardian Egyptian Web, Georgia, serif',
	bodySerif: 'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
	bodySans:
		'GuardianTextSans, Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
} as const;

export const lineHeights = {
	tight: 1.15,
	regular: 1.35,
	loose: 1.5,
} as const;

export const fontWeights = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700,
} as const;

export const underlineThickness = {
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
} as const;

// Pixel font size exports
export const textSansSizes = pxTextSizes.textSansSizes;

export const bodySizes = pxTextSizes.bodySizes;

export const headlineSizes = pxTextSizes.headlineSizes;

export const titlepieceSizes = pxTextSizes.titlepieceSizes;

// Computed rem font size exports

export const remTitlepieceSizes = remTextSizes.titlepieceSizes;

export const remHeadlineSizes = remTextSizes.headlineSizes;

export const remBodySizes = remTextSizes.bodySizes;

export const remTextSansSizes = remTextSizes.textSansSizes;
