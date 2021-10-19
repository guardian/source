import { readdirSync, readFileSync } from 'fs';
import {
	packageNames,
	getComponentPackageNamesWithPaths,
} from './package-names';
import { paths, getKitchenComponentPaths } from '../paths';
import { parse } from '@typescript-eslint/typescript-estree';

const getPackageComponents = (path: string | string[]): string[] => {
	if (Array.isArray(path)) {
		return path.flatMap((p) => getPackageComponents(p));
	}

	const contents = readdirSync(path);

	if (contents.includes('index.tsx')) {
		return getExportsFromFile(`${path}/index.tsx`);
	} else {
		return contents
			.filter(
				(item) =>
					!item.endsWith('stories.tsx') && item.endsWith('.tsx'),
			)
			.flatMap((file) => getExportsFromFile(`${path}/${file}`));
	}
};

const getExportsFromFile = (path: string): string[] => {
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
					if (
						firstChar === firstChar.toUpperCase() &&
						!declaration.id.name.endsWith('Props')
					) {
						exports.push(declaration.id.name);
					}
				}
			}
		}

		for (const specifier of node.specifiers) {
			const firstChar = specifier.exported.name[0];
			if (
				firstChar === firstChar.toUpperCase() &&
				!specifier.exported.name.endsWith('Props')
			) {
				exports.push(specifier.exported.name);
			}
		}
	}

	return exports;
};

export const getAllComponentsAndPackages = async () => {
	const packages: Record<string, string | string[]> = {
		[packageNames.brand]: paths.brand,
		[packageNames.icons]: paths.icons,
		[packageNames.kitchen]: await getKitchenComponentPaths(),
		...(await getComponentPackageNamesWithPaths()),
	};

	const components: Record<string, string[]> = {};

	Object.entries(packages).forEach(([pkg, path]) => {
		components[pkg] = getPackageComponents(path);
	});

	const componentsWithPackages = [
		...Object.entries(components).flatMap(([pkg, cs]) =>
			cs.flatMap((c) => `${pkg}/${c}`),
		),
		'@guardian/src-ed-lines/Lines',
		'@guardian/src-ed-quote-icon/QuoteIcon',
		'@guardian/src-ed-logo/Logo',
		'@guardian/src-ed-star-rating/StarRating',
		'@guardian/src-ed-button/Button',
		'@guardian/src-ed-button/LinkButton',
	];

	return componentsWithPackages;
};
