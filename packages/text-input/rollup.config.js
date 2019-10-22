import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/text-input.js",
			format: "cjs",
		},
		{
			file: "dist/text-input.esm.js",
			format: "esm",
		},
	],
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
