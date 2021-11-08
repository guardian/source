# `@guardian/eslint-plugin-source-react-components`

> ESLint plugin for Guardian projects using the `@guardian/source-react-components` package.

## Installation

```bash
yarn add -D @guardian/eslint-plugin-source-react-components
```

or

```bash
npm install --save-dev @guardian/eslint-plugin-source-react-components
```

## Usage

```js
// ESLint configuration file
{
    "extends": "plugin:@guardian/eslint-plugin-source-react-components/recommended"
}
```

## Known Issues

-   New theme names not always updated automatically

    The theme variables have changed both name and location in the v4. The plugin should automatically update both but sometimes this does not work.

-   Import de-duplication sometimes leaves extra commas

    Now that sub-modules are not longer used in foundations and components have been consolidated into one package, a number of `src-*` import can be consolidated into one or two `source-*` imports. There is a bug with this where, in some edge cases, an extra comma is left in the import, making it invalid.
