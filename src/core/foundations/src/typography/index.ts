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
	FontScaleArgs,
} from "./data"

const titlepiece = Object.fromEntries(
	Object.entries(titlepieceAsObj).map(([key, func]) => {
		return [
			key,
			(options: FontScaleArgs = {}) =>
				objectStylesToString(func(options), options.unit),
		]
	}),
)
const headline = Object.fromEntries(
	Object.entries(headlineAsObj).map(([key, func]) => {
		return [
			key,
			(options: FontScaleArgs = {}) =>
				objectStylesToString(func(options), options.unit),
		]
	}),
)
const body = Object.fromEntries(
	Object.entries(bodyAsObj).map(([key, func]) => {
		return [
			key,
			(options: FontScaleArgs = {}) =>
				objectStylesToString(func(options), options.unit),
		]
	}),
)
const textSans = Object.fromEntries(
	Object.entries(textSansAsObj).map(([key, func]) => {
		return [
			key,
			(options: FontScaleArgs = {}) =>
				objectStylesToString(func(options), options.unit),
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
