/* eslint-disable @typescript-eslint/no-explicit-any -- These are quick stubs to fix the Storybook / Emotion 10 issue */

// These types are needed to workaround an issue with Storybook's usage of Emotion 10
// conflicting with Source's usage of Emotion 11
// They _should_ come from @storybook/react directly
// https://github.com/storybookjs/storybook/issues/13486

export type Args = {
	[key: string]: any;
};

export type Parameters = {
	[key: string]: any;
};

export type Story = {
	(arg0: any): JSX.Element;
	args?: Args;
	parameters?: Parameters;
	storyName?: string;
};
