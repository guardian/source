# PulsingDot

The Guardian pulsing dot is used in kickers and in front of some text on live blog (Updated n seconds ago...).

## Install

```sh
$ yarn add @guardian/src-ed-pulsing-dot
```

or

```sh
$ npm i @guardian/src-ed-pulsing-dot
```

## Use

```jsx
import { PulsingDot } from '@guardian/src-ed-pulsing-dot';

const Kicker = () => (
    <>
        <PulsingDot format={format} />
        <span>
            Live / European Super League: fan fury at plans for football
            breakaway
        </span>
    </>
);
```

## `PulsingDot` Props

### `format`

See **`@guardian/types`**: https://github.com/guardian/types/blob/main/src/format.ts

What we use to decide the editorial colour
