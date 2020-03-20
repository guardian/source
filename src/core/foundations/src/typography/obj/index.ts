import { titlepiece, headline, body, textSans } from "../api"
import {
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	fontMapping,
	fontWeightMapping,
	lineHeightMapping,
	TypographyStyles,
	Category,
	LineHeight,
	FontWeight,
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
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
	TypographyStyles,
	Category,
	LineHeight,
	FontWeight,
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
}
