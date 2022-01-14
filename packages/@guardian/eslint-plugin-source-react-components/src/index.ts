import { validImportPath } from '../../../../lib/eslint/rules/valid-import-path';

export const rules = {
	'valid-import-path': validImportPath,
};

export const configs = {
	recommended: {
		plugins: ['@guardian/source-react-components'],

		rules: {
			'@guardian/source-react-components/valid-import-path': 'error',
		},
	},
};
