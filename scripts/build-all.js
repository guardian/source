const execa = require("execa")
const { paths, getComponentPaths } = require("./paths")

const build = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "build"], {
		stdio: "inherit",
	})
}

const { foundations, svgs, helpers, components } = paths

// heavily depended on, build these first
const priority0Packages = [foundations, svgs]

// somewhat depended on
const priority1Packages = [helpers]

// somewhat depended on
// TODO: try to refactor!
const priority2Packages = [`${components}/inline-error`]

// not depended on
const priority3Packages = getComponentPaths().then(paths =>
	paths.filter(path => !priority2Packages.includes(path)),
)

Promise.all(priority0Packages.map(dir => build(dir)))
	.catch(err => console.log("Error building priority 0 packages:", err))
	.then(() => Promise.all(priority1Packages.map(dir => build(dir))))
	.catch(err => console.log("Error building priority 1 packages:", err))
	.then(() => Promise.all(priority2Packages.map(dir => build(dir))))
	.catch(err => console.log("Error building priority 2 packages:", err))
	.then(() =>
		priority3Packages.then(packages => {
			packages.forEach(package => {
				if (!package) return

				build(package).catch(err =>
					console.log("Error building priority 3 package:", err),
				)
			})
		}),
	)
