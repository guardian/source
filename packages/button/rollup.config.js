import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

module.exports = {
	input: "button.jsx",
	output: {
		file: "dist/button.js",
		format: "cjs"
	},
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [
		babel(),
		resolve({
			extensions: [".js", ".jsx"]
		}),
		commonjs({})
	]
};
