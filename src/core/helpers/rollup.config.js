import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.ts",
	output: [
		{
			file: "dist/helpers.js",
			format: "cjs",
			sourceMap: true,
			paths: {
				"@guardian/src-foundations/palette":
					"@guardian/src-foundations/palette/cjs",
			},
		},
		{
			file: "dist/helpers.esm.js",
			format: "esm",
			sourceMap: true,
		},
	],
	external: ["@guardian/src-foundations/palette"],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
