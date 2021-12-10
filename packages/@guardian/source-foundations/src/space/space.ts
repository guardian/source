import { pxToRem } from '../utils/px-to-rem';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-space--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/05f835-space)
 *
 * Can be applied to margin or padding properties, vertically or horizontally.
 *
 ** `space[1]` -> 4px
 ** `space[2]` -> 8px
 ** `space[3]` -> 12px
 ** `space[4]` -> 16px
 ** `space[5]` -> 20px
 ** `space[6]` -> 24px
 ** `space[9]` -> 36px
 ** `space[12]` -> 48px
 ** `space[24]` -> 96px
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

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-space--page) •
 * [Design System](https://theguardian.design/2a1e5182b/p/05f835-space)
 *
 * Can be applied to margin or padding properties, vertically or horizontally.
 *
 ** `remSpace[1]` -> 0.25rem
 ** `remSpace[2]` -> 0.5rem
 ** `remSpace[3]` -> 0.75rem
 ** `remSpace[4]` -> 1rem
 ** `remSpace[5]` -> 1.25rem
 ** `remSpace[6]` -> 1.5rem
 ** `remSpace[9]` -> 2.25rem
 ** `remSpace[12]` -> 3rem
 ** `remSpace[24]` -> 6rem
 */
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

/* TODO: this should be exposed as a number instead of a string,
   so consumers can perform calculations on it */
