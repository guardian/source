const path = require("path")
module.exports = ({ config, mode }) => {
	//Get TypeScript working via babel preset
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("babel-loader"),
		options: {
			presets: [
				"@babel/preset-env",
				"@babel/preset-typescript",
				"@emotion/babel-preset-css-prop",
			],
		},
	})
	config.resolve.extensions.push(".ts", ".tsx")
	config.resolve.alias = {
		"@guardian/src-foundations": "@guardian/src-foundations/src",
	}

	return config
}
