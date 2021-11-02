// FYI
// packages/@guardian/src-foundations/src/accessibility.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/accessibility.ts

import { border } from './palette';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-accessibility-helpers--page#visually-hidden-elements)
 *
 * For elements that need to be hidden from sighted users and displayed to screen reader users.
 */
export const visuallyHidden = `
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	top: 0;
	left: 0;
`;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-accessibility-helpers--page#focus-halo)
 *
 * Provides a clear focus state to support keyboard navigation.
 */
export const focusHalo = `
	outline: 0;
	html:not(.src-focus-disabled) & {
		box-shadow: 0 0 0 5px ${border.focusHalo};
	}
`;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-accessibility-helpers--page#focus-halo)
 *
 * Takes the ID of an element and generates a new ID. This should be set as the ID of an element that describes the first element. The generated ID should also be passed to the `aria-describedby` attribute on the first element.
 *
 * @param {string} id - ID of an element
 * @returns {string} ID of an element that describes the first element
 *
 * @example
 *		<form>
 *			<input id={id} type="text" aria-describedby={descriptionId(id)} />
 *			<p class="error" id={descriptionId(id)} />
 *		</form>
 */
export const descriptionId = (id: string): string => `${id}_description`;

let sourceIdIndex = 0;

export const generateSourceId = (): string =>
	`src-component-${sourceIdIndex++}`;
