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
const coreComponents = join(__dirname, '../src/core/components');
const kitchenComponents = join(
	__dirname,
	'../packages/@guardian/source-react-components-development-kitchen/components',
);

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

export const getComponentPaths = () =>
	readdirP(coreComponents)
		.then((componentDirs) =>
			Promise.all(
				componentDirs.map((componentDirName) =>
					isDirectory(`${coreComponents}/${componentDirName}`).then(
						(isDir) => {
							if (!isDir) return;

							return `${coreComponents}/${componentDirName}`;
						},
					),
				),
			),
		)
		.then((paths) => Promise.resolve(paths.filter((path) => !!path)));

export const getKitchenComponentPaths = () =>
	readdirP(kitchenComponents)
		.then((componentDirs) =>
			Promise.all(
				componentDirs.map((componentDirName) =>
					isDirectory(
						`${kitchenComponents}/${componentDirName}`,
					).then((isDir) => {
						if (!isDir) return;

						return `${kitchenComponents}/${componentDirName}`;
					}),
				),
			),
		)
		.then((paths) => Promise.resolve(paths.filter((path) => !!path)));

export const paths = {
	root,
	foundations,
	icons,
	brand,
	helpers,
	coreComponents,
};
