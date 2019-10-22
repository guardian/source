import { palette } from "@guardian/src-foundations"
import { Appearance } from "./types"

const storybookBackgrounds: {
	[key in Appearance]: {
		name: string
		value: string
	}
} = {
	light: { name: "light", value: palette.neutral[100] },
	dark: { name: "dark", value: palette.neutral[10] },
	blue: { name: "blue", value: palette.brand.main },
	yellow: { name: "yellow", value: palette.yellow.main },
	"reader revenue": { name: "reader revenue", value: palette.brand.main },
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
