# Link

📣 For more context and visual guides relating to lines usage, visit the [Source Design System website](https://www.theguardian.design)

## Install

```sh
$ yarn add @guardian/src-ed-lines @guardian/src-foundations
```

## Use

```js
import { Lines } from "@guardian/src-ed-lines"

const Section = () => (
    <>
        <Lines count={8} />
        <Lines effect="squiggly" />
    </>
)
```

## `Lines` Props

### `effect`

**`"straight" | "dotted" | "squiggly"`** _= "straight"_

The appearance of the lines

### `count`

**`4 | 8`** _= 4_

How many lines appear. Note: this applies to the `straight` effect only.
Other effects always have 4 lines.
