# `Divider`

Inserts a line on the page acting as a section break dividing content

## Install

```sh
$ yarn add @guardian/src-divider
```

## Use

```tsx
import { Divider } from '@guardian/src-divider';

const Content = () => (
    <>
        <p>Some text</p>
        <Divider />
        <p>Some text</p>
        <Divider
            size="small"
            spaceAbove="loose"
            displayText="I am centered inside the divider"
        />
        <p>Some text</p>
    </>
);
```

## Divider Props

### `size`

**`'partial' | 'full'` **

`full` means the divider will span the full width of the content
`partual` left aligns the divider and limits its length

### `spaceAbove`

**`'tight' | 'loose'`**

How much space is given above the divider

### `displayText`

**`string`**

This text is centered inside the dividing line
