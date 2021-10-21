import { noStarImportsOrExports } from '../../../../lib/eslint/rules/no-star-imports-or-exports';
import { validFoundationsImportPath } from '../../../../lib/eslint/rules/valid-import-path';

export const rules = {
	'valid-foundations-import-path': validFoundationsImportPath,
	'no-star-imports-or-exports': noStarImportsOrExports,
};

export const configs = {
	recommended: {
		plugins: ['@guardian/source-foundations', 'import'],

		rules: {
			'@guardian/source-foundations/valid-foundations-import-path':
				'error',
			'@guardian/source-foundations/no-star-imports-or-exports': 'error',
			'import/no-duplicates': 'error',
		},
	},
};
