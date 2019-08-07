const fontSizes = [12, 15, 17, 20, 24, 28, 34, 42, 50, 70];

const fonts = {
	headlineSerif: `GH Guardian Headline, Georgia, serif`,
	bodySerif: `GuardianTextEgyptian, Georgia, serif`,
	bodySans: `GuardianTextSans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif`
};

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

colors.brand = {
	dark: this.blues[0],
	main: this.blues[1],
	pastel: this.blues[2]
};

colors.neutrals = {
	7: this.grays[0],
	20: this.grays[1],
	46: this.grays[2],
	60: this.grays[3],
	85: this.grays[4],
	86: this.grays[5],
	93: this.grays[6],
	97: this.grays[7],
	100: this.grays[8]
};

export { fontSizes, fonts, colors };
