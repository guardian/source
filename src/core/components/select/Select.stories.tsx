import { Select, SelectProps } from './Select';
import { Option } from './Option';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';

export default {
	title: 'Source/src-select/Select',
	component: Select,
	subcomponents: { Option },
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error: 'Please select your home state. This service is unavailable outside of the US.',
			},
			control: { type: 'radio' },
		},
		success: {
			options: ['undefined', 'success'],
			mapping: {
				undefined: undefined,
				success: 'This service is available in your state',
			},
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'State',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: '',
		success: '',
	},
};

const Template: Story<SelectProps> = (args: SelectProps) => (
	<Select {...args}>
		<Option value="">Select a state</Option>
		<Option value="al">Alabama</Option>
		<Option value="ca">California</Option>
	</Select>
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	supporting: 'Leave blank if you are not within the US',
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultLight = Template.bind({});
asChromaticStory(DefaultLight);

// *****************************************************************************

export const ErrorWithMessageLight = Template.bind({});
ErrorWithMessageLight.args = {
	error: 'Please select your home state. This service is unavailable outside of the US.',
};
asChromaticStory(ErrorWithMessageLight);

// *****************************************************************************

export const VisuallyHideLabelLight = Template.bind({});
VisuallyHideLabelLight.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLabelLight);

// *****************************************************************************

export const OptionalLight = Template.bind({});
OptionalLight.args = {
	optional: true,
};
asChromaticStory(OptionalLight);

// *****************************************************************************

export const SuccessWithMessageLight = Template.bind({});
SuccessWithMessageLight.args = {
	success: 'This service is available in your state',
};
asChromaticStory(SuccessWithMessageLight);

// *****************************************************************************

export const SupportingTextLight = Template.bind({});
SupportingTextLight.args = {
	supporting: 'Leave blank if you are not within the US',
};
asChromaticStory(SupportingTextLight);

// *****************************************************************************
