# Button

This is the editorial version of the core `Button` coomponent. This editorial version
requires the `format` prop and uses that to override `Button` styles based on
`format.theme`

Also exported is `LinkButton` which, like in core, offers a href version of the buttom

## Install

```sh
$ yarn add @guardian/src-ed-button @guardian/src-foundations
```

or

```sh
$ npm i @guardian/src-ed-button @guardian/src-foundations
```

## Use

```jsx
import { Button } from '@guardian/src-ed-button';

const SomeButtons = () => (
    <Button
        priority="primay"
        onClick={() => {}}
        format={{
            display: Display.Standard,
            design: Design.Article,
            theme: Pillar.News,
        }}
    >
        Click me
    </Button>
    <LinkButton
        priority="subdued"
        size="small"
        href="https://www.theguardian.com/uk"
        format={{
            display: Display.Standard,
            design: Design.Article,
            theme: Special.Labs,
        }}
    >
        Click me too
    </LinkButton>
);
```

## `Button` Props

In addition to all the standard `Button` and `LinkButton` props, we also have

### `format`

See **`@guardian/types`**: https://github.com/guardian/types/blob/main/src/format.ts

Which is what we use to decide the editorial styling overrides
