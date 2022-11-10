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
	position: absolute;
	overflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */
	white-space: nowrap; /* The white-space property forces the content to render on one line. */
	width: 1px;  /* ensures content is announced by VoiceOver. */
	height: 1px; /* ensures content is announced by VoiceOver. */
	margin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */
	padding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */
	border: 0;
	clip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */
	-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */
	clip-path: inset(50%); /* clip removes any visible trace of the element */
`;
