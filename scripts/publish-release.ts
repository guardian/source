import execa, { ExecaReturnValue } from "execa"
import { version } from "../package.json"
import { paths, getComponentPaths } from "./paths"

const publish = (dir: string) => {
	return execa(
		"yarn",
		["--cwd", `${dir}`, "run", "publish:public", "--new-version", version],
		{
			stdio: "inherit",
		},
	)
}

const { foundations, svgs, helpers, coreComponents } = paths

// Publish these packages in the specified order
const prioritisedPackages = [
	foundations,
	helpers,
	svgs,
	`${coreComponents}/inline-error`,
]

// Publish these packages in parallel
const otherPackages = getComponentPaths().then(paths =>
	paths.filter(path => {
		if (!path) return false

		return !prioritisedPackages.includes(path)
	}),
)

prioritisedPackages
	.reduce(
		(prev, curr) =>
			prev
				.then(() => publish(curr))
				.catch(err =>
					Promise.reject(
						`Error publishing prioritised package: ${err}`,
					),
				),
		Promise.resolve() as Promise<void | ExecaReturnValue<string>>,
	)
	.then(() =>
		otherPackages.then(packages =>
			Promise.all(
				packages.map(dir => {
					if (!dir) return

					return publish(dir)
				}),
			).catch(err =>
				Promise.reject(`Error publishing other packages: ${err}`),
			),
		),
	)
	.catch(err => {
		console.log("***PUBLISH FAILED***\n", err)

		process.exit(1)
	})
