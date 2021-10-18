import { RuleTester } from 'eslint';
import { validImportPaths } from './valid-import-path';

const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
});

ruleTester.run('valid-import-paths', validImportPaths, {
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
			// A single import from the root of foundations
			code: "import { transitions } from '@guardian/src-foundations';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: "import { transitions } from '@guardian/source-foundations';",
		},
		{
			// A single import from a sub-module of foundations
			code: "import { height } from '@guardian/src-foundations/size';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: "import { height } from '@guardian/source-foundations';",
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
			output: "import type { LabelProps } from '@guardian/source-react-components';",
		},
		{
			// A single type import from the root of foundations
			code: "import type { Breakpoint } from '@guardian/src-foundations';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: "import type { Breakpoint } from '@guardian/source-foundations';",
		},
		{
			// A single type import from a sub-module of foundations
			code: "import type { Breakpoint } from '@guardian/src-foundations/mq';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: "import type { Breakpoint } from '@guardian/source-foundations';",
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
			output: "import { Label, Legend } from '@guardian/source-react-components';",
		},
		{
			// Exports that aren't available from foundations any more
			code: `import { remSize } from '@guardian/src-foundations/size/global';`,
			errors: [
				{
					message:
						'The following export(s) have been removed: remSize.',
				},
			],
			output: `import { remSize } from '@guardian/src-foundations/size/global';`,
		},
		{
			// Exports that aren't available from foundations any more, plus one that is
			code: `import { remSize, size } from '@guardian/src-foundations/size/global';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.\nThe following export(s) have been removed: remSize.",
				},
			],
			output: `import { remSize } from '@guardian/src-foundations/size/global';
import {  size } from '@guardian/source-foundations';`,
		},
		{
			// Exports that aren't available from foundations any more using an alias
			code: `import { remSize as rs } from '@guardian/src-foundations/size/global';`,
			errors: [
				{
					message:
						'The following export(s) have been removed: remSize.',
				},
			],
			output: `import { remSize as rs } from '@guardian/src-foundations/size/global';`,
		},
		{
			// Exports that aren't available from foundations any more using an alias, plus one that is
			code: `import { remSize as rs, size as s } from '@guardian/src-foundations/size/global';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.\nThe following export(s) have been removed: remSize.",
				},
			],
			output: `import { remSize as rs } from '@guardian/src-foundations/size/global';
import {  size as s } from '@guardian/source-foundations';`,
		},
		{
			// Exports that have changed names (foundations typography)
			code: `import { headline } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: `import { headlineObjectStyles } from '@guardian/source-foundations';`,
		},
		{
			// Exports that have changed names, alongside some that haven't
			code: `import { headline, bodySizes } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: `import { headlineObjectStyles, bodySizes } from '@guardian/source-foundations';`,
		},
		{
			// Exports that have changed names using an alias (foundations typography)
			code: `import { headline as hl } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: `import { headlineObjectStyles as hl } from '@guardian/source-foundations';`,
		},
		{
			// Exports that have changed names, alongside some that haven't, using an alias
			code: `import { headline as hl, bodySizes as bs } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead.",
				},
			],
			output: `import { headlineObjectStyles as hl, bodySizes as bs } from '@guardian/source-foundations';`,
		},
		{
			// Themes that now come from react-components
			code: `import { labelDefault } from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output: `import { labelDefault } from '@guardian/source-react-components';`,
		},
		{
			// Import default
			code: `import themes from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output: `import themes from '@guardian/src-foundations/themes';`,
		},
		{
			// Import everything
			code: `import * as themes from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output: `import * as themes from '@guardian/src-foundations/themes';`,
		},
		{
			// Import default, and some named things
			code: `import themes, {labelBrand} from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead.",
				},
			],
			output: `import themes, {labelBrand} from '@guardian/src-foundations/themes';`,
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
			// Export everything from the root of foundations
			code: `export * from '@guardian/src-foundations';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-foundations' instead.`,
				},
			],
			output: `export * from '@guardian/src-foundations';`,
		},
		{
			// Export everything with an alias from the root of foundations
			code: `export * as foundations from '@guardian/src-foundations';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-foundations' instead.`,
				},
			],
			output: `export * as foundations from '@guardian/src-foundations';`,
		},
		{
			// Export everything with an alias from themes
			code: `export * from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-react-components' instead.`,
				},
			],
			output: `export * from '@guardian/src-foundations/themes';`,
		},
		{
			// Export everything from a submodule of foundations
			code: `export * from '@guardian/src-foundations/size';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-foundations' instead.`,
				},
			],
			output: `export * from '@guardian/src-foundations/size';`,
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
			// Export something that's changed names from foundations
			code: `export { headline } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message: `@guardian/src-* packages are deprecated. Export from '@guardian/source-foundations' instead.`,
				},
			],
			output: `export { headline } from '@guardian/source-foundations';`,
		},
	],
});
