import type { Story } from '@storybook/react';
import type { Breakpoint } from '../packages/@guardian/source-foundations/src';
import { breakpoints } from '../packages/@guardian/source-foundations/src';

/**
 * Turns a standard story into a visual regression testing story:
 * - renders the story in a storybook canvas view
 * - removes the story from docs view entirely
 * - disables controls and docs tab for this story
 *
 * Make sure you have one of these for every possible state of your component.
 */
export const asChromaticStory = <T>(story: Story<T>): void => {
	const defaultViewport = story.parameters?.viewport?.defaultViewport;

	const chromatic: Record<string, unknown> = { disable: false };

	if (defaultViewport && defaultViewport in breakpoints) {
		chromatic.viewports = [breakpoints[defaultViewport as Breakpoint]];
	}

	story.parameters = {
		...story.parameters,
		viewMode: 'story',
		chromatic,
	};
};
