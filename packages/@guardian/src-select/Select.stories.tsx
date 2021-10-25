import { Select, SelectProps } from './Select';
import { Option } from './Option';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';

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

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const ErrorWithMessageDefaultTheme = Template.bind({});
ErrorWithMessageDefaultTheme.args = {
	error: 'Please select your home state. This service is unavailable outside of the US.',
};
asChromaticStory(ErrorWithMessageDefaultTheme);

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({});
VisuallyHideLabelDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLabelDefaultTheme);

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};
asChromaticStory(OptionalDefaultTheme);

// *****************************************************************************

export const SuccessWithMessageDefaultTheme = Template.bind({});
SuccessWithMessageDefaultTheme.args = {
	success: 'This service is available in your state',
};
asChromaticStory(SuccessWithMessageDefaultTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Leave blank if you are not within the US',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************
