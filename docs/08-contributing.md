# Contributing

> How to contribute to the Source Design System for developers.

## Local development

Install dependencies using Yarn:

```shell
$ yarn
```

Develop using Storybook:

```shell
$ yarn storybook
```

## Guidelines

### Creating new components

-   New components should be added to the [Development Kitchen](../packages/@guardian/source-react-components-development-kitchen).
-   New components must have a CODEOWNER.

### Using Emotion

-   First familiarise yourself with Emotion's excellent documentation (we use [the React flavour](https://emotion.sh/docs/introduction#react))
-   Prefer composing styles using the `css` tag and the `css` prop.
-   Avoid using `styled` to create or extend components.
    -   Every styled component rendered creates an additional `Context.Consumer` component, which can lead to [performance issues](https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/).
-   <em>Avoid dynamic styles</em>. Prefer using conditional logic in the component to compose numerous small chunks of CSS using the `css` prop.
-   One example of unavoidable dynamic styles is Theming.

### Themes

-   Ensure each variant of the component works against the [default theme](https://www.theguardian.design/2a1e5182b/p/1377a6-themes/b/293ddb).
    -   Some components may also need to work against [core brand](https://www.theguardian.design/2a1e5182b/p/1377a6-themes/b/4893db) and [alternative brand](https://www.theguardian.design/2a1e5182b/p/1377a6-themes/b/21c6cc) backgrounds.
-   Theme colours should be added to a corresponding module under packages/@guardian/src-foundations/src/themes. These are passed to the `<ThemeProvider>`, and subsequently down to the component via the `css` prop.
-   Ensure the theme package only contains theme-related colours. Some colours may apply to all themes. These should be defined in the component package, in `styles.tsx`.

### Documentation

-   To enable better integration with our documentation site, each component variant should be represented as a separate story at its own URL.

### Testing

-   Ensure you test your changes against our [accessibility testing guide](06-accessibility.md).
-   Ensure your component works against the following browsers (you can [ask for access to Browserstack](mailto:divx@theguardian.com?subject=Browserstack login)):
    -   **Chrome 77+**
    -   **Firefox 68+**
    -   **Edge 17+**
    -   **Safari 12+**
    -   **IE11**
-   Ensure your component can be imported and server-rendered on a project running **Node.js v10**.
-   Ensure your component works on touchscreen devices.

### Commits

-   Before raising a pull request, we request that you squash your commits. We prefer to see as few commits as possible as it makes the [CHANGELOG](https://github.com/guardian/source/blob/main/CHANGELOG.md) (slightly) more readable.
-   Each commit should contain changes to exactly one package. If you need to edit multiple packages as part of a change, please divide these into separate commits. Again, this is for CHANGELOG readability.
-   Commit messages should read as if you are instructing someone else what to do. It usually helps to start with a verb. For example, "Increase the line height of the body text".

### Raising a pull request

-   Don’t bump the package version as part of a pull request. Maintainers will take care of this as part of the release process.
-   Test that your component can be used in a real project (e.g. [dotcom-rendering](https://github.com/guardian/dotcom-rendering)). Use [`yarn link`](https://yarnpkg.com/en/docs/cli/link) to avoid having to perform a real publish, and [`yarn pack`](https://yarnpkg.com/en/docs/cli/pack) to see exactly which files would be published.
-   If your change extends the API of a component or the foundations (e.g. you are adding a new component, a new prop or exporting a new type), please update the [`source-package-validation`](packages/@guardian/source-package-validation/README.md) package.

## Publishing

To publish Source, you must be on a clean `main` branch, logged into npm on
your terminal with an account under the [Guardian's npm
organisation](https://www.npmjs.com/settings/guardian/packages).

To publish `source-*` packages that have changed since the last release, run:

```sh
$ yarn release
```

The command line tool will highlight packages that have changed, and ask you to
specify the type of release you are performing (e.g. major / minor / patch).

### Publishing src-* packages

To publish `src-*` packages that have changed since the last release, you should
first run:

```sh
$ yarn verbump:prerelease:src
```

Changes should be committed to git. This ensures all `src-*` packages have
changed and will be updated at the same time with the same version number. You
may then run:

```sh
$ yarn release
```

### Force publishing unchanged packages

There are times when you want Lerna to publish a new version of a package even
when the package source code hasn't changed. In these cases, you should:

- manually bump the version of the package in its `package.json`
- commit the version bump change
- run `yarn release:from-package`

The package will be published at the version you specified in the `package.json`.
