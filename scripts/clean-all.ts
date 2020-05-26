import execa from "execa"
import { paths, getComponentPaths } from "./paths"

const { foundations, svgs, icons, helpers } = paths

const clean = (dir: string) => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "clean"], {
		stdio: "inherit",
	})
}
;[foundations, svgs, icons, helpers].forEach(dir => {
	clean(dir)
})

getComponentPaths().then(paths => {
	paths.forEach(path => {
		if (path) clean(path)
	})
})
