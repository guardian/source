import React from 'react';
import { Radio } from './Radio';
import type { RadioProps } from './Radio';
import { radioBrand } from './index';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
	title: 'Source/src-radio/Radio',
	component: Radio,
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
		},
		supporting: {
			control: {
				type: 'text',
			},
		},
		cssOverrides: {
			control: null,
		},
	},
	args: {
		label: 'Red',
		value: 'red',
		supporting: '',
		checked: true,
	},
};

const Template: Story = (args: RadioProps) => <Radio {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultLightTheme = Template.bind({});
asChromaticStory(DefaultLightTheme);

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioBrand,
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const SupportingTextLightTheme = Template.bind({});
SupportingTextLightTheme.args = {
	supporting: '#ff0000',
};
asChromaticStory(SupportingTextLightTheme);

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({});
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioBrand,
};
SupportingTextBrandTheme.args = {
	supporting: '#ff0000',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const SupportingTextOnlyLightTheme = Template.bind({});
SupportingTextOnlyLightTheme.args = {
	supporting: '#ff0000',
	label: null,
};
asChromaticStory(SupportingTextOnlyLightTheme);

// *****************************************************************************

export const SupportingTextOnlyBrandTheme = Template.bind({});
SupportingTextOnlyBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioBrand,
};
SupportingTextOnlyBrandTheme.args = {
	supporting: '#ff0000',
	label: null,
};
asChromaticStory(SupportingTextOnlyBrandTheme);

// *****************************************************************************

export const UnlabelledLightTheme = Template.bind({});
UnlabelledLightTheme.args = {
	label: undefined,
};
asChromaticStory(UnlabelledLightTheme);
