# Buttom

This is the editorial version of the core `Button` coomponent. This editorial version
requires the `format` prop and uses that to override `Button` styles based on
`format.theme`

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
    <Button
        priority="subdued"
        size="small"
        format={{
            display: Display.Standard,
            design: Design.Article,
            theme: Special.Labs,
        }}
    >
        Click me too
    </Button>
);
```

## `Button` Props

In addition to all the standard `Button` props we also have

### `format`

See **`@guardian/types`**: https://github.com/guardian/types/blob/main/src/format.ts
