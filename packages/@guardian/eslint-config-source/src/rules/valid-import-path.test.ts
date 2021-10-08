import { RuleTester } from 'eslint';
import { validImportPaths } from './valid-import-path';

const ruleTester = new RuleTester({
	parser: `${__dirname}/../../node_modules/@typescript-eslint/parser`,
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
});

ruleTester.run('valid-import-paths', validImportPaths, {
	valid: [`import { Label } from '@guardian/source-foundations'`],
	invalid: [
		{
			code: "import { Label } from '@guardian/src-label';",
			errors: [
				{
					message:
						"Import from deprecated '@guardian/src-label' package",
				},
			],
			output: "import { Label } from '@guardian/source-react-components';",
		},
	],
});
