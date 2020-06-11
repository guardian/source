# TextArea

📣 For more context and visual guides relating text area usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/77ee17-overview)

## Install

```sh
$ yarn add @guardian/src-text-area
```

## Use

```js
import { TextArea } from "@guardian/src-text-area"

const Form = () => (
    <form>
        <TextArea
            label="Add a comment"
            supporting="Please keep comments respectful and abide by the community guidelines."
            optional={false}
        />
    </form>
)
```

## Props

### `label`

**`string`**

Appears above the text area

### `supporting`

**`string`**

Additional text that appears below the label

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label

### `error`

**`string`**

Whether error styling should apply to this text area. The string appears as an inline error message.

### `rows`

**`string`**

Specify the number of rows the component should display by default. Defaults to 3 rows.

## Supported themes

### Standard

-   `light`
