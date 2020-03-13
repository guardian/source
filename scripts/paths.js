const path = require("path")
const fs = require("fs")
const { promisify } = require("util")

const readdirP = promisify(fs.readdir)
const statP = promisify(fs.stat)

const root = path.join(__dirname, "..")
const foundations = path.join(__dirname, "../src/core/foundations")
const svgs = path.join(__dirname, "../src/core/svgs")
const utilities = path.join(__dirname, "../src/core/utilities")
const components = path.join(__dirname, "../src/core/components")

const isDirectory = path => statP(path).then(stats => stats.isDirectory())

const getComponentPaths = () =>
	readdirP(components)
		.then(componentDirs =>
			Promise.all(
				componentDirs.map(componentDirName =>
					isDirectory(`${components}/${componentDirName}`).then(
						isDirectory => {
							if (!isDirectory) return Promise.resolve()

							return `${components}/${componentDirName}`
						},
					),
				),
			),
		)
		.then(paths => Promise.resolve(paths.filter(path => !!path)))

module.exports.paths = {
	root,
	foundations,
	svgs,
	utilities,
	components,
}
module.exports.getComponentPaths = getComponentPaths
