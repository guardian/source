# Buttons

📣 For more context and visual guides relating to button usage, visit the [Source Design System website](https://zeroheight.com/2a1e5182b/p/435225)

## Install

```sh
$ yarn add @guardian/src-button @guardian/src-foundations
```

## Use

```js
import { Button, LinkButton } from "@guardian/src-button"
import { SvgCheckmark, SvgArrowRightStraight } from "@guardian/src-svgs"

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
        <LinkButton
            priority="primary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            href="/read-more"
        >
            Read more
        </LinkButton>
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
