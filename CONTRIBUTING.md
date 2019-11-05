# Contribution guidelines

## Documentation

-   To enable better integration with [our documentation site](https://zeroheight.com/2a1e5182b), each component variant should be represented as a separate story at its own URL.

## Themes

-   Ensure each variant of the component works against light and dark themes.
    -   Some components may also need to work against brand blue, reader revenue yellow and reader revenue blue backgrounds.

## Testing

-   Ensure your component is accessible
-   Ensure your component works against the [supported browsers](https://www.theguardian.com/help/recommended-browsers) (you can ask Simon Adcock for access to Browserstack)

## Publishing

-   Only edit one package per pull request. Don’t bump versions manually
-   Test that your component can be used in a real project (e.g. [dotcom-rendering](https://github.com/guardian/dotcom-rendering)). Use [`yarn link`](https://yarnpkg.com/en/docs/cli/link) to avoid having to perform a real publish, and [`yarn pack`](https://yarnpkg.com/en/docs/cli/pack) to see exactly which files would be published.
