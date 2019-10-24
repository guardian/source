# Radios

Read about radio usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/2891dd)

## Install

```sh
$ yarn add @guardian/src-radio
```

## Use

```js
import { Button } from "@guardian/src-button"
import { SvgCheckmark } from "@guardian/src-svgs"

const Form = () => (
    <form>
        <RadioGroup name="colours">
            <Radio value="red" label="Red" />,
            <Radio value="green" label="Green" defaultChecked />,
            <Radio value="blue" label="Blue" />,
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

**`boolean | string`**

Whether error styling should apply to this group. If a string is passed, this appears as an inline error message

## `Radio` Props

### `label`

**`string`**

Appears as a `<label>` alongside the radio button

### `supporting`

**`string`**

Additional text that appears below the label
