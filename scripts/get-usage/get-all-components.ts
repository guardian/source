import { readdirSync, readFileSync } from 'fs';
import { parse } from '@typescript-eslint/typescript-estree';
import { getKitchenComponentPaths, paths } from '../paths';
import {
	getComponentPackageNamesWithPaths,
	packageNames,
} from './package-names';

const getPackageComponents = (path: string | string[]): string[] => {
	if (Array.isArray(path)) {
		return path.flatMap((p) => getPackageComponents(p));
	}

	const contents = readdirSync(path);

	if (contents.includes('index.tsx')) {
		return getExportsFromFile(`${path}/index.tsx`);
	} else if (contents.includes('index.ts')) {
		return getExportsFromFile(`${path}/index.ts`);
	} else {
		return contents
			.filter((item) => !item.endsWith('stories.tsx') && item.endsWith('.tsx'))
			.flatMap((file) => getExportsFromFile(`${path}/${file}`));
	}
};

const getExportsFromFile = (path: string): string[] => {
	const contents = readFileSync(path, 'utf8');

	const ast = parse(contents, { jsx: true });
	const exports: string[] = [];

	for (const node of ast.body) {
		if (node.type !== 'ExportNamedDeclaration' || node.exportKind !== 'value') {
			continue;
		}

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
		...(await getComponentPackageNamesWithPaths()),
		[packageNames.reactComponents]: paths.reactComponents,
		[packageNames.kitchen]: await getKitchenComponentPaths(),
	};

	let components: Record<string, string[]> = {};

	Object.entries(packages).forEach(([pkg, path]) => {
		components[pkg] = getPackageComponents(path);
	});

	components = {
		...components,
		'@guardian/src-ed-lines': ['Lines'],
		'@guardian/src-ed-quote-icon': ['QuoteIcon'],
		'@guardian/src-ed-logo': ['Logo'],
		'@guardian/src-ed-star-rating': ['StarRating'],
		'@guardian/src-ed-button': ['Button', 'LinkButton'],
	};

	const componentsWithPackages = [
		...Object.entries(components).flatMap(([pkg, cs]) =>
			cs.flatMap((c) => `${pkg}/${c}`),
		),
	];

	return componentsWithPackages;
};

if (require.main === module) {
	void (async () => await getAllComponentsAndPackages())();
}
