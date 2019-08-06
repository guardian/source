import babel from "rollup-plugin-babel";

module.exports = {
	input: "radio.jsx",
	output: {
		file: "dist/radio.js",
		format: "cjs"
	},
	plugins: [babel()]
};
