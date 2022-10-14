import { isUndefined } from '@guardian/libs';
import type { Rule } from 'eslint';
import type {
	ExportAllDeclaration,
	ExportNamedDeclaration,
	ExportSpecifier,
	ImportDeclaration,
	ImportSpecifier,
} from 'estree';

type Node = (
	| ImportDeclaration
	| ExportNamedDeclaration
	| ExportAllDeclaration
) &
	Rule.NodeParentExtension;

type Package = 'foundations' | 'all';

const typographyObjChanges = ['body', 'headline', 'textSans', 'titlepiece'];

const removedImports: Record<string, string[]> = {
	"'@guardian/source-foundations/utils'": ['InteractionModeEngine'],
	"'@guardian/src-foundations/size/global'": ['remSize', 'remIconSize'],
	"'@guardian/src-foundations/themes'": ['defaultTheme', 'brand', 'brandAlt'],
	"'@guardian/src-helpers'": [
		'storybookBackgrounds',
		'ThemeName',
		'svgBackgroundImage',
	],
};

const newThemeNames: Record<string, string> = {
	accordionDefault: 'accordionThemeDefault',
	buttonReaderRevenue: 'buttonThemeReaderRevenue',
	buttonReaderRevenueBrand: 'buttonThemeReaderRevenueBrand',
	buttonReaderRevenueBrandAlt: 'buttonThemeReaderRevenueBrandAlt',
	buttonBrand: 'buttonThemeBrand',
	buttonBrandAlt: 'buttonThemeBrandAlt',
	buttonDefault: 'buttonThemeDefault',
	checkboxBrand: 'checkboxThemeBrand',
	checkboxDefault: 'checkboxThemeDefault',
	choiceCardDefault: 'choiceCardThemeDefault',
	footerBrand: 'footerThemeBrand',
	labelDefault: 'labelThemeDefault',
	labelBrand: 'labelThemeBrand',
	linkBrand: 'linkThemeBrand',
	linkBrandAlt: 'linkThemeBrandAlt',
	linkDefault: 'linkThemeDefault',
	radioBrand: 'radioThemeBrand',
	radioDefault: 'radioThemeDefault',
	selectDefault: 'selectThemeDefault',
	textInputDefault: 'textInputThemeDefault',
	userFeedbackBrand: 'userFeedbackThemeBrand',
	userFeedbackDefault: 'userFeedbackThemeDefault',
};

const capitalise = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1);

const getNewPackage = (oldPackage: string): string => {
	if (oldPackage === "'@guardian/src-foundations/themes'") {
		return "'@guardian/source-react-components'";
	} else if (oldPackage.startsWith("'@guardian/src-foundations")) {
		return "'@guardian/source-foundations'";
	} else {
		return "'@guardian/source-react-components'";
	}
};

const getRemovedExports = (
	node: Node,
): ImportSpecifier[] | ExportSpecifier[] => {
	switch (node.type) {
		case 'ImportDeclaration':
			return node.specifiers.filter((i) => {
				const source = node.source.raw;
				if (!source || !Object.keys(removedImports).includes(source)) {
					return false;
				}

				const removedImportsForSource = removedImports[source];

				if (removedImportsForSource) {
					return (
						i.type === 'ImportSpecifier' &&
						removedImportsForSource.includes(i.imported.name)
					);
				}

				return false;
			}) as ImportSpecifier[];
		case 'ExportNamedDeclaration':
			return node.specifiers.filter((i) => {
				const source = node.source?.raw;
				if (!source || !Object.keys(removedImports).includes(source)) {
					return false;
				}

				const removedImportsForSource = removedImports[source];
				if (removedImportsForSource) {
					return removedImportsForSource.includes(i.exported.name);
				}

				return false;
			});
		case 'ExportAllDeclaration':
			return [];
	}
};

const getImportName = (i: ImportSpecifier | ExportSpecifier): string => {
	const imported =
		i.type === 'ImportSpecifier' ? i.imported.name : i.exported.name;
	const local = i.local.name;

	return imported === local ? imported : `${imported} as ${local}`;
};

const getSpecifierName = (i: ImportSpecifier | ExportSpecifier): string => {
	return i.type === 'ImportSpecifier' ? i.imported.name : i.exported.name;
};

const getRenameImportFixers = (
	node: Node,
	removedExports: ImportSpecifier[] | ExportSpecifier[],
	fixer: Rule.RuleFixer,
	nodeSource: string,
): Rule.Fix[] => {
	const fixers: Rule.Fix[] = [];
	if (!node.source?.raw || node.type === 'ExportAllDeclaration') {
		return fixers;
	}

	// If anything has been removed then remove it from the fixed import
	// Also add a new line which imports the removed exports from the original source
	if (removedExports.length) {
		for (const i of removedExports) {
			if (!i.range) break;
			// Account for a possible comma after the import (e.g. import {one, two} from 'source')
			const end = i.range[1];
			const comma = nodeSource.slice(end, end + 1);
			fixers.push(fixer.removeRange([i.range[0], comma ? end + 1 : end]));
		}

		const importsArray: string[] = [];

		for (const rExport of removedExports) {
			const newName = getImportName(rExport);
			importsArray.push(newName);
		}

		fixers.push(
			fixer.insertTextBeforeRange(
				node.range ?? [0, 0],
				`import { ${importsArray.join(', ')} } from ${node.source.raw};\n`,
			),
		);
	}

	return fixers;
};

