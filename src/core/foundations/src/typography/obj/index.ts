import { titlepiece, headline, body, textSans } from "../api"
import {
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	fontMapping,
	fontWeightMapping,
	lineHeightMapping,
} from "../data"

Object.freeze(remTitlepieceSizes)
Object.freeze(remHeadlineSizes)
Object.freeze(remBodySizes)
Object.freeze(remTextSansSizes)
Object.freeze(fontMapping)
Object.freeze(fontWeightMapping)
Object.freeze(lineHeightMapping)

export {
	titlepiece,
	headline,
	body,
	textSans,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	fontMapping as fonts,
	fontWeightMapping as fontWeights,
	lineHeightMapping as lineHeights,
}
