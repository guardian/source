import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".ts", ".tsx"];

module.exports = {
	input: "index.ts",
	output: [
		{
			file: "dist/foundations.js",
			format: "cjs"
		},
		{
			file: "dist/foundations.esm.js",
			format: "esm"
		}
	],
	plugins: [babel({ extensions }), resolve({ extensions })]
};
