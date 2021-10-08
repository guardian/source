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
				const importSource = node.source.value;

				if (
					typeof importSource === 'string' &&
					importSource?.startsWith('@guardian/src')
				) {
					return context.report({
						node,
						message: `Import from deprecated ${node.source.raw} package`,
					});
				}
			},
		};
	},
};
