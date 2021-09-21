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

const fromEntries = <Sizes>(
	entries: Array<[keyof Sizes, FontScaleFunctionStr]>,
): {
	[key in keyof Sizes]: FontScaleFunctionStr;
} =>
	entries.reduce<{
		[key in keyof Sizes]: FontScaleFunctionStr;
	}>(
		(
			acc: {
				[key in keyof Sizes]: FontScaleFunctionStr;
			},
			[key, value],
		) => {
			acc[key] = value;

			return acc;
		},
		{},
	);

const titlepiece = fromEntries<TitlepieceSizes>(
	Object.entries(titlepieceAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
);
const headline = fromEntries<HeadlineSizes>(
	Object.entries(headlineAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
);
const body = fromEntries<BodySizes>(
	Object.entries(bodyAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
);
const textSans = fromEntries<TextSansSizes>(
	Object.entries(textSansAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		];
	}),
);

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
