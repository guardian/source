# Checkbox

📣 For more context and visual guides relating checkbox usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/466fad)

## Install

```sh
$ yarn add @guardian/src-checkbox @guardian/src-foundations
```

## Use

```js
import { CheckboxGroup, Checkbox } from "@guardian/src-checkbox"

const Form = () => (
    <form>
        <CheckboxGroup name="emails">
            <Checkbox
                value="today-uk"
                label="Guardian Today: UK"
                defaultChecked
            />
            <Checkbox value="today-us" label="Guardian Today: US" />
        </CheckboxGroup>
    </form>
)
```

## `CheckboxGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each checkbox

### `error`

**`boolean | string`**

Whether error styling should apply to this group. If a string is passed, this appears as an inline error message

## `Checkbox` Props

### `label`

**`string`**

Appears to the right of the checkbox

### `supporting`

**`string`**

Additional text that appears below the label
