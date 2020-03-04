import { space as _space } from "./theme"

const rootPixelFontSize = 16

const space = {
	1: _space[1],
	2: _space[2],
	3: _space[3],
	4: _space[4],
	5: _space[5],
	6: _space[6],
	9: _space[7],
	12: _space[8],
	24: _space[9],
}

const pxToRem = (px: number): string => `${px / rootPixelFontSize}rem`

const remSpace: { [K in keyof (typeof space)]: string } = {
	1: pxToRem(space[1]),
	2: pxToRem(space[2]),
	3: pxToRem(space[3]),
	4: pxToRem(space[4]),
	5: pxToRem(space[5]),
	6: pxToRem(space[6]),
	9: pxToRem(space[9]),
	12: pxToRem(space[12]),
	24: pxToRem(space[24]),
}

export { space, remSpace }
