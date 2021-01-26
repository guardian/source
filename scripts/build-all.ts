import execa, { ExecaReturnValue } from "execa"
import { paths, getComponentPaths } from "./paths"

const build = (dir: string) => {
    return execa("yarn", ["--cwd", `${dir}`, "run", "build"], {
        stdio: "inherit",
    })
}

const { foundations, icons, brand, helpers, editorial, coreComponents } = paths

// Build these packages in the specified order
const prioritisedPackages = [
    foundations,
    helpers,
    icons,
    brand,
    `${coreComponents}/user-feedback`,
    `${coreComponents}/label`,
    editorial,
]

// Build these packages in parallel
const otherPackages = getComponentPaths().then((paths) =>
    paths.filter((path) => {
        if (!path) return false

        return !prioritisedPackages.includes(path)
    }),
)

prioritisedPackages
    .reduce(
        (prev, curr) =>
            prev
                .then(() => build(curr))
                .catch((err) =>
                    Promise.reject(
                        `Error building prioritised package: ${err}`,
                    ),
                ),
        Promise.resolve() as Promise<void | ExecaReturnValue<string>>,
    )
    .then(() =>
        otherPackages.then((packages) =>
            Promise.all(
                packages.map((dir) => {
                    if (!dir) return

                    return build(dir)
                }),
            ).catch((err) =>
                Promise.reject(`Error building other packages: ${err}`),
            ),
        ),
    )
    .catch((err: string) => {
        console.log("***BUILD FAILED***\n", err)

        process.exit(1)
    })
