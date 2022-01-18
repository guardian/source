import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { Radio } from './Radio';
import RadioStories from './Radio.stories';
import type { RadioGroupProps } from './RadioGroup';
import { RadioGroup } from './RadioGroup';
import { radioThemeBrand } from './theme';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
	title: 'Packages/source-react-components/RadioGroup',
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

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const HorizontalDefaultTheme = Template.bind({});
HorizontalDefaultTheme.args = {
	orientation: 'horizontal',
};
asChromaticStory(HorizontalDefaultTheme);

// *****************************************************************************

export const VisuallyHideLegendDefaultTheme = Template.bind({});
VisuallyHideLegendDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendDefaultTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'You can always change it later',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({});
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};
SupportingTextBrandTheme.args = {
	supporting: 'You can always change it later',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const SupportingMediaDefaultTheme = Template.bind({});
SupportingMediaDefaultTheme.args = {
	supporting: <Image />,
};
asChromaticStory(SupportingMediaDefaultTheme);

// *****************************************************************************

export const ErrorDefaultTheme = Template.bind({});
ErrorDefaultTheme.args = {
	error: 'Please select a colour',
};
asChromaticStory(ErrorDefaultTheme);

// *****************************************************************************

export const ErrorBrandTheme = Template.bind({});
ErrorBrandTheme.args = {
	error: 'Please select a colour',
};
ErrorBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};
asChromaticStory(ErrorBrandTheme);

// *****************************************************************************

export const SupportingMediaWithErrorDefaultTheme = Template.bind({});
SupportingMediaWithErrorDefaultTheme.args = {
	error: 'Please select a colour',
	supporting: <Image />,
};
asChromaticStory(SupportingMediaWithErrorDefaultTheme);
