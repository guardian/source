# Lines

📣 For more context and visual guides relating to lines usage, visit the [Source Design System website](https://www.theguardian.design)

## Use

```js
import { Lines } from '@guardian/editorial';

const Section = () => (
    <>
        <Lines count={8} />
        <Lines effect="squiggly" />
    </>
);
```

## `Lines` Props

### `effect`

**`"straight" | "dotted" | "squiggly"`** _= "straight"_

The appearance of the lines.

### `count`

**`4 | 8`** _= 4_

How many lines appear.
