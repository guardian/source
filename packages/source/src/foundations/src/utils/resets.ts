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

export const resets = {
	legend,
	fieldset,
	input,
	defaults,
};
