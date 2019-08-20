import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".ts", ".tsx"];

module.exports = {
	input: "arrow-right-straight.tsx",
	output: [
		{
			file: "arrow-right-straight.js",
			format: "cjs",
			globals: {
				react: "React"
			}
		},
		{
			file: "arrow-right-straight.esm.js",
			format: "esm",
			globals: {
				react: "React"
			}
		}
	],
	external: ["react"],
	plugins: [babel({ extensions }), resolve({ extensions })]
};
