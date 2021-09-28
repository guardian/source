// FYI
// src/core/foundations/src/utils/resets.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/utils/resets.ts

import { background, text } from '../palette';

////////////////////////////
// Element specific resets
////////////////////////////
// TODO: bring element-specific resets into defaults. They can then be removed
// from individual components

const legend = `
	padding: 0;
`;

const fieldset = `
	border: 0;
	padding: 0;
	margin: 0;
`;

// remove styling of invalid input elements that gets applied in Firefox
const input = `
	&:invalid {
		box-shadow: none;
	}
`;

////////////////////////////
// Default resets
////////////////////////////
// TODO: currently including this is optional but one day will be required
// see https://github.com/orgs/guardian/teams/client-side-infra/discussions/17
const defaults = `
	*, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
        text-rendering: optimizeLegibility;
        font-feature-settings: 'kern';
        font-kerning: normal; /* Safari 7+, Firefox 24+, Chrome 33(?)+, Opera 21 */
        font-variant-ligatures: common-ligatures;
    }
    body {
        background-color: ${background.primary};
        color: ${text.primary};
    }
    em {
        font-style: italic;
    }
`;

////////////////////////////
// Meyer resets
////////////////////////////
// Originally sourced from https://github.com/shannonmoeller/reset-css
// and https://meyerweb.com/eric/tools/css/reset/
const meyer = `
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
	}
	menu, ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export const resets = {
	legend,
	fieldset,
	input,
	defaults,
	meyer,
};
