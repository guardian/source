import { palette } from "@guardian/src-foundations"
import { ThemeName } from "./types"

const storybookBackgrounds: {
	[key in ThemeName]: {
		name: ThemeName
		value: string
	}
} = {
	light: { name: "light", value: palette.neutral[100] },
	brand: { name: "brand", value: palette.brand.main },
	brandYellow: { name: "brandYellow", value: palette.brandYellow.main },
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
