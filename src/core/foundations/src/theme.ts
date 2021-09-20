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

// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [sport300, sport400, sport500, sport600, sport800] = colors.blue
const colors = {
	reds: [
		'#660505', //news-100
		'#8B0000', //news-200
		'#AB0613', //news-300
		'#C70000', //news-400, error-400
		'#FF5943', //news-500
		'#FF9081', //news-550, error-500
		'#FFBAC8', //news-600
		'#FFF4F2', //news-800
	],
	oranges: [
		'#672005', //opinion-100
		'#8D2700', //opinion-200
		'#C74600', //opinion-300
		'#E05E00', //opinion-400
		'#FF7F0F', //opinion-500
		'#FF9941', //opinion-550
		'#F9B376', //opinion-600
		'#FEF9F5', //opinion-800
	],
	blues: [
		'#003C60', //sport-100
		'#004E7C', //sport-200
		'#005689', //sport-300
		'#0077B6', //sport-400
		'#00B2FF', //sport-500
		'#90DCFF', //sport-600
		'#F1F8FC', //sport-800
		'#001536', //brand-100
		'#041F4A', //brand-300
		'#052962', //brand-400
		'#007ABC', //brand-500
		'#506991', //brand-600
		'#C1D8FC', //brand-800
		'#0093E0', //focus-400
	],
	browns: [
		'#2B2625', //culture-50
		'#3E3323', //culture-100
		'#574835', //culture-200
		'#6B5840', //culture-300
		'#866D50', //culture-350
		'#A1845C', //culture-400
		'#EACCA0', //culture-500
		'#E7D4B9', //culture-600
		'#EFE8DD', //culture-700
		'#FBF6EF', //culture-800
	],
	pinks: [
		'#510043', //lifestyle-100
		'#650054', //lifestyle-200
		'#7D0068', //lifestyle-300
		'#BB3B80', //lifestyle-400
		'#FFABDB', //lifestyle-500
		'#FEC8D3', //lifestyle-600
		'#FEEEF7', //lifestyle-800
	],
	yellows: [
		'#F3C100', //brandAlt-200
		'#FFD900', //brandAlt-300
		'#FFE500', //brandAlt-400
	],
	greens: [
		'#185E36', //green-300
		'#22874D', //green-400, success-400
		'#58D08B', //green-500, success-500
		'#4B8878', //labs-200
		'#65A897', //labs-300
		'#69D1CA', //labs-400
	],
	grays: [
		'#000000', //neutral-0
		'#121212', //neutral-7
		'#1A1A1A', //neutral-10
		'#333333', //neutral-20
		'#707070', //neutral-46
		'#999999', //neutral-60
		'#DCDCDC', //neutral-86
		'#EDEDED', //neutral-93
		'#F6F6F6', //neutral-97
		'#FFFFFF', //neutral-100
		'#222527', //specialReport-100
		'#303538', //specialReport-200
		'#3F464A', //specialReport-300
		'#595C5F', //specialReport-400
		'#9DA0A2', //specialReport-450
		'#ABC2C9', //specialReport-500
		'#E4E5E8', //specialReport-700
		'#EFF1F2', //specialReport-800
	],
};

const space = [0, 4, 8, 12, 16, 20, 24, 36, 48, 96];

const size = [24, 36, 44];

const transitions = [
	'.2s cubic-bezier(.64, .57, .67, 1.53)',
	'.3s ease-in-out',
	'.65s ease-in-out',
];

export {
	fontSizes,
	fonts,
	lineHeights,
	fontWeights,
	colors,
	space,
	size,
	transitions,
};
