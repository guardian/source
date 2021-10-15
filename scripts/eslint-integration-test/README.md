# ESLint Integration Test

This package provides [integration tests](#tests) for the `@guardian/eslint-plugin-source` ESLint plugin.

It also acts as a [playground](#playground) to test out the plugin locally.

## Setup

This package install the eslint plugin locally. To get it setup:

1. Build the plugin - `yarn build:eslint`

2. Delete the `scripts/eslint-integration-test/node_modules` directory

3. Reinstall the plugin - `yarn`

## Tests

The integration tests are run by a custom framework contained in the `./src` directory.

For each of the [configured](#configuration) tests, the contents is written to a file and the linter is run. The tests then verify that the errors and final state of the file lines up with the configured expectations.

The tests can be run using the following command:

`yarn workspce eslint-integration-test lint`

### Configuration

The test configuration in `test-config.ts` is used to drive the integration tests. This configuration should be an array of objects that follow the following schema:

| Name           | Type     | Required | Description                                                                                                  |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| name           | string   | true     | A unique name describing the test case                                                                       |
| contents       | string   | true     | The file contents to run the linter on                                                                       |
| fix            | boolean  | true     | Whether to run ESLint with the `--fix` flag                                                                  |
| expectedErrors | string[] | false    | An array of exected errors that the linter will flag                                                         |
| expectedOutput | string[] | false    | The expected contents of the file after the linter has run (should be used with the `fix` value set to true) |

#### Example Configuration

```js
[
    {
        name: 'Errors for an import from a src component package',
        contents: `import {Button} from '@guardian/src-button'`,
        fix: false,
        expectedErrors: [
            `@guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead`,
        ],
    },
    {
        name: 'Fixes a single import from a src component package',
        contents: `import {Button} from '@guardian/src-button'`,
        fix: true,
        expectedOutput: `import {Button} from '@guardian/source-react-components'`,
    },
];
```

## Playground

Linting can be run manually in this package using the following command from the root directory:

`yarn workspce eslint-integration-test lint`
