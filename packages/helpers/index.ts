import { palette } from "@guardian/src-foundations"

const storybookBackgrounds = {
	light: { name: "light", value: palette.neutral[100] },
	blue: { name: "blue", value: palette.brand.main },
	dark: { name: "dark", value: palette.neutral[7] },
}

Object.freeze(storybookBackgrounds)

export { storybookBackgrounds }
