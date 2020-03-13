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

const { foundations, svgs, components } = paths

// heavily depended on, publish these first
const highPriorityPackages = [foundations, svgs]

// somewhat depended on
// TODO: try to refactor!
const mediumPriorityPackages = [`${components}/inline-error`]

// not depended on
const lowPriorityPackages = getComponentPaths().then(paths =>
	paths.filter(path => !mediumPriorityPackages.includes(path)),
)

Promise.all(highPriorityPackages.map(dir => publish(dir)))
	.catch(err => console.log("Error publishing high priority packages:", err))
	.then(() => Promise.all(mediumPriorityPackages.map(dir => publish(dir))))
	.catch(err =>
		console.log("Error publishing medium priority packages:", err),
	)
	.then(() =>
		lowPriorityPackages.then(packages => {
			packages.forEach(package => {
				if (!package) return

				publish(package).catch(err =>
					console.log("Error publishing low priority package:", err),
				)
			})
		}),
	)
