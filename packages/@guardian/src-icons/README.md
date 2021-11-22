# Icons

📣 For more context and visual guides relating to icon usage, visit the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/74a822-overview)

## Install

```sh
$ yarn add @guardian/src-icons
```

## Use

Our icon SVGs are exported as React components.

```tsx
import { SvgCheckmark } from '@guardian/src-icons';

React.render(<SvgCheckmark />, rootElement);
```

## SVGs

The `svgs` directory contains the equivalent svg files for each of the icons. Mostly these are pulled in from Figma using the [get-icons script](../../../scripts/get-icons), with a few notable [exceptions](../../../scripts/get-icons#exceptions).
