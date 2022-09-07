import { readdir, stat } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const root = join(__dirname, '..');
const foundations = join(__dirname, '../packages/@guardian/src-foundations');
const icons = join(__dirname, '../packages/@guardian/src-icons');
const brand = join(__dirname, '../packages/@guardian/src-brand');
const helpers = join(__dirname, '../packages/@guardian/src-helpers');
const coreComponents = join(__dirname, '../packages/@guardian');
const reactComponents = join(
	__dirname,
	'../packages/@guardian/source-react-components/src',
);
const sourceFoundations = join(
	__dirname,
	'../packages/@guardian/source-foundations',
);
const kitchenComponents = join(
	__dirname,
	'../packages/@guardian/source-react-components-development-kitchen/src/components',
);

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

const nonComponentDirectories = [
	'src-foundations',
	'src-icons',
	'src-brand',
	'src-helpers',
];

export const getComponentPaths = () =>
	readdirP(coreComponents)
		.then((componentDirs) =>
			Promise.all(
				componentDirs
					.filter(
						(name) =>
							name.startsWith('src-') &&
							!nonComponentDirectories.includes(name),
					)
					.map((componentDirName) =>
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
					isDirectory(`${kitchenComponents}/${componentDirName}`).then(
						(isDir) => {
							if (!isDir) return '';

							return `${kitchenComponents}/${componentDirName}`;
						},
					),
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
	reactComponents,
	sourceFoundations,
};
