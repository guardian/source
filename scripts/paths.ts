import { join } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const root = join(__dirname, '..');
const foundations = join(__dirname, '../src/core/foundations');
const icons = join(__dirname, '../src/core/icons');
const brand = join(__dirname, '../src/core/brand');
const helpers = join(__dirname, '../src/core/helpers');
const editorial = join(__dirname, '../src/editorial');
const coreComponents = join(__dirname, '../src/core/components');

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

export const getComponentPaths = () =>
	Promise.all([
		readdirP(coreComponents)
			.then((componentDirs) =>
				Promise.all(
					componentDirs.map((componentDirName) =>
						isDirectory(
							`${coreComponents}/${componentDirName}`,
						).then((isDir) => {
							if (!isDir) return;

							return `${coreComponents}/${componentDirName}`;
						}),
					),
				),
			)
			.then((paths) => Promise.resolve(paths.filter((path) => !!path))),
	]).then(([corePaths]) => [...corePaths]);

export const paths = {
	root,
	foundations,
	icons,
	brand,
	helpers,
	editorial,
	coreComponents,
};
