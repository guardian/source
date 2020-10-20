import {
	background,
	brandBackground,
	brandAltBackground,
} from "@guardian/src-foundations/palette"
import { ThemeName } from "./types"

type Background = ThemeName | "inverse"

const storybookBackgrounds: {
	[key in Background]: {
		name: Background
		value: string
	}
} = {
	inverse: { name: "inverse", value: background.inverse },
	default: { name: "default", value: background.primary },
	brand: { name: "brand", value: brandBackground.primary },
	brandAlt: {
		name: "brandAlt",
		value: brandAltBackground.primary,
	},
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
