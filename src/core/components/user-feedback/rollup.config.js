import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/user-feedback.js",
			format: "cjs",
			sourceMap: true,
			paths: {
				"@guardian/src-foundations/themes":
					"@guardian/src-foundations/themes/cjs",
				"@guardian/src-foundations/typography":
					"@guardian/src-foundations/typography/cjs",
			},
		},
		{
			file: "dist/user-feedback.esm.js",
			format: "esm",
			sourceMap: true,
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		"@guardian/src-foundations/themes",
		"@guardian/src-foundations/typography",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
