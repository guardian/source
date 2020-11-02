import { space as _space } from "./theme"
import { pxToRem } from "./utils"

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

/* TODO: this should be exposed as a number instead of a string,
   so consumers can perform calculations on it */
const remSpace: { [K in keyof typeof space]: string } = {
	1: `${pxToRem(space[1])}rem`,
	2: `${pxToRem(space[2])}rem`,
	3: `${pxToRem(space[3])}rem`,
	4: `${pxToRem(space[4])}rem`,
	5: `${pxToRem(space[5])}rem`,
	6: `${pxToRem(space[6])}rem`,
	9: `${pxToRem(space[9])}rem`,
	12: `${pxToRem(space[12])}rem`,
	24: `${pxToRem(space[24])}rem`,
}

export { space, remSpace }
