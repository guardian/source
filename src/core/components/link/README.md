# Link

📣 For more context and visual guides relating to link usage, visit the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/43c26b-link/)

## Install

```sh
$ yarn add @guardian/src-link
```

## Use

```js
import { Link, ButtonLink } from "@guardian/src-link"
import { SvgArrowRightStraight } from "@guardian/src-icons"

const Navigation = () => (
    <>
        <Link
            priority="primary"
            subdued={true}
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            href="/read-more"
        >
            Click me
        </Link>
        <ButtonLink
            priority="primary"
            subdued={true}
            icon={<SvgArrowRightStraight />}
            iconSide="right"
            onClick={() => console.log("Clicked")}
        >
            Click me
        </ButtonLink>
    </>
)
```

## `Link` and `ButtonLink` Props

### `priority`

**`"primary" | "secondary"`** _= "primary"_

Informs users of how important a link is

### `subdued`

**`boolean`** _= false_

Whether link is subdued (no underline)

### `icon`

**`JSX.Element`**

An icon that appears in the link, alongside text

### `iconSide`

**`"left" | "right"`** _= "left"_

The side of the link on which the icon appears

## Supported themes

### Standard

-   `light`
-   `brand`
-   `brandYellow`
