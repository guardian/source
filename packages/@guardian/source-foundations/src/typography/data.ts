import { pxToRem } from '../utils/px-to-rem';

/**
 * Pixel size values for each font that we use in the design system.
 *
 * These fit the following px size scale:
 * [12, 14, 15, 17, 20, 24, 28, 34, 42, 50, 70]
 */
export const pxTextSizes = {
	textSans: {
		xxsmall: 12,
		xsmall: 14,
		small: 15,
		medium: 17,
		large: 20,
		xlarge: 24,
		xxlarge: 28,
		xxxlarge: 34,
	},
	body: {
		xsmall: 14,
		small: 15,
		medium: 17,
	},
	headline: {
		xxxsmall: 17,
		xxsmall: 20,
		xsmall: 24,
		small: 28,
		medium: 34,
		large: 42,
		xlarge: 50,
	},
	titlepiece: {
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
 *
 * See {@link [pxToRem](../utils/px-to-rem.ts)} for more details.
 */
export const remTextSizes = {
	textSans: {
		xxsmall: pxToRem(12),
		xsmall: pxToRem(14),
		small: pxToRem(15),
		medium: pxToRem(17),
		large: pxToRem(20),
		xlarge: pxToRem(24),
		xxlarge: pxToRem(28),
		xxxlarge: pxToRem(34),
	},
	body: {
		xsmall: pxToRem(14),
		small: pxToRem(15),
		medium: pxToRem(17),
	},
	headline: {
		xxxsmall: pxToRem(17),
		xxsmall: pxToRem(20),
		xsmall: pxToRem(24),
		small: pxToRem(28),
		medium: pxToRem(34),
		large: pxToRem(42),
		xlarge: pxToRem(50),
	},
	titlepiece: {
		small: pxToRem(42),
		medium: pxToRem(50),
		large: pxToRem(70),
	},
} as const;

export const fonts = {
	titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
	headline: 'GH Guardian Headline, Guardian Egyptian Web, Georgia, serif',
	body: 'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
	textSans:
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
export const textSansSizes = pxTextSizes.textSans;

export const bodySizes = pxTextSizes.body;

export const headlineSizes = pxTextSizes.headline;

export const titlepieceSizes = pxTextSizes.titlepiece;

// Computed rem font size exports

export const remTitlepieceSizes = remTextSizes.titlepiece;

export const remHeadlineSizes = remTextSizes.headline;

export const remBodySizes = remTextSizes.body;

export const remTextSansSizes = remTextSizes.textSans;
