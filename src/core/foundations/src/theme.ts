// The theme file is based on the specification at https://system-ui.com/theme
//
// WARNING!
//
// This is an internal file to be consumed by the src-foundations package only
//
// It contains the lowest level primitives for the entire design system.
// Be very, *very* careful when changing the values in here, changes are likely
// to have a wide-ranging impact across all applications
//
// DANGEROUS CHANGES
//
// The following will almost certainly require further changes to src-foundations.
// They will likely also impact every application that consumes src-foundations
//
// - Updating a value
// - Removing a value
// - Inserting a value into an array
//
// SAFE CHANGES
//
// - Pushing a value onto the end of an array
// - Exporting a new object or array

const fontSizes = [12, 14, 15, 17, 20, 24, 28, 34, 42, 50, 70];

const fonts = {
	titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
	headlineSerif:
		'GH Guardian Headline, Guardian Egyptian Web, Georgia, serif',
	bodySerif:
		'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
	bodySans:
		'GuardianTextSans, Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

const lineHeights = [1.15, 1.35, 1.5];

const fontWeights = [300, 400, 500, 700];

export { fontSizes, fonts, lineHeights, fontWeights };
