# Radios

📣 For more context and visual guides relating radio usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d)

## Install

```sh
$ yarn add @guardian/src-radio
```

## Use

```js
import { RadioGroup, Radio } from "@guardian/src-radio"

const Form = () => {
    const [selected, setSelected] = (useState < string) | (null > null)

    return (
        <form>
            <RadioGroup name="consent" orientation="vertical">
                <Radio
                    value="no"
                    label="No"
                    supporting="I do not accept the terms"
                    checked={selected === "no"}
                    onChange={setSelected("no")}
                />
                <Radio
                    value="yes"
                    label="Yes"
                    supporting="I accept the terms"
                    checked={selected === "yes"}
                    onChange={setSelected("yes")}
                />,
            </RadioGroup>
        </form>
    )
}
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

Appears to the right of the radio button. If a visible label is undesirable (e.g. for layout reasons) use `aria-label` instead.

If label is omitted, supporting text will not appear either.

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `checked`

**`boolean`**

Whether radio button is checked. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.

**Note:** if you pass the `checked` prop, you **must** also pass an `onChange` handler, or the field will be rendered as read-only.

## Supported themes

### Standard

-   `default`
-   `brand`
