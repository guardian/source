import {
	background,
	brandBackground,
	brandAltBackground,
} from "@guardian/src-foundations/palette"
import { ThemeName } from "./types"

const storybookBackgrounds: {
	[key in ThemeName]: {
		name: ThemeName
		value: string
	}
} = {
	default: { name: "default", value: background.primary },
	brand: { name: "brand", value: brandBackground.primary },
	brandAlt: {
		name: "brandAlt",
		value: brandAltBackground.primary,
	},
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
