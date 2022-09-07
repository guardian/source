# `@guardian/source-foundations`

[![npm](https://img.shields.io/npm/v/@guardian/source-foundations)](https://www.npmjs.com/package/@guardian/source-foundations)

The atoms from which all our visual design is built. They may be used with any CSS-in-JS library.

## Install

Foundations are installed as a JavaScript package via Yarn:

```sh
$ yarn add @guardian/source-foundations
```

or:

```sh
$ npm install @guardian/source-foundations
```

## Colours

Guardian colours can be found in the [`palette` documentation](https://guardian.github.io/source/?path=/story/packages-source-foundations-palette--page).

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
