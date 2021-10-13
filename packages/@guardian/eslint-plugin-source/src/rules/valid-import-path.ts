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
				if (!source || !Object.keys(removedImports).includes(source))
					return false;

				const removedImportsForSource = removedImports[source];
				return (
					i.type === 'ImportSpecifier' &&
					removedImportsForSource.includes(i.imported.name)
				);
			}) as ImportSpecifier[];
		case 'ExportNamedDeclaration':
			return node.specifiers.filter((i) => {
				const source = node.source?.raw;
				if (!source || !Object.keys(removedImports).includes(source))
					return false;

				const removedImportsForSource = removedImports[source];
				return removedImportsForSource.includes(i.exported.name);
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

const getRenameImportFixers = (
	node: Node,
	removedExports: ImportSpecifier[] | ExportSpecifier[],
	fixer: Rule.RuleFixer,
	nodeSource: string,
): Rule.Fix[] => {
	const fixers: Rule.Fix[] = [];
	if (!node.source?.raw || node.type === 'ExportAllDeclaration')
		return fixers;
	if (node.source.raw === "'@guardian/src-foundations/typography/obj'") {
		for (const i of node.specifiers) {
			if (
				i.type === 'ImportSpecifier' &&
				typographyObjChanges.includes(i.imported.name)
			) {
				fixers.push(
					fixer.replaceTextRange(
						i.imported.range ?? [0, 0],
						`${i.imported.name}ObjectStyles`,
					),
				);
			}
		}
	} else if (removedExports.length) {
		for (const i of removedExports) {
			if (!i.range) break;
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
				`import { ${importsArray.join(', ')} } from ${
					node.source.raw
				};\n`,
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

	if (!removedExports.length || node.type === 'ExportAllDeclaration') {
		return newPackageMessage;
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
		return `${newPackageMessage}\n${removedExportsMessage}`;
	}
};

const createReport = (context: Rule.RuleContext, node: Node) => {
	const importSource = node.source?.raw;
	if (!importSource?.startsWith("'@guardian/src-")) return;

	const newPackage = getNewPackage(importSource);
	const nonNamedImports =
		node.type === 'ImportDeclaration' &&
		!node.specifiers.every((s) => s.type === 'ImportSpecifier');

	if (nonNamedImports) {
		return context.report({
			node,
			message: getMessage(newPackage, [], node),
		});
	}

	const removedExports = getRemovedExports(node);

	const nodeSource = context.getSourceCode().getText(node);

	return context.report({
		node,
		message: getMessage(newPackage, removedExports, node),
		fix: (fixer) => {
			if (node.type === 'ExportAllDeclaration') {
				return fixer.replaceTextRange(
					node.source.range ?? [0, 0],
					newPackage,
				);
			} else {
				return node.specifiers.length === removedExports.length
					? null
					: [
							...getRenameImportFixers(
								node,
								removedExports,
								fixer,
								nodeSource,
							),
							fixer.replaceTextRange(
								node.source?.range ?? [0, 0],
								newPackage,
							),
					  ];
			}
		},
	});
};

export const validImportPaths: Rule.RuleModule = {
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

	create(context: Rule.RuleContext): Rule.RuleListener {
		return {
			ImportDeclaration(node) {
				return createReport(context, node);
			},
			ExportNamedDeclaration(node) {
				// e.g. export {Props} from '@guardian/src-helpers'
				return createReport(context, node);
			},
			ExportAllDeclaration(node) {
				// e.g. export * from '@guardian/src-foundations'`
				return context.report({
					node,
					message: getMessage(
						getNewPackage(node.source.raw ?? ''),
						[],
						node,
					),
				});
			},
		};
	},
};