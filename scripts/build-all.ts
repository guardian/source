/* eslint-disable @typescript-eslint/no-var-requires */

import execa, { ExecaReturnValue } from 'execa';
import { paths, getComponentPaths } from './paths';

const build = (dir?: string) => {
	if (!dir) return;
	console.log(`\nBuilding ${require(`${dir}/package.json`).name}`);

	return execa('yarn', ['--cwd', dir, 'run', 'build'], {
		stdio: 'inherit',
	});
};

const {
	foundations,
	sourceFoundations,
	icons,
	brand,
	helpers,
	kitchen,
	coreComponents,
} = paths;

// Build these packages in the specified order
const prioritisedPackages = [
	foundations,
	sourceFoundations,
	helpers,
	icons,
	brand,
	`${coreComponents}/user-feedback`,
	`${coreComponents}/label`,
	`${coreComponents}/button`,
	kitchen,
];

// Build these packages in parallel
const otherPackages = getComponentPaths().then((paths) =>
	paths.filter((path) => {
		if (!path) return false;

		return !prioritisedPackages.includes(path);
	}),
);

otherPackages
	.then((packages) =>
		[...prioritisedPackages, ...packages].reduce(
			(prev, curr) =>
				prev
					.then(() => build(curr))
					.catch((err) =>
						Promise.reject(`Error building package: ${err}`),
					),
			Promise.resolve() as Promise<void | ExecaReturnValue<string>>,
		),
	)
	.catch((err: string) => {
		console.log('***BUILD FAILED***\n', err);

		process.exit(1);
	});
