import { palette } from "@guardian/src-foundations"
import { Appearance } from "./types"

const storybookBackgrounds: {
	[key in Appearance]: {
		name: string
		value: string
	}
} = {
	light: { name: "light", value: palette.neutral[100] },
	blue: { name: "blue", value: palette.brand.main },
	yellow: { name: "yellow", value: palette.brandYellow.main },
	"reader revenue blue": {
		name: "reader revenue blue",
		value: palette.brand.main,
	},
	"reader revenue yellow": {
		name: "reader revenue yellow",
		value: palette.brandYellow.main,
	},
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
