import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import {
	cjsPaths,
	submodulePaths,
} from "../../../../scripts/foundations-submodules"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/select.js",
			format: "cjs",
			paths: cjsPaths,
		},
		{
			file: "dist/select.esm.js",
			format: "esm",
		},
	],
	external: [
		"react",
		"@emotion/core",
		"@emotion/css",
		"@guardian/src-foundations",
		...submodulePaths,
	],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
