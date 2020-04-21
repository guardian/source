import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/lines.js",
			format: "cjs",
			paths: {
				"@guardian/src-foundations/palette":
					"@guardian/src-foundations/palette/cjs",
			},
		},
		{
			file: "dist/lines.esm.js",
			format: "esm",
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		"@guardian/src-foundations/palette",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
