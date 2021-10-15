import type { Test } from './src/types';

export const testConfig: Test[] = [
	{
		name: 'Errors for an import from an src-* package',
		contents: `import {Button} from '@guardian/src-button'`,
		fix: false,
		expectedErrors: [
			`@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead`,
		],
	},
	{
		name: 'Fixes a single import from a component package',
		contents: `import {Button} from '@guardian/src-button'`,
		fix: true,
		expectedOutput: `import {Button} from '@guardian/source-react-components'`,
	},
];
