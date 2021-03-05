# Foundations

The Guardian's foundations are the atoms from which all our visual design is built. They are intended for use with a CSS-in-JS library such as Emotion.

## Install

```sh
$ yarn add @guardian/src-foundations
```

## Use

### [Palette](https://www.theguardian.design/2a1e5182b/p/28d868-overview)

```ts
import { background } from '@guardian/src-foundations/palette';

const backgroundColor = css`
    background-color: ${background.primary};
`;
```

### [Typography](https://www.theguardian.design/2a1e5182b/p/930d69-typography/b/78d0d9)

```ts
import { headline, body, textSans } from '@guardian/src-foundations/typography';

const h1 = css`
    ${headline.large({ fontWeight: 'bold' })};
`;

const p = css`
    ${body.main()};
`;

const copyright = css`
    ${textSans.xsmall()};
`;
```

### Media queries

```ts
import { from, until, between } from '@guardian/src-foundations/mq';

const styles = css`
    padding: 0 10px;

    ${from.mobileLandscape} {
        padding: 0 20px;
    }

    ${between.phablet.and.desktop} {
        padding: 0 32px;
    }

    ${until.wide} {
        padding: 0 40px;
    }
`;
```

### [Size](https://www.theguardian.design/2a1e5182b/p/38d9a9-overview)

```ts
import { width, height } from '@guardian/src-foundations/size';

const checkbox = css`
    width: ${width.inputXsmall}px;
    height: ${height.inputXsmall}px;
`;
```

### [Visually Hidden](https://www.theguardian.design/2a1e5182b/p/6691bb-accessibility/t/1285a8)

For elements that should not appear to sighted users, but are useful to assistive technology users.

```ts
import { visuallyHidden } from '@guardian/src-foundations/accessibility';

const label = css`
    ${visuallyHidden};
`;
```

### [Focus Halo](https://www.theguardian.design/2a1e5182b/p/6691bb-accessibility/t/24562a)

This mixin provides a [clear focus state](https://theguardian.design/2a1e5182b/p/08dc26-interaction-states/t/314e46) for elements that may receive keyboard focus.

```ts
import { focusHalo } from '@guardian/src-foundations/accessibility';

const input = css`
    ${focusHalo};
    width: 200px;
    height: 44px;
`;
```

### [Description Id](https://theguardian.design/2a1e5182b/p/6691bb-accessibility/t/062b61)

A function that takes the ID of an element and generates a new ID. This should be set as the
ID of an element that describes the first element. The generated ID should also be passed to
the [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) attribute on the first element.

```tsx
import { descriptionId } from '@guardian/src-foundations/accessibility';

const Form = () => {
    const id = 'first_name';
    return (
        <form>
            <input id={id} type="text" aria-describedby={descriptionId(id)} />
            <p class="error" id={descriptionId(id)} />
        </form>
    );
};
```
