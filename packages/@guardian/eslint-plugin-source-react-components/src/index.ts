import { validComponentsImportPath } from '../../../../lib/eslint/rules/valid-import-path';

export const rules = {
	'valid-components-import-path': validComponentsImportPath,
};

export const configs = {
	recommended: {
		plugins: ['@guardian/source-react-components'],

		rules: {
			'@guardian/source-react-components/valid-components-import-path':
				'error',
		},
	},
};
