import {
	body as bodyAsObj,
	headline as headlineAsObj,
	textSans as textSansAsObj,
	titlepiece as titlepieceAsObj,
} from './api';
import {
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
} from './data';
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
 * [Storybook](https://guardian.github.io/source/?path=/docs/foundations-typography--page#titlepiece) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/358767)
 *
 * ```
 * font-family: 'GT Guardian Titlepiece';
 * ```
 *
 * `titlepiece.small()` -> 42px
 *
 * `titlepiece.medium()` -> 50px
 *
 * `titlepiece.large()` -> 70px
 */
const titlepiece = Object.fromEntries(
	Object.entries(titlepieceAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<TitlepieceSizes>;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/foundations-typography--page#headline) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/7310bd)
 *
 * ```
 * font-family: 'GH Guardian Headline';
 * ```
 *
 * `headline.xxxsmall()` -> 17px
 *
 * `headline.xxsmall()` -> 20px
 *
 * `headline.xsmall()` -> 24px
 *
 * `headline.small()` -> 28px
 *
 * `headline.medium()` -> 34px
 *
 * `headline.large()` -> 42px
 *
 * `headline.xlarge()` -> 50px
 */
const headline = Object.fromEntries(
	Object.entries(headlineAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<HeadlineSizes>;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/foundations-typography--page#body) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/88cd8e)
 *
 * ```
 * font-family: 'GuardianTextEgyptian';
 * ```
 *
 * `body.small()` -> 15px
 *
 * `body.medium()` -> 17px
 */
const body = Object.fromEntries(
	Object.entries(bodyAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<BodySizes>;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/foundations-typography--page#text-sans) •
 * [Design System](https://theguardian.design/2a1e5182b/p/602314-typography/t/076605)
 *
 * ```
 * font-family: 'GuardianTextSans';
 * ```
 *
 * `textSans.xxsmall()` -> 12px
 *
 * `textSans.xsmall()` -> 14px
 *
 * `textSans.small()` -> 15px
 *
 * `textSans.medium()` -> 17px
 *
 * `textSans.large()` -> 20px
 *
 * `textSans.xlarge()` -> 24px
 *
 * `textSans.xxlarge()` -> 28px
 *
 * `textSans.xxxlarge()` -> 34px
 */
const textSans = Object.fromEntries(
	Object.entries(textSansAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<TextSansSizes>;

export {
	titlepiece,
	headline,
	body,
	textSans,
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	fontMapping as fonts,
	fontWeightMapping as fontWeights,
	lineHeightMapping as lineHeights,
};
