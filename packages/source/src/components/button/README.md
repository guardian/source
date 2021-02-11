# Buttons

📣 For more context and visual guides relating to button usage, visit the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/435225-button/)

## Use

```js
import {
    LinkButton,
    Button,
    SvgCheckmark,
    SvgArrowRightStraight,
} from '@guardian/source';

const Form = () => (
    <form>
        <LinkButton
            priority="primary"
            size="default"
            icon={<SvgArrowRightStraight />}
            iconSide="left"
            nudgeIcon={true}
            href="/read-more"
        >
            Read more
        </LinkButton>
        <Button
            priority="primary"
            size="default"
            icon={<SvgCheckmark />}
            iconSide="left"
            onClick={() => {
                alert('Thanks for clicking');
            }}
        >
            Click me
        </Button>
    </form>
);
```

## `LinkButton` Props

### `priority`

**`"primary" | "secondary" | "tertiary" | "subdued"`** _= "primary"_

Informs users of how important an action is

### `size`

**`"default" | "small" | "xsmall"`** _= "default"_

Reflects the prominance of the action

### `icon`

**`JSX.Element`**

An icon that appears inside the button, alongside text

### `iconSide`

**`"left" | "right"`** _= "left"_

The side of the button on which the icon appears

### `nudgeIcon`

**`boolean`** _= "false"_

When set, the icon (if visible) will move slightly to the right on hover.

### `hideLabel`

**`boolean`** _= "false"_

Whether to hide the text label visually. It is only appropriate to set this flag
if an `icon` is passed. The text label will still be read out by screen readers.

## `Button` Props

### `priority`

**`"primary" | "secondary" | "tertiary" | "subdued"`** _= "primary"_

Informs users of how important an action is

### `size`

**`"default" | "small" | "xsmall"`** _= "default"_

Reflects the prominance of the action

### `icon`

**`JSX.Element`**

An icon that appears inside the button, alongside text

### `iconSide`

**`"left" | "right"`** _= "left"_

The side of the button on which the icon appears

### `nudgeIcon`

**`boolean`** _= "false"_

When set, the icon (if visible) will move slightly to the right on hover.

### `hideLabel`

**`boolean`** _= "false"_

Whether to hide the text label visually. It is only appropriate to set this flag
if an `icon` is passed. The text label will still be read out by screen readers.

## Supported themes

### Standard

-   `default`
-   `brand`
-   `brandAlt`

### Custom

-   `readerRevenue`
-   `readerRevenueBrand`
-   `readerRevenueBrandAlt`
