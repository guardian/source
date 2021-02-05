import { border } from '@guardian/src-foundations/palette';

const visuallyHidden = `
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	top: 0;
	left: 0;
`;

const focusHalo = `
	outline: 0;
	html:not(.src-focus-disabled) & {
		box-shadow: 0 0 0 5px ${border.focusHalo};
	}
`;

const descriptionId = (id: string) => `${id}_description`;

let sourceIdIndex = 0;

const generateSourceId = () => `src-component-${sourceIdIndex++}`;

export { visuallyHidden, focusHalo, descriptionId, generateSourceId };
