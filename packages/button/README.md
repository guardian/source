# Buttons

Read about button usage on the [Source Design System website](https://zeroheight.com/2a1e5182b/p/435225)

## Install

```sh
$ yarn add @guardian/src-button
```

## Use

```js
import { Button } from "@guardian/src-button"
import { SvgCheckmark } from "@guardian/src-svgs"

const Form = () => (
    <form>
        <Button
            priority="primary"
            size="default"
            icon={<SvgCheckmark />}
            iconSide="left"
            onClick={() => {
                alert("Thanks for clicking")
            }}
        >
            Click me
        </Button>
    </form>
)
```

## Props

### `priority`

**`"primary" | "secondary" | "tertiary"`** _= "primary"_

Informs users of how important an action is

### `size`

**`"default" | "small"`** _= "default"_

Reflects the prominance of the action

### `icon`

**`JSX.Element`**

An icon that appears inside the button, alongside text

### `iconSide`

**`"left" | "right"`** _= "left"_

The side of the button on which the icon appears
