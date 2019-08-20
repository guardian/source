import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

module.exports = {
	input: "button.tsx",
	output: {
		file: "dist/button.js",
		format: "cjs"
	},
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [babel({ extensions }), resolve({ extensions }), commonjs()]
};
