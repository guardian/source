/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-visuallyhidden--page)
 *
 * CSS rules that hide something from sight while still being available to screen readers.
 */

export const visuallyHidden = `
	position: absolute !important;
	overflow: hidden !important;
	white-space: nowrap !important;
	width: 1px !important;
	height: 1px !important;
	margin: -1px !important;
	padding: 0 !important;
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	-webkit-clip-path: inset(50%) !important;
	clip-path: inset(50%) !important;
`;
