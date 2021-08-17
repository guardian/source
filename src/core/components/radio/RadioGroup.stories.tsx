import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { Radio } from './Radio';
import { radioBrand } from './index';
import { ThemeProvider } from '@emotion/react';
import RadioStories from './Radio.stories';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
	title: 'Source/src-radio/RadioGroup',
	component: RadioGroup,
	subcomponents: { Radio },
	args: {
		name: 'colours',
		label: 'Select your preferred colour',
		supporting: '',
		hideLabel: false,
		orientation: 'vertical',
		error: '',
	},
	argTypes: {
		// Override the control so that users can try entering a string in the Storybook canvas
		supporting: {
			control: {
				type: 'text',
			},
		},
		id: { control: null },
		className: { control: null },
		cssOverrides: { control: null },
	},
};

const Image = () => (
	<div style={{ padding: `8px 0` }}>
		<img
			alt="test"
			src="https://i.guim.co.uk/img/media/9bd896505173dcf4adadd02e5f40a03414c50bdc/172_201_2329_1397/master/2329.jpg?width=620&quality=85&auto=format&fit=max&s=133b7c6ce78a0780e99e605bb3ae7479"
		/>
	</div>
);

const Template: Story = (args: RadioGroupProps) => (
	<RadioGroup {...args}>
		<Radio {...RadioStories.args} key="radio-1" />
	</RadioGroup>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultLightTheme = Template.bind({});
asChromaticStory(DefaultLightTheme);

// *****************************************************************************

export const DefaultBrandTheme: Story = (args: RadioGroupProps) => (
	<ThemeProvider theme={radioBrand}>
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

export const HorizontalLightTheme = Template.bind({});
HorizontalLightTheme.args = {
	orientation: 'horizontal',
};
asChromaticStory(HorizontalLightTheme);

// *****************************************************************************

export const VisuallyHideLegendLightTheme = Template.bind({});
VisuallyHideLegendLightTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendLightTheme);

// *****************************************************************************

export const SupportingTextLightTheme = Template.bind({});
SupportingTextLightTheme.args = {
	supporting: 'You can always change it later',
};
asChromaticStory(SupportingTextLightTheme);

// *****************************************************************************

export const SupportingTextBrandTheme: Story = (args: RadioGroupProps) => (
	<ThemeProvider theme={radioBrand}>
		<Template {...args} />
	</ThemeProvider>
);
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
};
SupportingTextBrandTheme.args = {
	supporting: 'You can always change it later',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const SupportingMediaLightTheme = Template.bind({});
SupportingMediaLightTheme.args = {
	supporting: <Image />,
};
asChromaticStory(SupportingMediaLightTheme);

// *****************************************************************************

export const ErrorLightTheme = Template.bind({});
ErrorLightTheme.args = {
	error: 'Please select a colour',
};
asChromaticStory(ErrorLightTheme);

// *****************************************************************************

export const ErrorBrandTheme: Story = (args: RadioGroupProps) => (
	<ThemeProvider theme={radioBrand}>
		<Template {...args} />
	</ThemeProvider>
);
ErrorBrandTheme.args = {
	error: 'Please select a colour',
};
ErrorBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
};
asChromaticStory(ErrorBrandTheme);

// *****************************************************************************

export const SupportingMediaWithErrorLightTheme = Template.bind({});
SupportingMediaWithErrorLightTheme.args = {
	error: 'Please select a colour',
	supporting: <Image />,
};
asChromaticStory(SupportingMediaWithErrorLightTheme);
