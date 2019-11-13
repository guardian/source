import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/flex.js",
			format: "cjs",
			sourceMap: true,
		},
		{
			file: "dist/flex.esm.js",
			format: "esm",
			sourceMap: true,
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
