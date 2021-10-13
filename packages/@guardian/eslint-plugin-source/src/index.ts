import { noStarImportsOrExports } from './rules/no-star-imports-or-exports';
import { validImportPaths } from './rules/valid-import-path';

export const rules = {
	'valid-import-path': validImportPaths,
	'no-star-imports-or-exports': noStarImportsOrExports,
};

export const configs = {
	recommended: {
		plugins: ['@guardian/source', 'import'],

		rules: {
			'@guardian/source/valid-import-path': 'error',
			'@guardian/source/no-star-imports-or-exports': 'error',
			'import/no-duplicates': 'error',
		},
	},
};
