import { palette } from "@guardian/src-foundations"
import { ThemeName } from "./types"

const storybookBackgrounds: {
	[key in ThemeName]: {
		name: ThemeName
		value: string
	}
} = {
	light: { name: "light", value: palette.background.primary },
	brand: { name: "brand", value: palette.background.brand.primary },
	brandYellow: {
		name: "brandYellow",
		value: palette.background.brandYellow.primary,
	},
	mono: { name: "mono", value: palette.background.mono.primary },
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
