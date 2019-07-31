import babel from "rollup-plugin-babel";

module.exports = {
	input: "dropdown.jsx",
	output: {
		file: "dist/dropdown.js",
		format: "cjs"
	},
	plugins: [babel()]
};
