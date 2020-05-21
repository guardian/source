import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

const extensions = [".ts", ".tsx"]
const plugins = [babel({ extensions }), resolve({ extensions })]
const folders = [
	"accessibility",
	"mq",
	"palette",
	"size",
	"themes",
	"typography",
	"typography/obj",
	"utils",
]

const esmFolders = folders.map(folder => ({
	input: `src/${folder}/index.ts`,
	output: [
		{
			file: `${folder}/index.js`,
			format: "esm",
		},
	],
	plugins,
	external: [
		"@guardian/src-foundations",
		"@guardian/src-foundations/palette",
	],
}))

const cjsFolders = folders.map(folder => ({
	input: `src/${folder}/index.ts`,
	output: [
		{
			file: `${folder}/cjs/index.js`,
			format: "cjs",
			paths: {
				"@guardian/src-foundations/palette":
					"@guardian/src-foundations/palette/cjs",
			},
		},
	],
	plugins,
	external: [
		"@guardian/src-foundations",
		"@guardian/src-foundations/palette",
	],
}))

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
	...esmFolders,
	...cjsFolders,
]
