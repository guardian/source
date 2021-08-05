# Stories

Source uses [storybook](https://storybook.js.org/) for its API documentation as well as for visual regression testing.

The Source storybook can be run locally using `yarn storybook`

## Story Configuration

1. Story files should be named `${Component}.stories.tsx` e.g. `MyComponent.stories.tsx`
1. Story titles should follow the pattern `${Source | Editorial}/${package}/${component}` e.g. `Source/src-radio/RadioGroup`
1. Each component should have a Demo story which is designed for documentation purposes and a series of stories detailing specific cases for visual regression testing
1. Stories should have PascalCase names
1. The `args` property should be passed to all stories so that the source code is displayed on the docs page
1. Props should all be commented to autofill the args table
1. Components should all have JSDoc comments to auto fill the docs page (see [example](#example) below)
1. Controls should be disabled for all stories except the Demo story

    ```ts
    export const Story = ...

    Story.story = {
        parameters: {
            controls: {
                disabled: true
            }
        }
    }
    ```

1. The Demo story should set all configurable args via the Story configuration and hide any other controls

    ```ts
    export const Story = ...

    Story.story = {
        args: {
            arg1: "value"
        },
        argTypes: {
            arg2: {
                control: null
            }
        }
    }
    ```

1. Any args that should not be shown in docs should be marked with the `@ignore` annotation and a comment explaining why

    ```tsx
    interface MyChildComponentProps {
        /**
         * @ignore passed down by the parent <MyComponent />
         */
        hideToggleLabel?: boolean;
    }
    ```

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




// my-component.stories.tsx

export default {
	title: 'Source/src-my-component/MyComponent',
	component: MyComponent,
};

export const Demo = (args: MyComponentProps) => (
	<MyComponent {...args} />
);

Demo.story = {
	argTypes: {
		id: { control: null },
	},
	args: {
		label: 'Label',
		hideLabel: false,
		value: 'Value',
	},
};

export const NoValue = (args: MyComponentProps) => (
	<MyComponent {...args} label="Label"/>
);

NoValue.parameters = {
    controls: {
        disabled: true
    }
}

export const HideLabel = (args: MyComponentProps) => (
	<MyComponent {...args} label="Label" hideLabel={true} value="Value" />
);

HideLabel.parameters = {
    controls: {
        disabled: true
    }
}
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
