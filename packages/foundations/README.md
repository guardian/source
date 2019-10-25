# Foundations

The Guardian's design tokens are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as Emotion.

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

### Media queries

**_DEPRECATED!_** Please import media queries from [`@guardian/src-utilities`](https://github.com/guardian/source-components/tree/master/packages/utilities#media-queries)

```ts
import { mobileLandscape, from, until } from "@guardian/src-foundations"

const styles = css`
    padding: 0 10px;

    ${mobileLandscape} {
        padding: 0 20px;
    }

    ${from.phablet.until.desktop} {
        padding: 0 32px;
    }

    ${until.wide} {
        padding: 0 40px;
    }
`
```

Output:

```css
.class-name {
    padding: 0 10px;
}

@media (min-width: 480px) {
    .class-name {
        padding: 0 20px;
    }
}

@media (min-width: 660px) and (max-width: 980px) {
    .class-name {
        padding: 0 32px;
    }
}

@media (max-width: 1300px) {
    .class-name {
        padding: 0 40px;
    }
}
```

### Visually Hidden

**_DEPRECATED!_** Please import `visuallyHidden` from [`@guardian/src-utilities`](https://github.com/guardian/source-components/tree/master/packages/utilities#visually-hidden)

For elements that should not appear to sighted users, but are useful to assistive technology users.

```ts
import { visuallyHidden } from "@guardian/src-foundations"

const label = css`
    ${visuallyHidden};
`
```

### Focus Halo

**_DEPRECATED!_** Please import `focusHalo` from [`@guardian/src-utilities`](https://github.com/guardian/source-components/tree/master/packages/utilities#focus-halo)

This mixin provides a [clear focus state](https://zeroheight.com/2a1e5182b/p/08dc26/t/314e46) for
elements that may receive keyboard focus.

```ts
import { focusHalo } from "@guardian/src-foundations"

const input = css`
    ${focusHalo};
    width: 200px;
    height: 44px;
`
```
