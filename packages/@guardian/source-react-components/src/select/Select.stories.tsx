import type { Story } from '@storybook/react';
import { Option } from './Option';
import type { SelectProps } from './Select';
import { Select } from './Select';

export default {
	title: 'Packages/source-react-components/Select',
	component: Select,
	subcomponents: { Option },
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error:
					'Please select your home state. This service is unavailable outside of the US.',
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
		error: 'undefined',
		success: 'undefined',
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

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({});
VisuallyHideLabelDefaultTheme.args = {
	hideLabel: true,
};

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};

// *****************************************************************************

export const ErrorWithMessageDefaultTheme = Template.bind({});
ErrorWithMessageDefaultTheme.args = {
	error: 'error',
};

// *****************************************************************************

export const SuccessWithMessageDefaultTheme = Template.bind({});
SuccessWithMessageDefaultTheme.args = {
	success: 'success',
};

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Leave blank if you are not within the US',
};

// *****************************************************************************
