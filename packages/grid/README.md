# Grid

📣 For more context and visual guides relating grid usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/41be19)

## Install

```sh
$ yarn add @guardian/src-grid @guardian/src-foundations
```

## Use

```js
import { Grid, GridItem, gridItem } from "@guardian/src-grid"

const Article = () => (
    <Grid>
        <GridItem span={{ tablet: 3, desktop: 4 }}>
            <Sidebar />
        </GridItem>
        <GridItem span={{ tablet: 9, desktop: 8 }}>
            <Main />
        </GridItem>
    </Grid>
)

const sidebar = css`
    ${gridItem({ span: { tablet: 3, desktop: 4 } })}
`
const main = css`
    ${gridItem({ span: { tablet: 9, desktop: 8 } })}
`

const ArticleAlt = () => (
    <Grid>
        <div css={sidebar}></div>
        <div css={main}></div>
    </Grid>
)
```

## `GridItem` Props

### `span`

**`{ mobile?: number, tablet?: number, desktop?: number, wide?: number }`**

The number of columns a grid item should span at the specified breakpoints.

Adopt a mobile-first mindset when using this prop. If a span for a narrow breakpoint is specified (e.g. `mobile`),
wider breakpoints will also use this span value unless they are specifically overridden.

The narrowest specified breakpoint will be the first breakpoint at which the grid item is visible. At narrower
breakpoints, the grid item will have `display: none` applied to it.

### `startingPos`

**`number`**

The column number at which the grid item should begin. If omitted, the grid item will begin at the next available
column.

### `borderRight`

**`boolean`**_= false_

Whether a border should appear to the right of the grid item.
