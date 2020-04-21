import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/grid.js",
			format: "cjs",
			sourceMap: true,
			paths: {
				"@guardian/src-foundations/mq":
					"@guardian/src-foundations/mq/cjs",
			},
		},
		{
			file: "dist/grid.esm.js",
			format: "esm",
			sourceMap: true,
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		"@guardian/src-foundations/mq",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
