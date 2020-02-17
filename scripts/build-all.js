const fs = require("fs")
const execa = require("execa")
const paths = require("./paths")
const { promisify } = require("util")

const readdirP = promisify(fs.readdir)
const statP = promisify(fs.stat)

const build = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "build"], {
		stdio: "inherit",
	})
}
const isDirectory = path => statP(path).then(stats => stats.isDirectory())

const { foundations, svgs, utilities, components } = paths

// heaviy depended on, build these first
const highPriorityPackages = [foundations, svgs, utilities]

// somewhat depended on
// TODO: try to refactor!
const mediumPriorityPackages = [`${components}/inline-error`]

// not depended on
const lowPriorityPackages = readdirP(components).then(componentDirs =>
	Promise.all(
		componentDirs.map(componentDirName =>
			isDirectory(`${components}/${componentDirName}`).then(
				isDirectory => {
					if (!isDirectory) return Promise.resolve()
					if (
						mediumPriorityPackages.includes(
							`${components}/${componentDirName}`,
						)
					)
						return Promise.resolve()

					return `${components}/${componentDirName}`
				},
			),
		),
	),
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
