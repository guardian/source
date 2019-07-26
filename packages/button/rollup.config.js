import jsx from "rollup-plugin-jsx";

module.exports = {
	input: "button.jsx",
	output: {
		file: "dist/button.js",
		format: "cjs"
	},
	plugins: [jsx({ factory: "React.createElement" })]
};
