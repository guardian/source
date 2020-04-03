const fs = require("fs")
const execa = require("execa")
const { paths, getComponentPaths } = require("./paths")

const { foundations, svgs, helpers } = paths

const clean = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "clean"], {
		stdio: "inherit",
	})
}

;[foundations, svgs, helpers].forEach(dir => {
	clean(dir)
})

getComponentPaths().then(paths => {
	paths.forEach(path => clean(path))
})
