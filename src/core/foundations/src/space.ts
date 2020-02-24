import { space as _space } from "./theme"

const rootPixelFontSize = 16

const space = {
	1: _space[1],
	2: _space[2],
	3: _space[3],
	5: _space[4],
	6: _space[5],
	9: _space[6],
	12: _space[7],
	24: _space[8],
}

const remSpace = Object.entries(space).reduce(
	(acc, [k, v]) => ({ ...acc, [k]: `${v / rootPixelFontSize}rem` }),
	{} as Record<keyof (typeof space), string>,
)

export { space, remSpace }
