import { palette } from "@guardian/src-foundations"

const storybookBackgrounds = {
	light: { name: "light", value: palette.neutral[100] },
	dark: { name: "dark", value: palette.neutral[10] },
	blue: { name: "blue", value: palette.brand.main },
	yellow: { name: "yellow", value: palette.yellow.main },
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
