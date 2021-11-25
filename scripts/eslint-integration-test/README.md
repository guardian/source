# ESLint Integration Test

This package provides [integration tests](#tests) for the `@guardian/eslint-plugin-source-foundations` and `@guardian/eslint-plugin-source-react-components` ESLint plugins.

It also acts as a [playground](#playground) to test out the plugins locally.

## Setup

This package install the eslint plugin locally. To get it setup:

1. Build the plugin - `yarn build:eslint`

2. Delete the `scripts/eslint-integration-test/node_modules` directory

3. Reinstall the plugin - `yarn`

## Tests

The integration tests are run by a custom framework contained in the `./src` directory.

For each of the [configured](#configuration) tests, the test file contents and test linter configuration are written to temporary files and the linter is run. The tests then verify that the errors and final state of the file lines up with the configured expectations.

The tests can be run using the following command:

`yarn workspace eslint-integration-test lint`

### Configuration

The test configuration in `test-config.ts` is used to drive the integration tests. This configuration should be an array of objects that follow the following schema:

| Name           | Type     | Required | Description                                                                                                  |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| name           | string   | true     | A unique name describing the test case                                                                       |
| contents       | string   | true     | The file contents to run the linter on                                                                       |
| eslintConfig\* | string   | true     | The linter configuration to use for the test                                                                 |
| fix            | boolean  | true     | Whether to run ESLint with the `--fix` flag                                                                  |
| expectedErrors | string[] | false    | An array of exected errors that the linter will flag                                                         |
| expectedOutput | string[] | false    | The expected contents of the file after the linter has run (should be used with the `fix` value set to true) |

\* basic configurations for each of the plugins are provided in `./src/eslint-config`

#### Example Configuration

```ts
import type { Test } from './src/types';
import {
    componentsEslintConfig,
    foundationsEslintConfig,
} from './src/eslint-config';

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
        name: 'Fixes a single import from src-foundations',
        contents: `import {size} from '@guardian/src-foundations'`,
        eslintConfig: foundationsEslintConfig,
        fix: true,
        expectedOutput: `import {size} from '@guardian/source-foundations'`,
    },
];
```

## Playground

Linting can be run manually in this package using the following commands from the root directory:

**`yarn workspce eslint-integration-test lint:foundations`** to lint the `foundations-playground.ts` file using the `plugin:@guardian/source-foundations/recommended` configuration

or

**`yarn workspce eslint-integration-test lint:react-components`** to lint the `react-components-playground.ts` file using the `plugin:@guardian/source-react-components/recommended` configuration
