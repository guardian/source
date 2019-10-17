import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "inline-error.tsx",
	output: [
		{
			file: "dist/inline-error.js",
			format: "cjs",
		},
		{
			file: "dist/inline-error.esm.js",
			format: "esm",
		},
	],
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
