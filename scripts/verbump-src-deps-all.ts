import { promises as fs } from "fs"
import { version } from "../package.json"
import { paths, getComponentPaths } from "./paths"

const verbump = (dir: string) => {
    return fs.readFile(`${dir}/package.json`, "utf8").then((contents) => {
        // perfectly safe find and replace that definitely, _definitely_ won't go wrong ever
        const regex = /"@guardian\/src-([\w-]+)": ".*"/g
        const replaceString = `"@guardian\/src-$1": "^${version}"`
        const bumpedContents = contents.replace(regex, replaceString)

        return fs.writeFile(`${dir}/package.json`, bumpedContents)
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
