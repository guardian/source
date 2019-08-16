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

const space = [3, 6, 12, 18, 24, 30, 36, 42, 60, 96];

const size = [24, 36, 42];

const breakpoints = [375, 740, 980, 1140, 1300];

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
	transitions
};
