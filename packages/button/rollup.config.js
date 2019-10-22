import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const extensions = [".ts", ".tsx"]

module.exports = {
	input: "index.tsx",
	output: [
		{
			file: "dist/button.js",
			format: "cjs",
		},
		{
			file: "dist/button.esm.js",
			format: "esm",
		},
	],
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()],
}
