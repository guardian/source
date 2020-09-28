# `Layout`

📣 For more context and visual guides relating to `Layout` usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/41be19-grids)

## Install

```sh
$ yarn add @guardian/src-layout
```

## Use

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

## Stack Props

### `space`

**`1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24`**

Units of space between stack items (one unit is 4px)
