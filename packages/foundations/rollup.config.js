import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

const extensions = [".ts", ".tsx"]
const plugins = [babel({ extensions }), resolve({ extensions })]

module.exports = [
	{
		input: "src/index.ts",
		output: [
			{
				file: "foundations.js",
				format: "cjs",
			},
			{
				file: "foundations.esm.js",
				format: "esm",
			},
		],
		plugins,
	},
	{
		input: "src/mq/index.ts",
		output: [
			{
				file: "mq.js",
				format: "cjs",
			},
		],
		plugins,
		external: ["@guardian/src-foundations"],
	},
	{
		input: "src/accessibility/index.ts",
		output: [
			{
				file: "accessibility.js",
				format: "cjs",
			},
		],
		plugins,
		external: ["@guardian/src-foundations"],
	},
]
