# Utilities

reusable style snippets for the web, or functions that you may find useful. Style snippets are expressed as template strings,
and should be compatible with any CSS-in-JS library that accepts this notation.

## Install

```sh
$ yarn add @guardian/src-utilities
```

## Use

### Media queries

```ts
import { from, until, between } from "@guardian/src-utilities"

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

For elements that should not appear to sighted users, but are useful to assistive technology users.

```ts
import { visuallyHidden } from "@guardian/src-utilities"

const label = css`
    ${visuallyHidden};
`
```

### Focus Halo

This mixin provides a [clear focus state](https://zeroheight.com/2a1e5182b/p/08dc26/t/314e46) for
elements that may receive keyboard focus.

```ts
import { focusHalo } from "@guardian/src-utilities"

const input = css`
    ${focusHalo};
    width: 200px;
    height: 44px;
`
```
