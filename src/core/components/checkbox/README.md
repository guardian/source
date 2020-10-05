# Checkbox

📣 For more context and visual guides relating checkbox usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/466fad-checkbox/b/33fc2f)

## Install

```sh
$ yarn add @guardian/src-checkbox
```

## Use

```js
import { CheckboxGroup, Checkbox } from "@guardian/src-checkbox"

const Form = () => {
    const [ukChecked, setUkChecked] = useState(false)
    const [usChecked, setUsChecked] = useState(false)

    return (
        <form>
            <CheckboxGroup name="emails">
                <Checkbox
                    value="today-uk"
                    label="Guardian Today: UK"
                    supporting="The headlines, the analysis, the debate. Get the whole picture from a source you trust."
                    checked={ukChecked}
                    onChange={() => setUkChecked(!ukChecked)}
                />
                <Checkbox
                    value="today-us"
                    label="Guardian Today: US"
                    supporting={
                        <>
                            <strong>Cut through the noise.</strong> Get straight
                            to the heart of the day’s breaking news in
                            double-quick time.
                        </>
                    }
                    checked={usChecked}
                    onChange={() => setUsChecked(!usChecked)}
                />
            </CheckboxGroup>
        </form>
    )
}
```

## `CheckboxGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each checkbox

### `label`

**`string`**

Appears as a legend at the top of the checkbox group

### `hideLabel`

**`boolean`** _= "false"_

Visually hides the label.

### `supporting`

**`string`**

Additional text that appears below the label

### `error`

**`string`**

If passed, error styling should be applied to this checkbox group. The string appears as an inline error message.

## `Checkbox` Props

### `label`

**`ReactNode`**

Appears to the right of the checkbox. If a visible label is undesirable (e.g. for layout reasons) use `aria-label` instead.

If label is omitted, supporting text will not appear either.

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `checked`

**`boolean`**

Whether checkbox is checked. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.

**Note:** if you pass the `checked` prop, you **must** also pass an `onChange` handler, or the field will be rendered as read-only.

### `indeterminate`

**`boolean`**

Whether checkbox is in an indeterminate ("mixed") state

## Supported themes

### Standard

-   `default`
-   `brand`
