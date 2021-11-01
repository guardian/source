import { validImportPath } from '../../../../lib/eslint/rules/valid-import-path';

export const rules = {
	'valid-import-path': validImportPath,
};

export const configs = {
	recommended: {
		plugins: [
			'@guardian/source-react-components',
			'@guardian/source-foundations',
			'import',
		],

		rules: {
			'@guardian/source-react-components/valid-import-path': 'error',
			'@guardian/source-foundations/no-star-imports-or-exports': 'error',
			'import/no-duplicates': 'error',
		},
	},
};
