/* eslint-disable @typescript-eslint/no-explicit-any -- These are quick stubs to fix the Storybook / Emotion 10 issue */

// These types are needed to workaround an issue with Storybook's usage of Emotion 10
// conflicting with Source's usage of Emotion 11
// They _should_ come from @storybook/react directly
// https://github.com/storybookjs/storybook/issues/13486

export type Args = Record<string, any>;

export type Parameters = Record<string, any>;

export type Story<T = Args> = {
	(arg0: Args & T): JSX.Element;
	args?: Args;
	parameters?: Parameters;
	argTypes?: Args;
	storyName?: string;
	decorators?: Array<(story: Story) => JSX.Element>;
};
