# Lines

📣 For more context and visual guides relating to lines usage, visit the [Source Design System website](https://www.theguardian.design)

## Install

```sh
$ yarn add @guardian/src-ed-lines @guardian/src-foundations
```

or

```sh
$ npm i @guardian/src-ed-lines @guardian/src-foundations
```

## Use

```jsx
import { Lines } from '@guardian/src-ed-lines';

const Section = () => (
    <>
        <Lines count={8} />
        <Lines effect="squiggly" />
        <Lines count={4} effect="dotted" colour="blue" />
    </>
);
```

## `Lines` Props

### `effect`

**`"straight" | "squiggly" | "dotted" | "dashed"`** _= "straight"_

The appearance of the lines.

### `count`

**`1 | 4 | 8`** _= 4_

How many lines appear.

### `color`

**`string`** _= line.primary_

The colour of the lines
