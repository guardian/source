const fs = require("fs")
const execa = require("execa")
const { paths } = require("./paths")

const { foundations, svgs, helpers, components } = paths

const clean = dir => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "clean"], {
		stdio: "inherit",
	})
}

;[foundations, svgs, helpers].forEach(dir => {
	clean(dir)
})

fs.readdir(components, (err, componentDirs) => {
	componentDirs.forEach(componentDirName => {
		fs.stat(`${components}/${componentDirName}`, (err, stats) => {
			if (!stats.isDirectory()) return
			clean(`${components}/${componentDirName}`)
		})
	})
})
