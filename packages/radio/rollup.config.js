import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

module.exports = {
	input: "radio.jsx",
	output: {
		file: "dist/radio.js",
		format: "cjs"
	},
	external: ["react", "@emotion/core", "@emotion/css"],
	plugins: [
		babel(),
		resolve({
			extensions: [".js", ".jsx"]
		})
	]
};
