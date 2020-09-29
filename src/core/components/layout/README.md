# `Layout`

📣 For more context and visual guides relating to `Layout` usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/41be19-grids)

## Install

```sh
$ yarn add @guardian/src-layout
```

## Container

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
