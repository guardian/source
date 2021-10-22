import type { Test } from './src/types';
import { componentsEslintConfig } from './src/eslint-config';

export const testConfig: Test[] = [
	{
		name: 'Errors for an import from a src component package',
		contents: `import {Button} from '@guardian/src-button'`,
		eslintConfig: componentsEslintConfig,
		fix: false,
		expectedErrors: [
			`@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead`,
		],
	},
	{
		name: 'Fixes a single import from a src component package',
		contents: `import {Button} from '@guardian/src-button'`,
		eslintConfig: componentsEslintConfig,
		fix: true,
		expectedOutput: `import {Button} from '@guardian/source-react-components'`,
	},
	{
		name: `Errors if it can't autofix something`,
		contents: `import {remSize} from '@guardian/src-foundations/size/global'`,
		eslintConfig: componentsEslintConfig,
		fix: true,
		expectedErrors: ['The following export(s) have been removed: remSize'],
	},
	{
		name: `Combines multiple imports from the same package`,
		contents: `import {Button} from '@guardian/src-button';import {Label} from '@guardian/src-label';`,
		eslintConfig: componentsEslintConfig,
		fix: true,
		expectedOutput: `import {Button,Label} from '@guardian/source-react-components';`,
	},
	{
		name: `Ignores non-source packages`,
		contents: `import {Button} from '@guardian/somewhere-else';`,
		eslintConfig: componentsEslintConfig,
		fix: true,
		expectedOutput: `import {Button} from '@guardian/somewhere-else';`,
	},
];
