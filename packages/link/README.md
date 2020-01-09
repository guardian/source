# Link

📣 For more context and visual guides relating to link usage, visit the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/43c26b)

## Install

```sh
$ yarn add @guardian/src-link @guardian/src-foundations
```

## Use

```js
import { Link } from "@guardian/src-link"
import { SvgArrowRightStraight } from "@guardian/src-svgs"

const Navigation = () => (
    <Link
        priority="primary"
        icon={<SvgArrowRightStraight />}
        iconSide="right"
        href="/read-more"
    >
        Click me
    </Link>
)
```

## `Link` Props

### `priority`

**`"primary" | "secondary"`** _= "primary"_

Informs users of how important a link is

### `icon`

**`JSX.Element`**

An icon that appears in the link, alongside text

### `iconSide`

**`"left" | "right"`** _= "left"_

The side of the link on which the icon appears