const getMessage = (
	newPackage: string,
	removedExports: ImportSpecifier[] | ExportSpecifier[],
	node: Node,
): string => {
	const importOrExport = node.type.startsWith('Export') ? 'export' : 'import';

	const newPackageMessage = `@guardian/src-* packages are deprecated. ${capitalise(
		importOrExport,
	)} from ${newPackage} instead.`;

	if (node.type === 'ExportAllDeclaration') {
		return newPackageMessage;
	}

	const renamedExports: Array<[string, string]> = [];

	// Some of the typography obj exports have changed name
	if (node.source?.raw === "'@guardian/src-foundations/typography/obj'") {
		for (const i of node.specifiers) {
			if (
				i.type === 'ImportNamespaceSpecifier' ||
				i.type === 'ImportDefaultSpecifier'
			) {
				continue;
			}

			const name = getSpecifierName(i);
			if (typographyObjChanges.includes(name)) {
				renamedExports.push([name, `${name}ObjectStyles`]);
			}
		}
	}

	// Some of the theme exports have changed name
	for (const i of node.specifiers) {
		if (
			i.type === 'ImportNamespaceSpecifier' ||
			i.type === 'ImportDefaultSpecifier'
		) {
			continue;
		}

		const name = getSpecifierName(i);
		const newThemeName = newThemeNames[name];

		if (!isUndefined(newThemeName)) {
			renamedExports.push([name, `${newThemeName}`]);
		}
	}

	let renamedExportsMessage = '';
	if (renamedExports.length) {
		renamedExportsMessage = `The following export(s) have been renamed [from -> to]: ${renamedExports
			.map(([oldName, newName]) => `${oldName} -> ${newName}`)
			.join(', ')}`;
	}

	if (!removedExports.length) {
		return renamedExportsMessage
			? `${newPackageMessage}\n${renamedExportsMessage}`
			: newPackageMessage;
	}

	const totalImports = node.specifiers.length;
	const removedExportsArray: string[] = [];

	for (const rExport of removedExports) {
		removedExportsArray.push(
			rExport.type === 'ImportSpecifier'
				? rExport.imported.name
				: rExport.exported.name,
		);
	}

	const removedExportsMessage = `The following export(s) have been removed: ${removedExportsArray.join(
		', ',
	)}.`;

	if (totalImports === removedExports.length) {
		return removedExportsMessage;
	} else {
		return [newPackageMessage, removedExportsMessage, renamedExportsMessage]
			.filter((s) => !!s)
			.join('\n');
	}
};

const relevantImportSource = (importSource: string, pkg: Package): boolean => {
	if (
		pkg === 'foundations' &&
		importSource.startsWith("'@guardian/src-foundations")
	) {
		return true;
	}

	if (pkg === 'all' && importSource.startsWith("'@guardian/src-")) {
		return true;
	}

	return false;
};

const createReport = (context: Rule.RuleContext, node: Node, pkg: Package) => {
	const importSource = node.source?.raw;

	if (!importSource || !relevantImportSource(importSource, pkg)) return;

	const newPackage = getNewPackage(importSource);

	// Check if the export statement is exporting everything
	// If so, we won't autofix
	if (node.type === 'ExportAllDeclaration') {
		return context.report({
			node,
			message: getMessage(newPackage, [], node),
		});
	}

	// Check if the import statement contains any all or default imports
	// If so, we won't autofix
	const nonNamedImports =
		node.type === 'ImportDeclaration' &&
		!node.specifiers.every((s) => s.type === 'ImportSpecifier');

	if (nonNamedImports) {
		return context.report({
			node,
			message: getMessage(newPackage, [], node),
		});
	}

	// Some exports are no longer available from the new packages
	// We need to account for these
	const removedExports = getRemovedExports(node);

	const nodeSource = context.getSourceCode().getText(node);

	return context.report({
		node,
		message: getMessage(newPackage, removedExports, node),
		fix: (fixer) => {
			// If all of the exports have been removed then don't autofix
			return node.specifiers.length === removedExports.length
				? null
				: [
						...getRenameImportFixers(node, removedExports, fixer, nodeSource),
						fixer.replaceTextRange(node.source?.range ?? [0, 0], newPackage),
				  ];
		},
	});
};

export const validFoundationsImportPath: Rule.RuleModule = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Get Source imports from v4 packages',
			category: 'Deprecated',
			url: 'https://github.com/guardian/source',
		},
		fixable: 'code',
		schema: [],
	},

	create: (context: Rule.RuleContext): Rule.RuleListener => {
		return {
			ImportDeclaration(node) {
				return createReport(context, node, 'foundations');
			},
			ExportNamedDeclaration(node) {
				// e.g. export {Props} from '@guardian/src-helpers'
				return createReport(context, node, 'foundations');
			},
			ExportAllDeclaration(node) {
				// e.g. export * from '@guardian/src-foundations'`
				return createReport(context, node, 'foundations');
			},
		};
	},
};
