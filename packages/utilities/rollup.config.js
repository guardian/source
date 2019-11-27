import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.ts",
	output: [
		{
			file: "dist/utilities.js",
			format: "cjs",
		},
		{
			file: "dist/utilities.esm.js",
			format: "esm",
		},
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
