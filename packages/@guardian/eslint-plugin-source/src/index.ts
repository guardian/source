import { validImportPaths } from './rules/valid-import-path';

export const rules = {
	'valid-import-path': validImportPaths,
};

export const configs = {
	recommended: {
		plugins: ['@guardian/source', 'import'],

		rules: {
			'@guardian/source/valid-import-path': 'error',
			'import/no-duplicates': 'error',
		},
	},
};
