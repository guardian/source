import { readdir, stat } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const coreComponents = join(__dirname, '../../packages/@guardian');

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

const nonComponentDirectories = [
	'src-foundations',
	'src-icons',
	'src-brand',
	'src-helpers',
];

export const getComponentPackageNamesWithPaths = () =>
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

								return {
									[`@guardian/${componentDirName}`]: `${coreComponents}/${componentDirName}`,
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
	kitchen: '@guardian/source-react-components-development-kitchen',
	reactComponents: '@guardian/source-react-components',
	sourceFoundations: '@guardian/source-foundations',
};
