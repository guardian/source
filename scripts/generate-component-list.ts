import { join } from 'path';
import { readdir, stat, readdirSync, readFileSync } from 'fs';
import { promisify } from 'util';
import { packageNames } from './package-names';
import { paths } from './paths';
import { parse } from '@typescript-eslint/typescript-estree';

const readdirP = promisify(readdir);
const statP = promisify(stat);

const coreComponents = join(__dirname, '../src/core/components');
const editorialComponents = join(__dirname, '../src/editorial/web/components');

const isDirectory = (path: string) =>
	statP(path).then((stats) => stats.isDirectory());

const getComponentPackageNamesAndPaths = () =>
	Promise.all([
		readdirP(coreComponents)
			.then((componentDirs) =>
				Promise.all(
					componentDirs.map((componentDirName) =>
						isDirectory(
							`${coreComponents}/${componentDirName}`,
						).then((isDir) => {
							if (!isDir) return;

							return {
								[`@guardian/src-${componentDirName}`]: `${coreComponents}/${componentDirName}`,
							};
						}),
					),
				),
			)
			.then((paths) => Promise.resolve(Object.assign({}, ...paths))),
		readdirP(editorialComponents)
			.then((componentDirs) =>
				Promise.all(
					componentDirs.map((componentDirName) =>
						isDirectory(
							`${editorialComponents}/${componentDirName}`,
						).then((isDir) => {
							if (!isDir) return;

							return {
								[`@guardian/src-ed-${componentDirName}`]: `${editorialComponents}/${componentDirName}`,
							};
						}),
					),
				),
			)
			.then((paths) => Promise.resolve(Object.assign({}, ...paths))),
	]).then(([corePaths, editorialPaths]) => ({
		...corePaths,
		...editorialPaths,
	}));

const getPackageComponents = (path: string): string[] => {
	const contents = readdirSync(path);

	if (contents.includes('index.tsx')) {
		return getExportsFromFile(`${path}/index.tsx`);
	} else {
		return contents
			.filter((item) => item.endsWith('.tsx') && item !== 'stories.tsx')
			.flatMap((file) => getExportsFromFile(`${path}/${file}`));
	}
};

const getExportsFromFile = (path: string): string[] => {
	console.log(`Getting exports from ${path}`);
	const contents = readFileSync(path, 'utf8');

	const ast = parse(contents, { jsx: true });
	const exports: string[] = [];

	for (const node of ast.body) {
		if (
			node.type !== 'ExportNamedDeclaration' ||
			node.exportKind !== 'value'
		)
			continue;

		if (node.declaration?.type === 'VariableDeclaration') {
			for (const declaration of node.declaration.declarations) {
				if (declaration.id.type === 'Identifier') {
					const firstChar = declaration.id.name[0];
					if (firstChar === firstChar.toUpperCase()) {
						exports.push(declaration.id.name);
					}
				}
			}
		}

		for (const specifier of node.specifiers) {
			const firstChar = specifier.exported.name[0];
			if (firstChar === firstChar.toUpperCase()) {
				exports.push(specifier.exported.name);
			}
		}
	}

	return exports;
};

const main = async () => {
	const packages: Record<string, string> = {
		[packageNames.brand]: paths.brand,
		[packageNames.icons]: paths.icons,
		...(await getComponentPackageNamesAndPaths()),
	};

	console.log(packages);

	const components: Record<string, string[]> = {};

	Object.entries(packages).forEach(([pkg, path]) => {
		components[pkg] = getPackageComponents(path);
	});

	console.log(components);
};

if (require.main === module) {
	void (async () => await main())();
}
