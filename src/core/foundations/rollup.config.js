import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import {
	submodules,
	cjsPaths,
	submodulePaths,
} from "../../../scripts/foundations-submodules";

const extensions = [".ts", ".tsx"];
const plugins = [babel({ extensions }), resolve({ extensions })];

const esmFolders = submodules.map((folder) => ({
	input: `src/${folder}/index.ts`,
	output: [
		{
			file: `${folder}/index.js`,
			format: "esm",
		},
	],
	plugins,
	external: ["@guardian/src-foundations", ...submodulePaths],
}));

const cjsFolders = submodules.map((folder) => ({
	input: `src/${folder}/index.ts`,
	output: [
		{
			file: `${folder}/cjs/index.js`,
			format: "cjs",
			paths: cjsPaths,
		},
	],
	plugins,
	external: ["@guardian/src-foundations", ...submodulePaths],
}));

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
];
