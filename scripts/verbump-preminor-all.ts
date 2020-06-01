import execa from "execa"
import { paths, getComponentPaths } from "./paths"

const verbump = (dir: string) => {
	return execa("yarn", ["--cwd", `${dir}`, "run", "verbump:preminor"], {
		stdio: "inherit",
	})
}

const { root, foundations, svgs, icons, brand, helpers } = paths

const packages = getComponentPaths().then(paths =>
	paths.concat([foundations, svgs, icons, brand, root, helpers]),
)

packages.then(ps => {
	ps.forEach(dir => {
		if (!dir) return

		verbump(dir).catch(err => console.log("Error bumping packages:", err))
	})
})
