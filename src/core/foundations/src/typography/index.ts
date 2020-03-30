import {
	titlepiece as titlepieceAsObj,
	headline as headlineAsObj,
	body as bodyAsObj,
	textSans as textSansAsObj,
} from "./api"
import { objectStylesToString } from "./object-styles-to-string"
import {
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	fontMapping,
	fontWeightMapping,
	lineHeightMapping,
} from "./data"
import {
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
	FontScaleArgs,
	FontScaleFunctionStr,
} from "./types"

const fromEntries = <Sizes>(
	entries: [keyof Sizes, FontScaleFunctionStr][],
): {
	[key in keyof Sizes]: FontScaleFunctionStr
} =>
	entries.reduce(
		(
			acc: {
				[key in keyof Sizes]: FontScaleFunctionStr
			},
			[key, value],
		) => {
			acc[key] = value

			return acc
		},
		{} as {
			[key in keyof Sizes]: FontScaleFunctionStr
		},
	)

const titlepiece = fromEntries<TitlepieceSizes>(
	Object.entries(titlepieceAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		]
	}),
)
const headline = fromEntries<HeadlineSizes>(
	Object.entries(headlineAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		]
	}),
)
const body = fromEntries<BodySizes>(
	Object.entries(bodyAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		]
	}),
)
const textSans = fromEntries<TextSansSizes>(
	Object.entries(textSansAsObj).map(([key, func]) => {
		return [
			key,
			(options?: FontScaleArgs) => objectStylesToString(func(options)),
		]
	}),
)

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
}
