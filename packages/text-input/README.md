# TextInput

📣 For more context and visual guides relating text input usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/097455)

## Install

```sh
$ yarn add @guardian/src-radiotext-input
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

### `error`

**`boolean | string`**

Whether error styling should apply to this text input. If a string is passed, this appears as an inline error message
