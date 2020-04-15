const execa = require("execa")
const { version } = require("../package.json")
const { paths, getComponentPaths } = require("./paths")

const publish = dir => {
	return execa(
		"yarn",
		["--cwd", `${dir}`, "run", "publish:public", "--new-version", version],
		{
			stdio: "inherit",
		},
	)
}

const { foundations, svgs, helpers, coreComponents } = paths

// Publish these packages in the specified order
const prioritisedPackages = [
	foundations,
	helpers,
	svgs,
	`${coreComponents}/inline-error`,
]

// Publish these packages in parallel
const otherPackages = getComponentPaths().then(paths =>
	paths.filter(path => !prioritisedPackages.includes(path)),
)

prioritisedPackages
	.reduce(
		(prev, curr) =>
			prev
				.then(() => publish(curr))
				.catch(err =>
					Promise.reject(
						"Error publishing prioritised package:",
						err,
					),
				),
		Promise.resolve(),
	)
	.then(() =>
		otherPackages.then(packages =>
			Promise.all(packages.map(dir => publish(dir))).catch(err =>
				Promise.reject("Error publishing other packages:", err),
			),
		),
	)
	.catch(err => {
		console.log("***PUBLISH FAILED***\n", err)

		process.exit(1)
	})
