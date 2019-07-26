import babel from "rollup-plugin-babel";

module.exports = {
	input: "button.jsx",
	output: {
		file: "dist/button.js",
		format: "cjs"
	},
	plugins: [babel()]
};
