const execa = require("execa")
const { paths, getComponentPaths } = require("./paths")

const build = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "build"], {
		stdio: "inherit",
	})
}

const { foundations, svgs, utilities, components } = paths

// heaviy depended on, build these first
const highPriorityPackages = [foundations, svgs, utilities]

// somewhat depended on
// TODO: try to refactor!
const mediumPriorityPackages = [`${components}/inline-error`]

// not depended on
const lowPriorityPackages = getComponentPaths().then(paths =>
	paths.filter(path => !mediumPriorityPackages.includes(path)),
)

Promise.all(highPriorityPackages.map(dir => build(dir)))
	.catch(err => console.log("Error building high priority packages:", err))
	.then(() => Promise.all(mediumPriorityPackages.map(dir => build(dir))))
	.catch(err => console.log("Error building medium priority packages:", err))
	.then(() =>
		lowPriorityPackages.then(packages => {
			packages.forEach(package => {
				if (!package) return

				build(package).catch(err =>
					console.log("Error building low priority package:", err),
				)
			})
		}),
	)
