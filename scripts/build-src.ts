/* eslint-disable @typescript-eslint/no-var-requires */

import execa from 'execa';
import { paths, getComponentPaths } from './paths';

const build = (dir?: string) => {
	if (!dir) return;
	console.log(`\nBuilding ${require(`${dir}/package.json`).name}`);

	return execa.sync('yarn', ['--cwd', dir, 'run', 'build'], {
		stdio: 'inherit',
	});
};

const { foundations, icons, brand, helpers, coreComponents } = paths;

// Build these packages in the specified order
const prioritisedPackages = [
	foundations,
	helpers,
	icons,
	brand,
	`${coreComponents}/user-feedback`,
	`${coreComponents}/label`,
	`${coreComponents}/button`,
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
		[...prioritisedPackages, ...packages].forEach((pkg) => {
			try {
				build(pkg);
			} catch (err) {
				console.error(`Error building package: ${err}`);
			}
		}),
	)
	.catch((err: string) => {
		console.log('***BUILD FAILED***\n', err);

		process.exit(1);
	});
