const fontSizes = [12, 15, 17, 20, 24, 28, 34, 42, 50, 70]

const fonts = {
	titlepiece: "GT Guardian Titlepiece, Georgia, serif",
	headlineSerif:
		"GH Guardian Headline, Guardian Egyptian Web, Georgia, serif",
	bodySerif:
		"GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif",
	bodySans:
		"GuardianTextSans, Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
}

const lineHeights = [1.15, 1.35, 1.5]

const fontWeights = [300, 400, 500, 700]

// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [sport300, sport400, sport500, sport600, sport800] = colors.blue
const colors = {
	reds: [
		"#AB0613", //news-300
		"#C70000", //news-400
		"#FF5943", //news-500
		"#FFBAC8", //news-600
		"#FFF4F2", //news-800
	],
	oranges: [
		"#AB0613", //opinion-300
		"#E05E00", //opinion-400
		"#FF7F0F", //opinion-500
		"#F9B376", //opinion-600
		"#FEF9F5", //opinion-800
	],
	blues: [
		"#005689", //sport-300
		"#0084C6", //sport-400
		"#00B2FF", //sport-500
		"#90DCFF", //sport-600
		"#F1F8FC", //sport-800
		"#041F4A", //brand-300
		"#052962", //brand-400
		"#007ABC", //brand-500
		"#506991", //brand-600
		"#C1D8FC", //brand-800
	],
	browns: [
		"#6B5840", //culture-300
		"#A1845C", //culture-400
		"#EACCA0", //culture-500
		"#E7D4B9", //culture-600
		"#FBF6EF", //culture-800
	],
	pinks: [
		"#7D0068", //lifestyle-300
		"#BB3B80", //lifestyle-400
		"#FFABDB", //lifestyle-500
		"#FEC8D3", //lifestyle-600
		"#FEEEF7", //lifestyle-800
	],
	yellows: [
		"#F3C100", //highlight-300
		"#FFE500", //highlight-400
	],
	greens: [
		"#185E36",
		"#22874D", //success-400
		"#65A897", //labs-300
		"#69D1CA", //labs-400
	],
	grays: [
		"#121212", //neutral-7
		"#333333", //neutral-20
		"#767676", //neutral-46
		"#999999", //neutral-60
		"#DCDCDC", //neutral-86
		"#EDEDED", //neutral-93
		"#F6F6F6", //neutral-97
		"#FFFFFF", //neutral-100
	],
}

const space = [0, 4, 8, 12, 20, 24, 36, 48, 96]

const size = [24, 36, 44]

const breakpoints = [740, 980, 1140, 1300]

// Diverges from https://system-ui.com
// At these widths, there are tweaks to the
// fluid grid on mobile devices
const tweakpoints = [320, 375, 480, 660]

const transitions = [
	".2s cubic-bezier(.64, .57, .67, 1.53)",
	".3s ease-in-out",
	".65s ease-in-out",
]

export {
	fontSizes,
	fonts,
	lineHeights,
	fontWeights,
	colors,
	space,
	size,
	breakpoints,
	tweakpoints,
	transitions,
}
