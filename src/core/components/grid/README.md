# Grid

📣 For more context and visual guides relating grid usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/978527--grid-component/b/304251)

## Install

```sh
$ yarn add @guardian/src-grid
```

## Use

```js
import { GridRow, GridItem } from "@guardian/src-grid"

const Article = () => (
    <GridRow breakpoints={["mobile", "tablet", "desktop", "leftCol", "wide"]}>
        <GridItem span={[0, 3, 3, 4, 4]} borderRight={true}>
            <Sidebar />
        </GridItem>
        <GridItem span={[4, 9, 9, 10, 12]}>
            <Main />
        </GridItem>
    </GridRow>
)
```

## `GridRow` Props

### `breakpoints`

**`Array<GridBreakpoint | CustomBreakpoint>`** _= ["mobile", "tablet", "desktop", "leftCol", "wide"]_

A list of breakpoints at which grid column span may change. GridRow currently
supports changes at `"mobile"`, `"tablet"`, `"desktop"`, `"leftCol"` and `"wide"` breakpoints.
Any of these may be omitted.

For best results, breakpoints should be ordered ascending by minimum viewport width.

A custom breakpoint may be specified, which must have the following properties:

-   `width`: the minimum viewport width at which the breakpoint becomes active. This will also
    be the width of the `GridRow` container
-   `columns`: the number of columns the grid should comprise

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
