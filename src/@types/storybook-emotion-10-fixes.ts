// These types are needed to workaround an issue with Storybook's usage of Emotion 10
// conflicting with Source's usage of Emotion 11
// They should come from @storybook/react
// https://github.com/storybookjs/storybook/issues/13486

export type Args = {
	[key: string]: any;
};

export type Story = { (arg0: Args): any; args: Args; parameters: Args };
