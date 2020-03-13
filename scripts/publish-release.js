const execa = require("execa")
const { version } = require("../package.json")
const { paths, getComponentPaths } = require("./paths")

const build = dir => {
	return execa(
		"yarn",
		[
			"--cwd",
			`${dir}`,
			"run",
			"publish:public",
			"--",
			"--new-version",
			version,
		],
		{
			stdio: "inherit",
		},
	)
}

const { foundations, svgs, components } = paths

// heavily depended on, build these first
const highPriorityPackages = [foundations]

// somewhat depended on
// TODO: try to refactor!
const mediumPriorityPackages = [`${components}/inline-error`]

// not depended on
const lowPriorityPackages = getComponentPaths().then(paths =>
	paths.filter(path => !mediumPriorityPackages.includes(path)),
)

Promise.all(highPriorityPackages.map(dir => build(dir)))
	.catch(err => console.log("Error publishing high priority packages:", err))
	.then(() => Promise.all(mediumPriorityPackages.map(dir => build(dir))))
	.catch(err =>
		console.log("Error publishing medium priority packages:", err),
	)
	.then(() =>
		lowPriorityPackages.then(packages => {
			packages.forEach(package => {
				if (!package) return

				build(package).catch(err =>
					console.log("Error publishing low priority package:", err),
				)
			})
		}),
	)
