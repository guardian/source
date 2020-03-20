import { titlepiece, headline, body, textSans } from "../api"
import {
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	fontMapping,
	fontWeightMapping,
	lineHeightMapping,
} from "../data"

Object.freeze(titlepieceSizes)
Object.freeze(headlineSizes)
Object.freeze(bodySizes)
Object.freeze(textSansSizes)
Object.freeze(fontMapping)
Object.freeze(fontWeightMapping)
Object.freeze(lineHeightMapping)

export {
	titlepiece,
	headline,
	body,
	textSans,
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	fontMapping as fonts,
	fontWeightMapping as fontWeights,
	lineHeightMapping as lineHeights,
}
