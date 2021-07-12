# Using Emotion

[Emotion](https://emotion.sh/) is a CSS-in-JS library that provides component-scoping, encapsulation and composition for your styles.

Our Foundations may be used with any CSS-in-JS library, but since our components use Emotion, it makes sense to use Emotion in your application also.

## Getting started

Our components use `@emotion/react` which is the version of Emotion that is optimised for use within React applications.

```shell
$ yarn add @emotion/react@^11.1.2
```

## Basic usage

### With Babel

You can use the `css` prop, in conjunction with `@emotion/babel-preset-css-prop`:

```shell
$ yarn add @emotion/babel-preset-css-prop@^11.1.2 -D
```

In your `.babelrc`:

```json
{
    "presets": ["@emotion/babel-preset-css-prop"]
}
```

**Note:** If you use `@babel/preset-react` or `@babel/preset-typescript` ensure that `@emotion/babel-preset-css-prop` is inserted _after_ them in your babel config.

### With TypeScript

If you are using [React's automatic runtime](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) (recommended) you should add the following to your `tsconfig.json`. This tells TypeScript to use React's automatic runtime and lets TypeScript know where it can find the JSX namespace.

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@emotion/react"
    }
}
```

### In your code

```jsx
import { css } from '@emotion/react';

const color = 'darkgreen';

render(
    <div
        css={css`
            background-color: hotpink;
            &:hover {
                color: ${color};
            }
        `}
    >
        This has a hotpink background.
    </div>,
);
```

We suggest you avoid using `styled` to create or extend components. Every styled component rendered creates an additional `Context.Consumer` component, which can lead to [performance issues](https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/).

## Advanced usage

We recommend reading at least the following pages on the Emotion documentation site:

-   [Composition](https://emotion.sh/docs/composition)
-   [Object styles](https://emotion.sh/docs/object-styles)
-   [Nested selectors](https://emotion.sh/docs/nested)

If your app is doing server-side rendering, you need to follow the [Advanced Approach](https://emotion.sh/docs/ssr#advanced-approach) to SSR setup. This is because our components use sibling selectors that may be interrupted by the way Emotion embeds `<style>` tags directly into your markup.
