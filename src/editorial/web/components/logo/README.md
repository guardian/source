# QuoteIcon

The Guardian logo appears in the header on most editorial pages

## Install

```sh
$ yarn add @guardian/src-ed-logo
```

or

```sh
$ npm i @guardian/src-ed-logo
```

## Use

```jsx
import { Logo } from '@guardian/src-ed-logo';

const Header = () => {
    return (
        <header css={headerStyles}>
            <p>Some other header things</p>
            <Logo />
        </header>
    );
};
```

## `Logo` Props

### `logoType`

**`"standard" | "anniversary" | "bestWebsite"`**

The type of logo to return
