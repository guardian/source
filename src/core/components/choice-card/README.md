# Choice Card

📣 For more context and visual guides relating choice card usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/65ffe9)

## Install

```sh
$ yarn add @guardian/src-choice-card @guardian/src-foundations
```

## Use

```js
import { ChoiceCardGroup, ChoiceCard } from "@guardian/src-choice-card"

const Form = () => (
    <form>
        <ChoiceCardGroup name="consent" orientation="vertical">
            <ChoiceCard
                value="no"
                label="No"
                supporting="I do not accept the terms"
                checked={true}
            />
            <ChoiceCard
                value="yes"
                label="Yes"
                supporting="I accept the terms"
            />,
        </ChoiceCardGroup>
    </form>
)
```

## `ChoiceCardGroup` Props

### `name`

**`string`**

Gets passed as the name attribute for each choice card

### `error`

**`string`**

If passed, error styling should applies to this choice card group. The string appears as an inline error message.

## `ChoiceCard` Props

### `label`

**`ReactNode`**

Appears inside the choice card

### `supporting`

**`ReactNode`**

Additional text or a component that appears below the label

### `checked`

**`boolean`**

Whether choice card is checked

## Supported themes

### Standard

-   `default`
