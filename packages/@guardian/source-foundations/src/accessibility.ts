// FYI
// src/core/foundations/src/accessibility.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/accessibility.ts

import { border } from './palette';

export const visuallyHidden = `
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	top: 0;
	left: 0;
`;

export const focusHalo = `
	outline: 0;
	html:not(.src-focus-disabled) & {
		box-shadow: 0 0 0 5px ${border.focusHalo};
	}
`;

export const descriptionId = (id: string): string => `${id}_description`;

let sourceIdIndex = 0;

export const generateSourceId = (): string =>
	`src-component-${sourceIdIndex++}`;
