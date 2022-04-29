import type { Rule } from 'eslint';
import type { ExportAllDeclaration, ImportDeclaration } from 'estree';

type Node = (ImportDeclaration | ExportAllDeclaration) &
	Rule.NodeParentExtension;

const isSourcePackage = (node: Node): boolean => {
	const source = node.source.raw;
	if (!source) return false;

	return (
		source.startsWith("'@guardian/src-") ||
		source.startsWith("'@guardian/source-")
	);
};

export const noStarImportsOrExports: Rule.RuleModule = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow * imports and exports',
			category: 'Possible Problems',
			url: 'https://github.com/guardian/source',
		},
	},

	create(context: Rule.RuleContext): Rule.RuleListener {
		return {
			ImportDeclaration(node) {
				if (!isSourcePackage(node)) return;

				const anyNamespaceSpecifiers = !node.specifiers.every(
					(s) => s.type !== 'ImportNamespaceSpecifier',
				);

				if (!anyNamespaceSpecifiers) return;

				return context.report({
					node,
					message:
						'Importing * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named imports instead.',
				});
			},
			ExportAllDeclaration(node) {
				// e.g. export * from '@guardian/src-foundations'`
				if (!isSourcePackage(node)) return;
				return context.report({
					node,
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				});
			},
		};
	},
};
