const categories = ['color', 'size']

module.exports = {
	source: ["src/tokens/**/*.json"],
	platforms: {
		ts: {
			transformGroup: "js",
			buildPath: "dist/tokens/",
			files: [
				...categories.map(category => ({
					destination: `${category}.js`,
					format: "javascript/es6",
					filter: {
						attributes: {
							category: category
						}
					}
				})),
				...categories.map(category => ({
					destination: `${category}.d.ts`,
					format: "typescript/es6-declarations",
					filter: {
						attributes: {
							category: category
						}
					}
				}))
			]
		}
	}
};

//   files: [
//     {
//       destination: "variables.d.ts",
//       format: "typescript/module-declarations"
//     },
//     {
//       destination: "variables.js",
//       format: "javascript/es6"
//     }
//   ]
