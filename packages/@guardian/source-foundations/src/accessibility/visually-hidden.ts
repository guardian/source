/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-visuallyhidden--page)
 *
 * CSS rules that hide something from sight while still being available to screen readers.
 *
 * @see https://webaim.org/techniques/css/invisiblecontent/
 * @see https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
 * @see https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
 */
export const visuallyHidden = `
	position: absolute !important;
	overflow: hidden !important; /* gets rid of horizontal scrollbar that appears in some circumstances */
	white-space: nowrap !important; /* The white-space property forces the content to render on one line. */
	width: 1px !important;  /* ensures content is announced by VoiceOver. */
	height: 1px !important; /* ensures content is announced by VoiceOver. */
	margin: -1px !important; /* hide or clip content that does not fit into a 1-pixel visible area. */
	padding: 0 !important; /* hide or clip content that does not fit into a 1-pixel visible area. */
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* clip removes any visible trace of the element */
	-webkit-clip-path: inset(50%) !important; /* clip removes any visible trace of the element */
	clip-path: inset(50%) !important; /* clip removes any visible trace of the element */
`;
