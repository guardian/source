# `Layout`

📣 For more context and visual guides relating to `Layout` usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/309077-layout-components)

## Install

```sh
$ yarn add @guardian/src-layout
```

## Container

Centres the page content and applies a width that corresponds to the grid at the current breakpoint.

```tsx
import { Container } from "@guardian/src-layout"

const Wrapper = () => (
    <Container>
        <div css={contents}>Contents</div>
    </Container>
)
```

### Props

#### `border`

**`boolean`** _= false_

Whether to show a border to the left and right of the Container

## Stack

Children will be stacked one on top of the other.

```tsx
import { Stack } from "@guardian/src-layout"

const Wrapper = () => (
    <Stack>
        <div css={contents}>Item 1</div>
        <div css={contents}>Item 2</div>
        <div css={contents}>Item 3</div>
    </Stack>
)
```

### Props

#### `space`

**`1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24`**

Units of space between stack items (one unit is 4px)

## Columns

Columns will be arranged side by side on a single row, with the specified width.

Use Columns in conjunction with Container to help the columns align neatly with [the Guardian's grids](https://www.theguardian.design/2a1e5182b/p/41be19-grids).

```tsx
import { Container, Columns, Column } from "@guardian/src-layout"

const Wrapper = () => (
    <Container>
        <Columns collapseBelow={tablet}>
            <Column width={1 / 4}>1/4</Column>
            <Column width={1 / 4}>1/4</Column>
            <Column>*</Column>
        </Columns>
    </Container>
)
```

### Columns Props

#### `collapseBelow`

**`Breakpoint`**

Columns will be stacked one on top of the other at viewport widths lower than the specified breakpoint

### Column Props

#### `width`

**`number`**

Fraction of the parent container's width that the column will occupy. If no value is provided, the column width will be fluid (i.e. take up remaining space, divided between all fluid columns)

## Hide

Hide a component above or below a certain breakpoint

```tsx
import { Hide } from "@guardian/src-layout"

const Wrapper = () => (
    <>
        <Hide above="tablet">
            <MobileNavigation />
        </Hide>
        <Hide below="desktop">
            <DesktopNavigation />
        </Hide>
    </>
)
```

### Props

#### `above`

**`Breakpoint`**

Contents will be hidden at viewport widths greater than the specified breakpoint

#### `below`

**`Breakpoint`**

Contents will be hidden at viewport widths less than the specified breakpoint

## Inline

```tsx
import { Inline } from "@guardian/src-layout"

const Wrapper = () => (
    <Inline>
        <div css={contents}>Item 1</div>
        <div css={contents}>Item 2</div>
        <div css={contents}>Item 3</div>
    </Inline>
)
```

### Props

#### `space`

**`1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24`**

Units of space between inline items (one unit is 4px)
