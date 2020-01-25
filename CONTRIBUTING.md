# Contribution guidelines

## Using Emotion

-   Prefer composing styles using the `css` tag and the `css` prop.
-   Avoid using `styled` to create or extend components. Every styled component rendered creates an additional `Context.Consumer` component, which can lead to [performance issues](https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/).
-   Avoid dynamic styles. Prefer using conditional logic in the component to compose numerous small chunks of CSS using the `css` prop.
-   One example of unavoidable dynamic styles is Theming.

## Themes

-   Ensure each variant of the component supports light and dark themes.
    -   Some components may also need to work against mono, brand blue and brand yellow backgrounds.
-   Theme colours should be added to a corresponding module under src/core/foundations/themes. These are passed to the `<ThemeProvider>`, and subsequently down to the component via the `css` prop.
-   Ensure the theme package only contains theme-related colours. Define generic colours locally in the component styles.

## Documentation

-   To enable better integration with [our documentation site](https://zeroheight.com/2a1e5182b), each component variant should be represented as a separate story at its own URL.

## Testing

-   Ensure your component passes the accessibility checklist in the pull request template
-   Ensure your component works against the [supported browsers](https://www.theguardian.com/help/recommended-browsers) (you can ask Simon Adcock for access to Browserstack)
-   Ensure your component works on touchscreen devices

## Publishing

-   Only edit one package per pull request.
-   Don’t bump package versions as part of a pull request
-   Test that your component can be used in a real project (e.g. [dotcom-rendering](https://github.com/guardian/dotcom-rendering)). Use [`yarn link`](https://yarnpkg.com/en/docs/cli/link) to avoid having to perform a real publish, and [`yarn pack`](https://yarnpkg.com/en/docs/cli/pack) to see exactly which files would be published.
