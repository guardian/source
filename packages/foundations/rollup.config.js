import babel from "rollup-plugin-babel";

module.exports = {
	input: "index.js",
	output: {
		file: "dist/foundations.js",
		format: "cjs"
	},
	plugins: [babel()]
};
