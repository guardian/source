const execa = require("execa")
const { paths, getComponentPaths } = require("./paths")

const verbump = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "verbump:minor"], {
		stdio: "inherit",
	})
}

const { root, foundations, svgs, helpers } = paths

const packages = getComponentPaths().then(paths =>
	paths.concat([foundations, svgs, root, helpers]),
)

packages.then(ps => {
	ps.forEach(dir => {
		if (!dir) return

		verbump(dir).catch(err => console.log("Error bumping packages:", err))
	})
})
