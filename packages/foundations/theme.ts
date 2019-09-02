const fontSizes = [12, 15, 17, 20, 24, 28, 34, 42, 50, 70];

const fonts = {
	headlineSerif: "GH Guardian Headline, Georgia, serif",
	bodySerif: "GuardianTextEgyptian, Georgia, serif",
	bodySans:
		"GuardianTextSans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
};

const lineHeights = ["1.15em", "1.35em", "1.45em"];

const fontWeights = [300, 400, 500, 700];

const colors = {
	reds: ["#ab0613", "#c70000", "#ff4e36", "#ffbac8", "#fff4f2"],
	oranges: ["#BD5318", "#E05E00", "#FF7F0F", "#F9B376", "#FEF9F5"],
	blues: [
		"#041f4a", //brand-dark
		"#052962", //brand-main
		"#506991", //brand-pastel
		"#005689", //sport-dark
		"#0084C6", //sport-main
		"#00B2FF", //sport-bright
		"#90DCFF", //sport-pastel
		"#F1F8FC" //sport-faded
	],
	yellows: ["#ffbb50", "#ffe500"],
	browns: ["#6B5840", "#A1845C", "#EACCA0", "#E7D4B9", "#FBF6EF"],
	pinks: ["#7D0068", "#BB3B80", "#FFABDB", "#FEC8D3", "#FEEEF7"],
	greens: ["#3F464A", "#65A897", "#185E36", "#22874D", "#69D1CA"],
	grays: [
		"#121212",
		"#333333",
		"#767676",
		"#999999",
		"#d9d9d9",
		"#dcdcdc",
		"#ededed",
		"#f6f6f6",
		"#ffffff"
	]
};

const space = [3, 6, 12, 18, 24, 36, 48, 96];

const size = [24, 36, 42];

const breakpoints = [740, 980, 1140, 1300];

// Diverges from https://system-ui.com
// At these widths, there are tweaks to the
// fluid grid on mobile devices
const tweakpoints = [375, 480, 660];

const transitions = [
	".2s cubic-bezier(.64, .57, .67, 1.53)",
	".45s ease-in-out",
	".65s ease-in-out"
];

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
	transitions
};
