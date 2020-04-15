const execa = require("execa")
const { paths, getComponentPaths } = require("./paths")

const build = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "build"], {
		stdio: "inherit",
	})
}

const { foundations, svgs, helpers, coreComponents } = paths

// Build these packages in the specified order
const prioritisedPackages = [
	foundations,
	helpers,
	svgs,
	`${coreComponents}/inline-error`,
]

// Build these packages in parallel
const otherPackages = getComponentPaths().then(paths =>
	paths.filter(path => !prioritisedPackages.includes(path)),
)

prioritisedPackages
	.reduce(
		(prev, curr) =>
			prev
				.then(() => build(curr))
				.catch(err =>
					Promise.reject("Error building prioritised package:", err),
				),
		Promise.resolve(),
	)
	.then(() =>
		otherPackages.then(packages =>
			Promise.all(packages.map(dir => build(dir))).catch(err =>
				Promise.reject("Error building other packages:", err),
			),
		),
	)
	.catch(err => {
		console.log("***BUILD FAILED***\n", err)

		process.exit(1)
	})
