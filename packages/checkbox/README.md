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
                supporting="The headlines, the analysis, the debate. Get the whole picture from a source you trust."
                defaultChecked
            />
            <Checkbox
                value="today-us"
                label="Guardian Today: US"
                supporting={
                    <>
                        <strong>Cut through the noise.</strong> Get straight to the heart of the day’s breaking news in double-quick time.
                    </>
                }
            />
        </CheckboxGroup>
    </form>
)
```

## `CheckboxGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each checkbox

### `error`

**`string`**

If passed, error styling should applies to this checkbox group. The string appears as an inline error message.

## `Checkbox` Props

### `label`

**`string`**

Appears to the right of the checkbox

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `isIndeterminate`

**`boolean`**

Whether checkbox is in an indeterminate ("mixed") state
