import { validComponentsImportPath } from '../../../../lib/eslint/rules/valid-import-path';

export const rules = {
	'valid-components-import-path': validComponentsImportPath,
};

export const configs = {
	recommended: {
		plugins: [
			'@guardian/source-react-components',
			'@guardian/source-foundations',
			'import',
		],

		rules: {
			'@guardian/source-react-components/valid-components-import-path':
				'error',
			'@guardian/source-foundations/valid-foundations-import-path':
				'error',
			'@guardian/source-foundations/no-star-imports-or-exports': 'error',
			'import/no-duplicates': 'error',
		},
	},
};
