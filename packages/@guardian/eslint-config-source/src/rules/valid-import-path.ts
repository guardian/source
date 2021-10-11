import { ImportDeclaration, ImportSpecifier } from 'estree';
import { Rule } from 'eslint';

const typographyObjChanges = ['body', 'headline', 'textSans', 'titlepiece'];

const removedImports: Record<string, string[]> = {
	"'@guardian/source-foundations/utils'": ['InteractionModeEngine'],
	"'@guardian/src-foundations/size/global'": ['remSize', 'remIconSize'],
	"'@guardian/src-foundations/themes'": ['defaultTheme', 'brand', 'brandAlt'],
};

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
	node: ImportDeclaration & Rule.NodeParentExtension,
): ImportSpecifier[] => {
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
};

const getRenameImportFixers = (
	node: ImportDeclaration & Rule.NodeParentExtension,
	removedExports: ImportSpecifier[],
	fixer: Rule.RuleFixer,
	nodeSource: string,
): Rule.Fix[] => {
	const fixers: Rule.Fix[] = [];

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

		fixers.push(
			fixer.insertTextBeforeRange(
				node.range ?? [0, 0],
				`import { ${removedExports
					.map((i) => i.imported.name)
					.join(', ')} } from ${node.source.raw};\n`,
			),
		);
	}

	return fixers;
};

const getMessage = (
	newPackage: string,
	removedExports: ImportSpecifier[],
	node: ImportDeclaration & Rule.NodeParentExtension,
): string => {
	const newPackageMessage = `@guardian/src-* packages are deprecated. Import from ${newPackage} instead.`;
	if (!removedExports.length) {
		return newPackageMessage;
	}

	const totalImports = node.specifiers.length;
	const removedExportsString = removedExports
		.map((i) => i.imported.name)
		.join(', ');
	const removedExportsMessage = `The following export(s) have been removed: ${removedExportsString}.`;

	if (totalImports === removedExports.length) {
		return removedExportsMessage;
	} else {
		return `${newPackageMessage}\n${removedExportsMessage}`;
	}
};

const createReport = (
	context: Rule.RuleContext,
	node: ImportDeclaration & Rule.NodeParentExtension,
) => {
	const importSource = node.source.raw;
	if (!importSource?.startsWith("'@guardian/src-")) return;

	const newPackage = getNewPackage(importSource);
	const removedExports = getRemovedExports(node);

	const nodeSource = context.getSourceCode().getText(node);

	return context.report({
		node,
		message: getMessage(newPackage, removedExports, node),
		fix: (fixer) => {
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
							node.source.range ?? [0, 0],
							newPackage,
						),
				  ];
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
		};
	},
};
