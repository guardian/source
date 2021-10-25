// FYI
// packages/@guardian/src-foundations/src/space.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/space.ts

import { pxToRem } from './utils/px-to-rem';

/**
 * Space
 *
 * The following units can be applied to margin or padding properties, vertically or horizontally.
 * @see https://theguardian.design/2a1e5182b/p/449bd5-space
 *
 * Space scale
 * 1 -> 4px
 * 2 -> 8px
 * 3 -> 12px
 * 4 -> 16px
 * 5 -> 20px
 * 6 -> 24px
 * 9 -> 36px
 * 12 -> 48px
 * 24 -> 96px
 */
export const space = {
	1: 4,
	2: 8,
	3: 12,
	4: 16,
	5: 20,
	6: 24,
	9: 36,
	12: 48,
	24: 96,
} as const;

/* TODO: this should be exposed as a number instead of a string,
   so consumers can perform calculations on it */
export const remSpace: { [K in keyof typeof space]: string } = {
	1: `${pxToRem(space[1])}rem`,
	2: `${pxToRem(space[2])}rem`,
	3: `${pxToRem(space[3])}rem`,
	4: `${pxToRem(space[4])}rem`,
	5: `${pxToRem(space[5])}rem`,
	6: `${pxToRem(space[6])}rem`,
	9: `${pxToRem(space[9])}rem`,
	12: `${pxToRem(space[12])}rem`,
	24: `${pxToRem(space[24])}rem`,
};
