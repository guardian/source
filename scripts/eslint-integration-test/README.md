# ESLint Integration Test

This package provides a test area for the `@guardian/eslint-plugin-source` ESLint plugin.

Linting can be run in this package using the following command from the root directory:

`yarn workspce eslint-integration-test lint`

## Setup

This package install the eslint plugin locally. To get it setup:

1. Build the plugin - `yarn build:eslint`

2. Delete the `scripts/eslint-integration-test/node_modules` directory

3. Reinstall the plugin - `yarn`
