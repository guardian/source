# Foundations

[![npm](https://img.shields.io/npm/v/@guardian/source-foundations)](https://www.npmjs.com/package/@guardian/source-foundations)

The atoms from which all our visual design is built. They may be used with any CSS-in-JS library.

## Install

Foundations are installed as a JavaScript package via Yarn:

```sh
$ yarn add @guardian/source-foundations
```

or NPM:

```sh
$ npm install @guardian/source-foundations
```

## Colour

The [colour](https://guardian.github.io/source/?path=/story/packages-source-foundations-colour--page) palette comprises **colour tokens** and **global colours**.

[Colour tokens](https://theguardian.design/2a1e5182b/p/1377a6-tokens/b/293ddb) (e.g. `text.primary`) are organised by the context in which they may be used. Where possible, prefer using colour tokens.

[Global colours](https://theguardian.design/2a1e5182b/p/492a30-light-palette) (e.g. `neutral.7`) do not specify a context , and should be used only if an appropriate colour token is not available.

```js
import { text, background } from '@guardian/source-foundations';

const headline = css`
    color: ${text.primary};
    background: ${background.primary};
`;

// color: #121212;
// background-color: #ffffff;
```

## Space

Our [space](https://guardian.github.io/source/?path=/story/packages-source-foundations-space--page) system is structured as increments of 4px.

```js
import { space } from '@guardian/source-foundations';

const spaceAfter = css`
    margin-bottom: ${space[3]}px;
`;

// margin-bottom: 12px;
```

## Size

[Size](https://guardian.github.io/source/?path=/story/packages-source-foundations-size--page) units may be used to set the height, max-height, width or max-width of a component.

```js
import { width, height } from '@guardian/source-foundations';

const checkbox = css`
    width: ${width.inputXsmall}px;
    height: ${height.inputXsmall}px;
`;

// width: 24px;
// height: 24px;
```

## Typography

[Typography](https://guardian.github.io/source/?path=/story/packages-source-foundations-typography--page) is expressed as methods that return snippets of CSS depending on the desired font family and size.

```js
import { headline } from '@guardian/source-foundations';

const h1 = css`
    ${headline.medium()};
`;

// font-family: GH Guardian Headline, Georgia, serif;
// font-size: 2.13rem;
```

## Media queries

We provide [media queries](https://guardian.github.io/source/?path=/story/packages-source-foundations-media-queries--page) for each breakpoint in our grid layout.

```js
import { from, until, between } from '@guardian/source-foundations';

const styles = css`
    padding: 0 10px;

    ${from.mobileLandscape} {
        padding: 0 20px;
    }

    ${between.phablet.and.desktop} {
        padding: 0 32px;
    }

    ${until.wide} {
        padding: 0 40px;
    }
`;

// padding: 0 10px;
// @media (min-width: 480px) {
//   padding: 0 20px;
// }
// @media (min-width: 660px) and (max-width: 979px) {
//   padding: 0 32px;
// }
// @media (max-width: 1300px) {
//   padding: 0 40px;
// }
```
