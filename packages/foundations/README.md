# Foundations

The Guardian's foundations are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as Emotion.

## Install

```sh
$ yarn add @guardian/src-foundations
```

## Use

### [Palette](https://zeroheight.com/2a1e5182b/p/938810)

```ts
import { palette } from "@guardian/src-foundations"

const backgroundColor = css`
    background-color: ${palette.neutral[97]};
`
```

### [Typography](https://zeroheight.com/2a1e5182b/p/930d69)

```ts
import { headline, body, textSans } from "@guardian/src-foundations/typography"

const h1 = css`
    ${headline.large({ fontWeight: "bold" })};
`

const p = css`
    ${body.main()};
`

const copyright = css`
    ${textSans.xsmall()};
`
```

### Media queries

```ts
import { from, until, between } from "@guardian/src-foundations/mq"

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
`
```

### Visually Hidden

For elements that should not appear to sighted users, but are useful to assistive technology users.

```ts
import { visuallyHidden } from "@guardian/src-foundations/accessibility"

const label = css`
    ${visuallyHidden};
`
```

### Focus Halo

This mixin provides a [clear focus state](https://zeroheight.com/2a1e5182b/p/08dc26/t/314e46) for
elements that may receive keyboard focus.

```ts
import { focusHalo } from "@guardian/src-foundations/accessibility"

const input = css`
    ${focusHalo};
    width: 200px;
    height: 44px;
`
```
