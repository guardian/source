import { RuleTester } from 'eslint';
import { validImportPath } from './valid-import-path';

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
});

ruleTester.run('valid-import-path', validImportPath, {
	valid: [
		`import { Label } from '@guardian/source-react-components'`,
		`import type { LabelProps } from '@guardian/source-react-components'`,
		`import { breakpoints } from '@guardian/source-foundations'`,
		`import type { Breakpoint } from '@guardian/source-foundations'`,
	],
	invalid: [
		{
			// A single component import from a component package
			code: "import { Label } from '@guardian/src-label';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output: "import { Label } from '@guardian/source-react-components';",
		},
		{
			// A single type import from a component package
			code: "import type { LabelProps } from '@guardian/src-label';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output:
				"import type { LabelProps } from '@guardian/source-react-components';",
		},
		{
			// Multiple imports from a single package
			code: "import { Label, Legend } from '@guardian/src-label';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output:
				"import { Label, Legend } from '@guardian/source-react-components';",
		},
		{
			// Helpers removed exports
			code: `import { storybookBackgrounds } from '@guardian/src-helpers';`,
			errors: [
				{
					message:
						'The following export(s) have been removed: storybookBackgrounds.',
				},
			],
			output: `import { storybookBackgrounds } from '@guardian/src-helpers';`,
		},
		{
			// Helpers moved exports
			code: `import type { Props } from '@guardian/src-helpers';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.`,
				},
			],
			output: `import type { Props } from '@guardian/source-react-components';`,
		},
		{
			// Export everything from a component
			code: `export * from '@guardian/src-button';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-react-components' instead.`,
				},
			],
			output: `export * from '@guardian/src-button';`,
		},
		{
			// Export everything from helpers
			code: `export * from '@guardian/src-helpers';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-react-components' instead.`,
				},
			],
			output: `export * from '@guardian/src-helpers';`,
		},
		{
			// Export something from helpers
			code: `export type { Props } from '@guardian/src-helpers';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-react-components' instead.`,
				},
			],
			output: `export type { Props } from '@guardian/source-react-components';`,
		},
		{
			// Export something that's gone from helpers
			code: `export { storybookBackgrounds } from '@guardian/src-helpers';`,
			errors: [
				{
					message: `The following export(s) have been removed: storybookBackgrounds.`,
				},
			],
			output: `export { storybookBackgrounds } from '@guardian/src-helpers';`,
		},
		{
			// Themes that now come from react-components and have changed names (from component)
			code: `import { buttonReaderRevenue } from '@guardian/src-button';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.\nThe following export(s) have been renamed [from -> to]: buttonReaderRevenue -> buttonThemeReaderRevenue",
				},
			],
			output: `import { buttonReaderRevenue } from '@guardian/source-react-components';`,
		},
	],
});
