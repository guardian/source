const path = require("path")
const fs = require("fs")
const { promisify } = require("util")

const readdirP = promisify(fs.readdir)
const statP = promisify(fs.stat)

const root = path.join(__dirname, "..")
const foundations = path.join(__dirname, "../src/core/foundations")
const svgs = path.join(__dirname, "../src/core/svgs")
const helpers = path.join(__dirname, "../src/core/helpers")
const coreComponents = path.join(__dirname, "../src/core/components")
const editorialComponents = path.join(
	__dirname,
	"../src/editorial/web/components",
)

const isDirectory = path => statP(path).then(stats => stats.isDirectory())

const getComponentPaths = () =>
	readdirP(coreComponents)
		.then(componentDirs =>
			Promise.all(
				componentDirs.map(componentDirName =>
					isDirectory(`${coreComponents}/${componentDirName}`).then(
						isDirectory => {
							if (!isDirectory) return Promise.resolve()

							return `${coreComponents}/${componentDirName}`
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
	helpers,
	coreComponents,
	editorialComponents,
}
module.exports.getComponentPaths = getComponentPaths
