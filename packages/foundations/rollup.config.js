import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

const extensions = [".ts", ".tsx"]
const plugins = [babel({ extensions }), resolve({ extensions })]

module.exports = [
	{
		input: "index.ts",
		output: [
			{
				file: "dist/foundations.js",
				format: "cjs",
			},
			{
				file: "dist/foundations.esm.js",
				format: "esm",
			},
		],
		plugins,
	},
	{
		input: "mq.ts",
		output: [
			{
				file: "mq/index.js",
				format: "cjs",
			},
		],
		plugins,
	},
]
