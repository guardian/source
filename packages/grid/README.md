# Grid

📣 For more context and visual guides relating grid usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/41be19)

## Install

```sh
$ yarn add @guardian/src-grid @guardian/src-foundations
```

## Use

```js
import { GridRow, GridItem } from "@guardian/src-grid"

const Article = () => (
    <GridRow breakpoints={["mobile", "tablet", "desktop", "wide"]}>
        <GridItem span={[0, 3, 3, 4]} borderRight={true}>
            <Sidebar />
        </GridItem>
        <GridItem span={[4, 9, 9, 12]}>
            <Main />
        </GridItem>
    </GridRow>
)
```

## `GridRow` Props

### `breakpoints`

**`GridBreakpoints[]`**

A list of breakpoints at which grid column span may change. GridRow currently
supports changes at `"mobile"`, `"tablet"`, `"desktop"` and `"wide"` breakpoints.
Any of these may be omitted.

## `GridItem` Props

### `span`

**`number[]`**

The number of columns a grid item should span. Corresponds to the `breakpoints` list
in `GridRow` props.

When a col span of 0 is specified for a particular breakpoint, the grid item will have
`display: none` applied to it.

### `borderRight`

**`boolean`**_= false_

Whether a border should appear to the right of the grid item.
