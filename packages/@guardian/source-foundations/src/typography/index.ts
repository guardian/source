import {
	body as bodyAsObj,
	headline as headlineAsObj,
	textSans as textSansAsObj,
	titlepiece as titlepieceAsObj,
} from './api';
import {
	fontStyleToEmotionFunction,
	fontStyleToStringFunction,
} from './font-styles';
import type {
	BodySizes,
	HeadlineSizes,
	TextSansSizes,
	TitlepieceSizes,
	TypographyEmotionFunctions,
	TypographyStrFunctions,
} from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#titlepiece) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/358767)
 *
 * ```
 * font-family: 'GT Guardian Titlepiece';
 * ```
 */
export const titlepiece: TypographyEmotionFunctions<TitlepieceSizes> = {
	small: fontStyleToEmotionFunction(titlepieceAsObj.small),
	medium: fontStyleToEmotionFunction(titlepieceAsObj.medium),
	large: fontStyleToEmotionFunction(titlepieceAsObj.large),
};

export const titlepieceString: TypographyStrFunctions<TitlepieceSizes> = {
	small: fontStyleToStringFunction(titlepieceAsObj.small),
	medium: fontStyleToStringFunction(titlepieceAsObj.medium),
	large: fontStyleToStringFunction(titlepieceAsObj.large),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#headline) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/7310bd)
 *
 * ```
 * font-family: 'GH Guardian Headline';
 * ```
 */
export const headline: TypographyEmotionFunctions<HeadlineSizes> = {
	xxxsmall: fontStyleToEmotionFunction(headlineAsObj.xxxsmall),
	xxsmall: fontStyleToEmotionFunction(headlineAsObj.xxsmall),
	xsmall: fontStyleToEmotionFunction(headlineAsObj.xsmall),
	small: fontStyleToEmotionFunction(headlineAsObj.small),
	medium: fontStyleToEmotionFunction(headlineAsObj.medium),
	large: fontStyleToEmotionFunction(headlineAsObj.large),
	xlarge: fontStyleToEmotionFunction(headlineAsObj.xlarge),
};

export const headlineString: TypographyStrFunctions<HeadlineSizes> = {
	xxxsmall: fontStyleToStringFunction(headlineAsObj.xxxsmall),
	xxsmall: fontStyleToStringFunction(headlineAsObj.xxsmall),
	xsmall: fontStyleToStringFunction(headlineAsObj.xsmall),
	small: fontStyleToStringFunction(headlineAsObj.small),
	medium: fontStyleToStringFunction(headlineAsObj.medium),
	large: fontStyleToStringFunction(headlineAsObj.large),
	xlarge: fontStyleToStringFunction(headlineAsObj.xlarge),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#body) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/88cd8e)
 *
 * ```
 * font-family: 'GuardianTextEgyptian';
 * ```
 */
export const body: TypographyEmotionFunctions<BodySizes> = {
	xsmall: fontStyleToEmotionFunction(bodyAsObj.xsmall),
	small: fontStyleToEmotionFunction(bodyAsObj.small),
	medium: fontStyleToEmotionFunction(bodyAsObj.medium),
};

export const bodyString: TypographyStrFunctions<BodySizes> = {
	xsmall: fontStyleToStringFunction(bodyAsObj.xsmall),
	small: fontStyleToStringFunction(bodyAsObj.small),
	medium: fontStyleToStringFunction(bodyAsObj.medium),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-typography--page#text-sans) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/076605)
 *
 * ```
 * font-family: 'GuardianTextSans';
 * ```
 */
export const textSans: TypographyEmotionFunctions<TextSansSizes> = {
	xxsmall: fontStyleToEmotionFunction(textSansAsObj.xxsmall),
	xsmall: fontStyleToEmotionFunction(textSansAsObj.xsmall),
	small: fontStyleToEmotionFunction(textSansAsObj.small),
	medium: fontStyleToEmotionFunction(textSansAsObj.medium),
	large: fontStyleToEmotionFunction(textSansAsObj.large),
	xlarge: fontStyleToEmotionFunction(textSansAsObj.xlarge),
	xxlarge: fontStyleToEmotionFunction(textSansAsObj.xxlarge),
	xxxlarge: fontStyleToEmotionFunction(textSansAsObj.xxxlarge),
};

export const textSansString: TypographyStrFunctions<TextSansSizes> = {
	xxsmall: fontStyleToStringFunction(textSansAsObj.xxsmall),
	xsmall: fontStyleToStringFunction(textSansAsObj.xsmall),
	small: fontStyleToStringFunction(textSansAsObj.small),
	medium: fontStyleToStringFunction(textSansAsObj.medium),
	large: fontStyleToStringFunction(textSansAsObj.large),
	xlarge: fontStyleToStringFunction(textSansAsObj.xlarge),
	xxlarge: fontStyleToStringFunction(textSansAsObj.xxlarge),
	xxxlarge: fontStyleToStringFunction(textSansAsObj.xxxlarge),
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
