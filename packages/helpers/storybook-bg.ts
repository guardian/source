import { palette } from "@guardian/src-foundations"
import { ThemeName } from "./types"

const storybookBackgrounds: {
	[key in ThemeName]: {
		name: ThemeName
		value: string
	}
} = {
	default: { name: "default", value: palette.background.primary },
	brand: { name: "brand", value: palette.background.brand.primary },
	brandAlt: {
		name: "brandAlt",
		value: palette.background.brandAlt.primary,
	},
	// continue to expose legacy theme names
	light: { name: "light", value: palette.background.primary },
	brandYellow: {
		name: "brandYellow",
		value: palette.background.brandYellow.primary,
	},
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
