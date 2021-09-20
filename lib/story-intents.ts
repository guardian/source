import { Story } from './@types/storybook-emotion-10-fixes';

/**
 * Turns a standard story into a playground/[API documentation story](https://storybook.js.org/addons/@storybook/addon-docs):
 * - renders the story in a storybook docs view
 * - does not create a storybook canvas view
 * - enables controls and removes the canvas tab for this story
 * - renames the story in the nav to `🧶 Playground`
 *
 * Make sure all props are configurable in storybook's controls table.
 *
 */
export const asPlayground = <Args>(story: Story<Args>) => {
	story.parameters = {
		...story.parameters,
		viewMode: 'docs',
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		// className is part of react API anyway, we don't need to document it
		controls: { exclude: ['className'] },
		chromatic: { disable: true },
	};
	story.args = {
		...story.args,
		cssOverrides: 'undefined',
	};
	story.argTypes = {
		...story.argTypes,
		cssOverrides: {
			options: ['undefined', 'css`background-color: red;`'],
			mapping: {
				undefined: undefined,
				'css`background-color: red;`': { backgroundColor: 'red' },
			},
			control: { type: 'radio' },
		},
	};
	story.storyName = '🧶 Playground';
};

/**
 * Turns a standard story into a visual regression testing story:
 * - renders the story in a storybook canvas view
 * - removes the story from docs view entirely
 * - disables controls and docs tab for this story
 *
 * Make sure you have one of these for every possible state of your component.
 */
export const asChromaticStory = <Args>(story: Story<Args>) => {
	story.parameters = {
		...story.parameters,
		viewMode: 'canvas',
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
		docs: { disable: true },
		controls: { disabled: true },
		chromatic: { disable: false },
	};
};