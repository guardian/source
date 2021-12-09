import { border } from '../colour/palette';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-accessibility-helpers--page#focus-halo)
 *
 * Provides a clear focus state to support keyboard navigation.
 */
export const focusHalo = `
 outline: 0;
 html:not(.src-focus-disabled) & {
	 box-shadow: 0 0 0 5px ${border.focusHalo};
 }
`;
