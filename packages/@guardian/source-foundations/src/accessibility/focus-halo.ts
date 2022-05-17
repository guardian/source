import { palette } from '../colour/palette';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-focushalo--page)
 *
 * CSS rules that provide a clear visual focus state to support keyboard navigation.
 */
export const focusHalo = `
 outline: 0;
 html:not(.src-focus-disabled) & {
	 box-shadow: 0 0 0 5px ${palette.focus[400]};
 }
`;

export const focusHaloSpaced = `
 outline: 0;
 html:not(.src-focus-disabled) & {
	outline: 5px solid ${palette.focus[400]};
	outline-offset: 3px;
 }
`;
