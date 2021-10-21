import { RuleTester } from 'eslint';
import { noStarImportsOrExports } from './no-star-imports-or-exports';

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
});

ruleTester.run('no-star-imports-or-exports', noStarImportsOrExports, {
	valid: [
		`import { Label } from '@guardian/source-react-components'`,
		`import type { LabelProps } from '@guardian/source-react-components'`,
		`import { breakpoints } from '@guardian/source-foundations'`,
		`import type { Breakpoint } from '@guardian/source-foundations'`,
		`import { Label } from '@guardian/src-label'`,
		`import type { LabelProps } from '@guardian/src-label'`,
		`import { breakpoints } from '@guardian/src-foundations'`,
		`import type { Breakpoint } from '@guardian/src-foundations'`,
	],
	invalid: [
		{
			// Import everything
			code: `import * as themes from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						'Importing * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named imports instead.',
				},
			],
		},
		{
			// Export everything from a component
			code: `export * from '@guardian/src-button';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything from the root of foundations
			code: `export * from '@guardian/src-foundations';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything with an alias from the root of foundations
			code: `export * as foundations from '@guardian/src-foundations';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything from a submodule of foundations
			code: `export * from '@guardian/src-foundations/size';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything from helpers
			code: `export * from '@guardian/src-helpers';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Import everything from source-foundations
			code: `import * as foundations from '@guardian/source-foundations';`,
			errors: [
				{
					message:
						'Importing * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named imports instead.',
				},
			],
		},
		{
			// Import everything from source-react-components
			code: `import * as components from '@guardian/source-react-components';`,
			errors: [
				{
					message:
						'Importing * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named imports instead.',
				},
			],
		},
		{
			// Import everything from source-react-components-development-kitchen
			code: `import * as kitchen from '@guardian/source-react-components-development-kitchen';`,
			errors: [
				{
					message:
						'Importing * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named imports instead.',
				},
			],
		},
		{
			// Export everything from source-foundations
			code: `export * from '@guardian/source-foundations';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything from source-react-components
			code: `export * from '@guardian/source-react-components';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
		{
			// Export everything from source-react-components-development-kitchen
			code: `export * from '@guardian/source-react-components-development-kitchen';`,
			errors: [
				{
					message:
						'Exporting * from @guardian/src-* and @guardian/source-* packages is not recommended. Use named exports instead.',
				},
			],
		},
	],
});
