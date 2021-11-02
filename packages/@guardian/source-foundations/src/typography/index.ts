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
 * Titlepiece is a whole load of love.
 * The return value is 'baz' in all cases.
 * @param {*} bar - Any argument
 * @param {string} [optionalArg] - An optional argument that is a string
 */
const titlepiece = Object.fromEntries(
	Object.entries(titlepieceAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<TitlepieceSizes>;

const headline = Object.fromEntries(
	Object.entries(headlineAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<HeadlineSizes>;

const body = Object.fromEntries(
	Object.entries(bodyAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
) as TypographyApi<BodySizes>;

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
