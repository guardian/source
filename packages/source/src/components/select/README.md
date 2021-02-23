# Select box

📣 For more context and visual guides relating to select box usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/663879-select-box)

## Use

```js
import { Select, Option } from '@guardian/source';

const Form = () => (
    <form>
        <Select
            label="State"
            supporting="Leave blank if you are not within the US"
            optional={true}
        >
            <Option value="al">Alabama</Option>
            <Option value="ca">California</Option>
        </Select>
    </form>
);
```

## Props

### `label`

**`string`**

Appears above the select box

### `supporting`

**`string`**

Additional text that appears below the label

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label

### `hideLabel`

**`boolean`** _= "false"_

Visually hides the label and the "Optional" text set by the `optional` flag.

### `error`

**`string`**

Whether error styling should apply to this select box. The string appears as an inline error message.

### `success`

**`string`**

Whether success styling should apply to this select box. The string appears as an inline success message. This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.

## Supported themes

### Standard

-   `light`
