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

// heavily depended on, publish these first
const priority0Packages = [foundations, svgs]

// somewhat depended on
const priority1Packages = [helpers]

// somewhat depended on
// TODO: try to refactor!
const priority2Packages = [`${coreComponents}/inline-error`]

// not depended on
const priority3Packages = getComponentPaths().then(paths =>
	paths.filter(path => !priority2Packages.includes(path)),
)

Promise.all(priority0Packages.map(dir => publish(dir)))
	.catch(err => console.log("Error publishing priority 0 packages:", err))
	.then(() => Promise.all(priority1Packages.map(dir => publish(dir))))
	.catch(err => console.log("Error publishing priority 1 packages:", err))
	.then(() => Promise.all(priority2Packages.map(dir => publish(dir))))
	.catch(err => console.log("Error publishing priority 2 packages:", err))
	.then(() =>
		priority3Packages.then(packages => {
			packages.forEach(package => {
				if (!package) return

				publish(package).catch(err =>
					console.log("Error publishing priority 3 package:", err),
				)
			})
		}),
	)
