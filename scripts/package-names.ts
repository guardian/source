import { join } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const coreComponents = join(__dirname, '../src/core/components');

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

export const getComponentPackageNames = () =>
	readdirP(coreComponents)
		.then((componentDirs) =>
			Promise.all(
				componentDirs.map((componentDirName) =>
					isDirectory(`${coreComponents}/${componentDirName}`).then(
						(isDir) => {
							if (!isDir) return;

							return `@guardian/src-${componentDirName}`;
						},
					),
				),
			),
		)
		.then((paths) => Promise.resolve(paths.filter((path) => !!path)));

export const getComponentPackageNamesWithPaths = () =>
	readdirP(coreComponents)
		.then((componentDirs) =>
			Promise.all(
				componentDirs.map((componentDirName) =>
					isDirectory(`${coreComponents}/${componentDirName}`).then(
						(isDir) => {
							if (!isDir) return;

							return {
								[`@guardian/src-${componentDirName}`]: `${coreComponents}/${componentDirName}`,
							};
						},
					),
				),
			),
		)
		.then((paths) => Promise.resolve(Object.assign({}, ...paths)));

export const packageNames = {
	foundations: '@guardian/src-foundations',
	icons: '@guardian/src-icons',
	brand: '@guardian/src-brand',
	helpers: '@guardian/src-helpers',
};
