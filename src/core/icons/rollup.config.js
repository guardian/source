import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".ts", ".tsx"];

module.exports = {
	input: "index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "cjs",
			globals: {
				react: "React",
			},
		},
		{
			file: "dist/index.esm.js",
			format: "esm",
			globals: {
				react: "React",
			},
		},
	],
	external: ["react"],
	plugins: [babel({ extensions }), resolve({ extensions })],
};
