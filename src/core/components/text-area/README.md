# TextArea

📣 For more context and visual guides relating text area usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/77ee17-overview)

## Install

```sh
$ yarn add @guardian/src-text-area
```

## Use

```js
import { TextArea } from "@guardian/src-text-area"

const Form = () => {
    const [state, setState] = useState("")

    return (
        <form>
            <TextArea
                label="Add a comment"
                supporting="Please keep comments respectful and abide by the community guidelines."
                optional={false}
                value={state}
                onChange={(event) => setState(event.target.value)}
            />
        </form>
    )
}
```

## Props

### `label`

**`string`**

Appears above the text area

### `supporting`

**`string`**

Additional text that appears below the label

### `value`

**`string`**

The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.

**Note:** if you pass the `value` prop, you **must** also pass an `onChange` handler, or the field will be rendered as read-only.

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
