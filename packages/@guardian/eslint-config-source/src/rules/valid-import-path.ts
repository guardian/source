import { ImportDeclaration } from 'estree';
import { Rule } from 'eslint';

const getNewPackage = (oldPackage: string): string => {
	if (oldPackage === "'@guardian/src-foundations/themes'") {
		return "'@guardian/source-react-components'";
	} else if (oldPackage.startsWith("'@guardian/src-foundations")) {
		return "'@guardian/source-foundations'";
	} else {
		return "'@guardian/source-react-components'";
	}
};

const typographyObjChanges = ['body', 'headline', 'textSans', 'titlepiece'];

const getRenameImportFixers = (
	node: ImportDeclaration & Rule.NodeParentExtension,
	fixer: Rule.RuleFixer,
): Rule.Fix[] => {
	if (node.source.raw !== "'@guardian/src-foundations/typography/obj'")
		return [];

	const fixers: Rule.Fix[] = [];
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

	return fixers;
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
				const importSource = node.source.raw;

				if (!importSource?.startsWith("'@guardian/src-")) return;

				const newPackage = getNewPackage(importSource);

				return context.report({
					node,
					message: `@guardian/src-* packages are deprecated. Import from ${newPackage} instead`,
					fix: (fixer) => {
						return [
							...getRenameImportFixers(node, fixer),
							fixer.replaceTextRange(
								node.source.range ?? [0, 0],
								newPackage,
							),
						];
					},
				});
			},
		};
	},
};
