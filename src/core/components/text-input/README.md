# TextInput

📣 For more context and visual guides relating text input usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/097455-text-input-field/b/050445)

## Install

```sh
$ yarn add @guardian/src-text-input
```

## Use

```js
import { TextInput } from "@guardian/src-text-input"

const Form = () => {
    const [state, setState] = useState("")

    return (
        <form>
            <TextInput
                label="Email"
                supporting="alex@example.com"
                value={state}
                onChange={(event) => setState(event.target.value)}
                optional={true}
                width={30}
            />
        </form>
    )
}
```

## Props

### `label`

**`string`**

Appears above the text input

### `supporting`

**`string`**

Additional text that appears below the label

### `value`

**`string`**

The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.

**Note:** if you pass the `value` prop, you **must** also pass an `onChange` handler, or the field will be rendered as read-only.

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute.

### `hideLabel`

**`boolean`** _= "false"_

Visually hides the label and the "Optional" text set by the `optional` flag.

### `width`

**`30 | 10 | 4`**

Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
the width will default to 100% of the field's container.

### `error`

**`string`**

Whether error styling should apply to this text input. The string appears as an inline error message.

### `success`

**`string`**

Whether success styling should apply to this text input. The string appears as an inline success message. This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.

## Supported themes

### Standard

-   `light`
