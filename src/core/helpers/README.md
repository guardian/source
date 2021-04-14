# Helpers

Shared helper functions and types used across all components.

## Dark Mode

This package exports a `darkModeCss` function, which is a variant of the standard Emotion `css` function. It can be used to wrap template string styles in a dark mode media query. The signature is as follows:

```ts
(supportsDarkMode: boolean) => (styles: TemplateStringsArray, ...placeholders: string[]) => SerializedStyles
```

The first parameter allows the caller to choose whether they want these dark mode styles included - if set to `false` they won't be. The rest of the parameters turned this into a [template literal "tag"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), which allows it to operate on template strings in the same way as the `css` function.

### Example

```tsx
import { Props, darkModeCss } from '@guardian/src-helpers';

const styles = (supportsDarkMode: boolean): SerializedStyles => css`
  background-color: white;
  color: black;

  ${darkModeCss(supportsDarkMode)`
    background-color: black;
    color: white;
  `}
`;

interface HelloProps extends Props {
  name: string;
}

const HelloProps = ({ name, supportsDarkMode = false }) => (
  <p css={styles(supportsDarkMode)}>Hello {name}</p>
);
```
