# Stories

Source uses [storybook](https://storybook.js.org/) for its API documentation as well as for visual regression testing.

The Source storybook can be run locally using `yarn storybook`

## Story Configuration

Source has a standard way of writing stories

### Example

```tsx
// MyComponent.tsx

export interface MyComponentProps {
    /**
     * A string to label the value
     */
    label: string;
    /**
     * An optional boolean to hide the label value
     */
    hideLabel?: boolean;
    /**
     * An optional string value to display. Will show `No value set` if not provided
     */
    value?: string;
    /**
     * An optional id to give the component
     */
    id?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-${MY_COMPONENT_PACKAGE}-${MY_COMPONENT}--demo) •
 * [Design System](https://theguardian.design/${MY_COMPONENT_PATH}) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/${MY_COMPONENT}) •
 * [NPM](https://www.npmjs.com/package/@guardian/${MY_COMPONENT_PACKAGE})
 *
 * My Component is a nifty way of showing key -> value data
 *
 * The following themes are supported: `default`, `brand`
 */
export MyComponent = ({}: MyComponentProps) => (
    <div id={id}>
        {!hideLabel ? <div className="my-component-label">{label}</div> : null}
        <div className="my-component-value">{value ?? "No value set"}</div>
    </div>
)


// MyComponent.stories.tsx

import { MyComponent } from './MyComponent';
import type { MyComponentProps } from './MyComponent';
import { myComponentBrand } from './index';
import { ThemeProvider } from '@emotion/react';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-my-component/MyComponent',
	component: MyComponent,
    argTypes: {
		id: { control: null },
	},
	args: {
		label: 'Label',
		hideLabel: false,
		value: 'Value',
	},
};

const Template: Story = (args: MyComponentProps) => <MyComponent {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const DefaultBrandTheme = (args: MyComponentProps) => (
	<ThemeProvider theme={myComponentBrand}>
		<Template {...args} />
	</ThemeProvider>
);
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const HideLabel = Template.bind({});
HideLabel.args = {
    hideLabel: true
}
asChromaticStory(HideLabel);

// *****************************************************************************

export const HideLabelBrandTheme = (args: MyComponentProps) => (
	<ThemeProvider theme={myComponentBrand}>
		<Template {...args} />
	</ThemeProvider>
);
HideLabelLightTheme.args = {
    hideLabel: true
}
HideLabelBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
};
asChromaticStory(HideLabelBrandTheme);
```

### Files and Naming

1. Name story files following the pattern `${Component}.stories.tsx` e.g. `MyComponent.stories.tsx`
1. Each exported component should have it's own `stories.tsx`
1. Story titles should follow the pattern `${Source | Editorial}/${package}/${component}` e.g. `Source/src-radio/RadioGroup`
1. Use PascalCase names for stories

### Story Structure

1. Define a template for each each set of stories

    ```ts
    const Template: Story = (args: ComponentProps) => <Component {...args} />;
    ```

1. Set the default [story args](https://storybook.js.org/docs/react/writing-stories/args) and [argTypes](https://storybook.js.org/docs/react/api/argtypes) on the [default export](https://storybook.js.org/docs/react/writing-stories/introduction#default-export)

    ```ts
        export default {
            title: 'Source/src-package/MyComponent',
            component: MyComponent,
            argTypes: { ... },
            args: { ... },
        };
    ```

1. Define a Playground story for each component to document it's behaviour
1. Wrap Playground stories with the `asPlayground` function

    ```ts
        export const Playground = Template.bind({})
        Playground.args = { ... };
        asPlayground(Playground)
    ```

1. Define a series of stories detailing all possible states of each component for visual regression testing
1. Wrap these stories with the `asChromaticStory` function

    ```ts
        export const Story = Template.bind({})
        Story.args = { ... };
        asChromaticStory(Story)
    ```

1. Seperate stories with the following delimiter

    ```ts
    // *****************************************************************************
    ```

1. Provide as many args as is useful for the Playground story. Consider how props react to different types of value (e.g. `undefined` vs strings)

    ```ts
    export const Playground = ...

    Playground.args = {
        arg1: "value"
    }
    ```

1. Disable controls for deprecated props and for args that won't have any effect in storybook

    ```ts
     export default {
        title: 'Source/src-package/MyComponent',
        component: MyComponent,
        argTypes: {
            arg2: {
                control: {
                    disable: true
                }
            }
        },
        args: { ... },
    };
    ```

1. Avoid styling and theming Playground stories

### Documentation / Comments

1. Document component props using [doc blocks](https://storybook.js.org/docs/react/writing-docs/doc-blocks)

    ```ts
    export interface MyComponentProps {
        /**
         * A label to display alongside the component
         */
        label: string;
    }
    ```

1. Document Components with JSDoc comments including links to online documentation

    ```ts
    /**
     * [Storybook](https://guardian.github.io/source/?path=/docs/source-${MY_COMPONENT_PACKAGE}-${MY_COMPONENT}--demo) •
     * [Design System](https://theguardian.design/${MY_COMPONENT_PATH}) •
     * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/${MY_COMPONENT}) •
     * [NPM](https://www.npmjs.com/package/@guardian/${MY_COMPONENT_PACKAGE})
     *
     * My Component is a nifty way of showing key -> value data
     *
     * The following themes are supported: `default`, `brand`
     */
    export MyComponent = ({}: MyComponentProps) => {...}
    ```

1. Mark any props that should not be documented with the `@ignore` annotation and a comment explaining why

    ```tsx
    interface MyChildComponentProps {
        /**
         * @ignore passed down by the parent <MyComponent />
         */
        myProp?: boolean;
    }
    ```

### Sub-components

1. Set the `subcomponents` value in the default export for components that have sub-components

    ```ts
    export default {
        title: 'Source/src-package/Component',
        component: Component,
        subcomponents: { SubComponent },
        args: { ... },
        argTypes: { ... },
    };
    ```

1. Pass any sub-component's default story args through to the sub-component in the template of the component story

    ```ts
    // SubComponent.stories.tsx

    export default {
        title: 'Source/src-package/SubComponent',
        component: SubComponent,
        argTypes: { ... },
        args: {
            arg0: 'test',
            arg1: 1,
        },
    };

    ...

    // Component.stories.tsx

    ...

    import SubComponentStories from './SubComponent.stories';

    ...

    const Template: Story = (args: ComponentProps) => (
        <Component {...args}>
            <SubComponent {...SubComponentStories.args} />
        </Component>
    );

    ```

## Other Tips

### `string | JSX.Element` Controls

For props where the type is either a string or some complex element, it may be desirable to configure the control to be a text type so that users can try it out more easily in Storybook.

```ts
interface StoryProps {
    label: string | JSX.Element;
}

export const Story = ({ label }: StoryProps) => ...

Story.story = {
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
		}
    }
}
```
