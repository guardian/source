# Theming

By default, all components are styled using their light theme.

To apply a different theme, we recommend using [emotion-theming](https://5faaafd0bd0f3f0008469537--emotion.netlify.app/docs/theming). You can import the desired theme from `@guardian/src-foundations/themes`

```jsx
import { ThemeProvider } from 'emotion-theming';
import { Button } from '@guardian/src-button';
import { TextInput } from '@guardian/src-text-input';
import { brand } from '@guardian/src-foundations/themes';

const Form = () => (
    <ThemeProvider theme={brand}>
        <form>
            <TextInput label="First Name" />
            <Button>Click me</Button>
        </form>
    </ThemeProvider>
);
```

**Note:** the above will bundle the `brand` theme styles **for all components** into your application, whether you're using them or not.

To compose themes for specific components:

```jsx
import { ThemeProvider } from 'emotion-theming';
import { Button, buttonBrand } from '@guardian/src-button';
import { TextInput, textInputBrand } from '@guardian/src-text-input';

const Form = () => (
    <ThemeProvider theme={{ ...buttonBrand, ...textInputBrand }}>
        <form>
            <TextInput label="First Name" />
            <Button>Click me</Button>
        </form>
    </ThemeProvider>
);
```

## Available themes

Standard themes available from `@guardian/src-foundations/themes`:

-   **default (exported as defaultTheme)**
-   **brand**
-   **brandAlt**

For a preview of how these themes look, visit the [colour tokens section](https://theguardian.design/2a1e5182b/p/1377a6-tokens/b/293ddb) of the colour guide.

To find out which themes a component supports, navigate to the "Supported themes" section in the "Code" tab of the component's documentation page.

Note that some components have their own unique themes in addition to the standard set of themes. For instance, the button component defines [two themes for use in Reader Revenue flows](https://theguardian.design/2a1e5182b/p/435225-button/t/41a3ce).

## Custom themes

If you plan to override the styles of several components in a similar way, consider building a custom theme.

Themes are JavaScript object literals that expose a groups of colour properties.

```jsx
import { ThemeProvider } from 'emotion-theming';
import { Button } from '@guardian/src-button';
import { Link } from '@guardian/src-link';

const customTheme = {
    button: {
        textPrimary: text.ctaPrimary,
        backgroundPrimary: background.ctaPrimary,
        backgroundPrimaryHover: background.ctaPrimaryHover,
        textSecondary: text.ctaSecondary,
        backgroundSecondary: background.ctaSecondary,
        backgroundSecondaryHover: background.ctaSecondaryHover,
    },
    link: {
        textPrimary: text.anchorPrimary,
        textPrimaryHover: text.anchorPrimary,
        textSecondary: text.anchorSecondary,
        textSecondaryHover: text.anchorSecondary,
    },
};

const Form = () => (
    <ThemeProvider theme={customTheme}>
        <form>
            <Button>Click me</Button>
            <Link href="/">Go back</Link>
        </form>
    </ThemeProvider>
);
```

To see which properties can be themed for each component, take a look in the [themes folder of our Foundations](https://github.com/guardian/source/tree/main/src/core/foundations/src/themes).
