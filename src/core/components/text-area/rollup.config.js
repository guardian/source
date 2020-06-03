import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/text-area.js",
			format: "cjs",
			paths: {
				"@guardian/src-foundations/themes":
					"@guardian/src-foundations/themes/cjs",
				"@guardian/src-foundations/typography":
					"@guardian/src-foundations/typography/cjs",
				"@guardian/src-foundations/accessibility":
					"@guardian/src-foundations/accessibility/cjs",
			},
		},
		{
			file: "dist/text-area.esm.js",
			format: "esm",
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		"@guardian/src-foundations/accessibility",
		"@guardian/src-foundations/themes",
		"@guardian/src-foundations/typography",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
