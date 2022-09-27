import { pxToRem } from '../utils/px-to-rem';
import type { AvailableFontWeights, ItalicsFontWeights } from './types';

/**
 * Pixel size values for each font that we use in the design system.
 *
 * We assert that the values match the guardian type scale in our
 * {@link [unit test suite](./typography.test.ts)}.
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
 * We assert that the computed rem values match the expected values
 * in our {@link [unit test suite](./typography.test.ts)}.
 *
 * See {@link [pxToRem](../utils/px-to-rem.ts)} for more details.
 */
export const remTextSizes = {
	textSans: {
		xxsmall: pxToRem(pxTextSizes.textSans.xxsmall),
		xsmall: pxToRem(pxTextSizes.textSans.xsmall),
		small: pxToRem(pxTextSizes.textSans.small),
		medium: pxToRem(pxTextSizes.textSans.medium),
		large: pxToRem(pxTextSizes.textSans.large),
		xlarge: pxToRem(pxTextSizes.textSans.xlarge),
		xxlarge: pxToRem(pxTextSizes.textSans.xxlarge),
		xxxlarge: pxToRem(pxTextSizes.textSans.xxxlarge),
	},
	body: {
		xsmall: pxToRem(pxTextSizes.body.xsmall),
		small: pxToRem(pxTextSizes.body.small),
		medium: pxToRem(pxTextSizes.body.medium),
	},
	headline: {
		xxxsmall: pxToRem(pxTextSizes.headline.xxxsmall),
		xxsmall: pxToRem(pxTextSizes.headline.xxsmall),
		xsmall: pxToRem(pxTextSizes.headline.xsmall),
		small: pxToRem(pxTextSizes.headline.small),
		medium: pxToRem(pxTextSizes.headline.medium),
		large: pxToRem(pxTextSizes.headline.large),
		xlarge: pxToRem(pxTextSizes.headline.xlarge),
	},
	titlepiece: {
		small: pxToRem(pxTextSizes.titlepiece.small),
		medium: pxToRem(pxTextSizes.titlepiece.medium),
		large: pxToRem(pxTextSizes.titlepiece.large),
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

export const availableFontWeights = {
	titlepiece: { bold: true },
	headline: { light: true, medium: true, bold: true },
	body: { regular: true, bold: true },
	textSans: { regular: true, bold: true },
} as AvailableFontWeights;

export const italicsFontWeights = {
	titlepiece: { bold: false },
	headline: { light: true, medium: true, bold: false },
	body: { regular: true, bold: true },
	textSans: { regular: true, bold: false },
} as ItalicsFontWeights;

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
export const remBodySizes = remTextSizes.body;

export const remTitlepieceSizes = remTextSizes.titlepiece;

export const remHeadlineSizes = remTextSizes.headline;

export const remTextSansSizes = remTextSizes.textSans;
