# `Label`

📣 For more context and visual guides relating to `Label` usage on the [Source Design System website](https://www.theguardian.design)

## Install

```sh
$ yarn add @guardian/src-label
```

## Use

```tsx
import { Label, Legend } from "@guardian/src-label"

const Form = () => (
    <form>
        <Label text="Email" supporting="alex@example.com">
            <input type="email" />
        </Label>
    </form>
)

const Fieldset = () => (
    <fieldset>
        <Legend
            text="Subscribe to our newsletters"
            supporting="Select as many as you like"
            optional={true}
        />
        <label>
            <input type="checkbox" />
            Guardian Today: UK
        </label>
    </fieldset>
)
```

## Label and Legend Props

### `text`

**`string`**

The label text

### `supporting`

**`string`**

Additional text that appears below the label

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label.

### `hideLabel`

**`boolean`** _= "false"_

Visually hides the label.

## Supported themes

### Standard

-   `light`
-   `brand`
