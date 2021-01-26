import execa from "execa"
import { paths, getComponentPaths } from "./paths"

const verbump = (dir: string) => {
    return execa("yarn", ["--cwd", `${dir}`, "run", "verbump:major"], {
        stdio: "inherit",
    })
}

const { root, foundations, icons, brand, helpers, editorial } = paths

const packages = getComponentPaths().then((paths) =>
    paths.concat([foundations, icons, brand, root, helpers, editorial]),
)

packages.then((ps) => {
    ps.forEach((dir) => {
        if (!dir) return

        verbump(dir).catch((err) => console.log("Error bumping packages:", err))
    })
})
