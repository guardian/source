import { Rule } from 'eslint';

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

				const newPackage = importSource.startsWith(
					"'@guardian/src-foundations",
				)
					? "'@guardian/source-foundations'"
					: "'@guardian/source-react-components'";

				return context.report({
					node,
					message: `@guardian/src-* packages are deprecated. Import from ${newPackage} instead`,
					fix: (fixer) => {
						return fixer.replaceTextRange(
							node.source.range ?? [0, 0],
							newPackage,
						);
					},
				});
			},
		};
	},
};
