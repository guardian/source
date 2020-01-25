import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

const extensions = [".ts", ".tsx"]
const plugins = [babel({ extensions }), resolve({ extensions })]

const folders = ["accessibility", "mq", "palette", "themes", "typography"].map(
	folder => ({
		input: `src/${folder}/index.ts`,
		output: [
			{
				file: `${folder}/index.js`,
				format: "cjs",
			},
		],
		plugins,
		external: ["@guardian/src-foundations"],
	}),
)

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
	...folders,
]
