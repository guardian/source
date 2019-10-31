# TextInput

📣 For more context and visual guides relating text input usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/097455)

## Install

```sh
$ yarn add @guardian/src-text-input
```

## Use

```js
import { TextInput } from "@guardian/src-text-input"

const Form = () => (
    <form>
        <TextInput
            label="Email"
            supporting="alex@example.com"
            optional={true}
            width={30}
        />
    </form>
)
```

## Props

### `label`

**`string`**

Appears above the text input

### `supporting`

**`string`**

Additional text that appears below the label

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label

### `width`

**`30 | 10 | 4`**

Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
the width will default to 100% of the field's container.

### `error`

**`boolean | string`**

Whether error styling should apply to this text input. If a string is passed, this appears as an inline error message
