import { join } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const root = join(__dirname, '..');
const foundations = join(__dirname, '../packages/source/foundations');
const icons = join(__dirname, '../packages/source/icons');
const brand = join(__dirname, '../packages/source/brand');
const helpers = join(__dirname, '../packages/source/helpers');
const editorial = join(__dirname, '../src/editorial/web');
const coreComponents = join(__dirname, '../packages/source/components');
const editorialComponents = join(__dirname, '../src/editorial/web/components');

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
		readdirP(editorialComponents)
			.then((componentDirs) =>
				Promise.all(
					componentDirs.map((componentDirName) =>
						isDirectory(
							`${editorialComponents}/${componentDirName}`,
						).then((isDir) => {
							if (!isDir) return;

							return `${editorialComponents}/${componentDirName}`;
						}),
					),
				),
			)
			.then((paths) => Promise.resolve(paths.filter((path) => !!path))),
	]).then(([corePaths, editorialPaths]) => [...corePaths, ...editorialPaths]);

export const paths = {
	root,
	foundations,
	icons,
	brand,
	helpers,
	editorial,
	coreComponents,
	editorialComponents,
};
