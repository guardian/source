import {
	body as bodyAsObj,
	headline as headlineAsObj,
	textSans as textSansAsObj,
	titlepiece as titlepieceAsObj,
} from './api';
import { objectStylesToString } from './object-styles-to-string';
import type {
	BodySizes,
	FontScaleArgs,
	FontScaleFunctionStr,
	HeadlineSizes,
	TextSansSizes,
	TitlepieceSizes,
} from './types';

type TypographyApi<Sizes> = {
	[key in keyof Sizes]: FontScaleFunctionStr;
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#titlepiece) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/358767)
 *
 * ```
 * font-family: 'GT Guardian Titlepiece';
 * ```
 */
export const titlepiece: TypographyApi<TitlepieceSizes> = {
	small: (options?: FontScaleArgs) =>
		objectStylesToString(titlepieceAsObj.small(options)),
	medium: (options?: FontScaleArgs) =>
		objectStylesToString(titlepieceAsObj.medium(options)),
	large: (options?: FontScaleArgs) =>
		objectStylesToString(titlepieceAsObj.large(options)),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#headline) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/7310bd)
 *
 * ```
 * font-family: 'GH Guardian Headline';
 * ```
 */
export const headline: TypographyApi<HeadlineSizes> = {
	xxxsmall: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.xxxsmall(options)),
	xxsmall: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.xxsmall(options)),
	xsmall: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.xsmall(options)),
	small: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.small(options)),
	medium: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.medium(options)),
	large: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.large(options)),
	xlarge: (options?: FontScaleArgs) =>
		objectStylesToString(headlineAsObj.xlarge(options)),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#body) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/88cd8e)
 *
 * ```
 * font-family: 'GuardianTextEgyptian';
 * ```
 */
export const body: TypographyApi<BodySizes> = {
	xsmall: (options?: FontScaleArgs) =>
		objectStylesToString(bodyAsObj.small(options)),
	small: (options?: FontScaleArgs) =>
		objectStylesToString(bodyAsObj.small(options)),
	medium: (options?: FontScaleArgs) =>
		objectStylesToString(bodyAsObj.medium(options)),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#text-sans) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/076605)
 *
 * ```
 * font-family: 'GuardianTextSans';
 * ```
 */
export const textSans: TypographyApi<TextSansSizes> = {
	xxsmall: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.xxsmall(options)),
	xsmall: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.xsmall(options)),
	small: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.small(options)),
	medium: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.medium(options)),
	large: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.large(options)),
	xlarge: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.xlarge(options)),
	xxlarge: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.xxlarge(options)),
	xxxlarge: (options?: FontScaleArgs) =>
		objectStylesToString(textSansAsObj.xxxlarge(options)),
};

export {
	bodySizes,
	headlineSizes,
	remBodySizes,
	remHeadlineSizes,
	remTextSansSizes,
	remTitlepieceSizes,
	textSansSizes,
	titlepieceSizes,
	fonts,
	lineHeights,
	fontWeights,
} from './data';

export type {
	ScaleUnit,
	Category,
	LineHeight,
	FontWeight,
	FontStyle,
	FontWeightDefinition,
} from './types';
