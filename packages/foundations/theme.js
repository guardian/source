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
	reds: [],
	oranges: [],
	blues: ["#041f4a", "#052962", "#506991"],
	browns: [],
	pinks: [],
	greens: [],
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

// Note: our `space` deviates from system-ui.com,
// which doesn't distinguish between vertical and
// horizontal spacing
const space = {
	gutter: [0, 5, 10, 20],
	rhythm: [0, 6, 12, 24]
};

const size = [24, 36, 42];

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
	transitions
};
