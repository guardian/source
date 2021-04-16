# QuoteIcon

The Guardian quote icon is used in kickers, headlines, drop caps and pull quotes to denote quoted text.

## Install

```sh
$ yarn add @guardian/src-ed-quote-icon
```

or

```sh
$ npm i @guardian/src-ed-quote-icon
```

## Use

```jsx
import { QuoteIcon } from '@guardian/src-ed-quote-icon';

const Section = () => (
    <>
        <QuoteIcon
            size="medium"
            format={{
                display: Display.Standard,
                design: Design.Article,
                theme: Pillar.News,
            }}
        />
        <blockquote>I said this</blockquote>
    </>
);
```

## `QuoteIcon` Props

### `size`

**`"tiny" | "small" | "medium" | "large"`**

The size of the quote.

### `format`

See **`@guardian/types`**: https://github.com/guardian/types/blob/main/src/format.ts

What we use to decide the editorial colour for the quotes
