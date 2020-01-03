# Radios

📣 For more context and visual guides relating radio usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/2891dd)

## Install

```sh
$ yarn add @guardian/src-radio @guardian/src-foundations
```

## Use

```js
import { RadioGroup, Radio } from "@guardian/src-radio"

const Form = () => (
    <form>
        <RadioGroup name="consent" orientation="vertical">
            <Radio
                value="no"
                label="No"
                supporting="I do not accept the terms"
                checked={true}
            />
            <Radio value="yes" label="Yes" supporting="I accept the terms" />,
        </RadioGroup>
    </form>
)
```

## `RadioGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each radio button

### `orientation`

**`"vertical" | "horizontal"`** _= "vertical"_

The direction in which radio buttons are stacked

### `error`

**`string`**

If passed, error styling should applies to this radio group. The string appears as an inline error message.

## `Radio` Props

### `label`

**`ReactNode`**

Appears to the right of the radio button

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `checked`

**`boolean`**

Whether radio button is checked
