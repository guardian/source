# Utilities

**DEPRECATED!** This library is deprecated and will soon be deleted. Please use `@guardian/src-foundations`

Reusable style snippets for the web, or functions that you may find useful. Style snippets are expressed as template strings,
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

Output:

```css
.class-name {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    top: 0;
    left: 0;
}
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

Output:

```css
.class-name {
    outline: 0;
    box-shadow: 0 0 0 5px #00b2ff;
    z-index: 9;
    width: 200px;
    height: 44px;
}
```
