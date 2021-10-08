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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
				},
			],
			output: "import { transitions } from '@guardian/source-foundations';",
		},
		{
			// A simple import from a sub-module of foundations
			code: "import { height } from '@guardian/src-foundations/size';",
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
				},
			],
			output: "import { Label, Legend } from '@guardian/source-react-components';",
		},
		{
			// Multiple imports from different parts of foundations
			code: `
				import { height } from '@guardian/src-foundations/size';
				import { breakpoints } from '@guardian/src-foundations';
			`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
				},
			],
			output: "import { breakpoints, height } from '@guardian/source-foundations';",
		},
		{
			// Multiple imports from multiple component packages
			code: `
				import { Button } from '@guardian/src-button';
				import { Label } from '@guardian/src-label';
			`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
				},
			],
			output: "import { Button, Label } from '@guardian/source-react-components';",
		},
		{
			// Multiple imports from multiple component packages
			code: `
				import { Button } from '@guardian/src-button';
				import { something } from 'somewhere-else';
				import { Label } from '@guardian/src-label';
			`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
				},
			],
			output: `
				import { Button, Label } from '@guardian/source-react-components';
				import { something } from 'somewhere-else';
			`,
		},
		{
			// Exports that aren't available from foundations any more
			code: `import { remSize } from '@guardian/src-foundations/size/global';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
				},
			],
			output: undefined,
		},
		{
			// Exports that have changed names (foundations typography)
			code: `import { headline } from '@guardian/src-foundations/typography/obj';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
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
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-foundations' instead",
				},
			],
			output: `import { headlineObjectStyles, bodySizes } from '@guardian/source-foundations';`,
		},
		{
			// Themes that now come from react-components
			code: `import { labelDefault } from '@guardian/src-foundations/themes';`,
			errors: [
				{
					message:
						"@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead",
				},
			],
			output: `import { labelDefault } from '@guardian/source-react-components';`,
		},
	],
});
