import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/accordion.js",
			format: "cjs",
			paths: {
				"@guardian/src-foundations/palette":
					"@guardian/src-foundations/palette/cjs",
				"@guardian/src-foundations/typography":
					"@guardian/src-foundations/typography/cjs",
				"@guardian/src-foundations/accessibility":
					"@guardian/src-foundations/accessibility/cjs",
			},
		},
		{
			file: "dist/accordion.esm.js",
			format: "esm",
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		"@guardian/src-foundations/palette",
		"@guardian/src-foundations/typography",
		"@guardian/src-foundations/accessibility",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
