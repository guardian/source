import type { Story } from '@storybook/react';
import { useState } from 'react';
import type { TextAreaProps } from './TextArea';
import { TextArea } from './TextArea';

export default {
	title: 'Packages/source-react-components/TextArea',
	component: TextArea,
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error: 'Please tell us your views',
			},
			control: { type: 'radio' },
		},
		success: {
			options: ['undefined', 'success'],
			mapping: {
				undefined: undefined,
				success: 'Thanks for telling us your views',
			},
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Comments',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: 'undefined',
		success: 'undefined',
	},
};

const Template: Story<TextAreaProps> = (args: TextAreaProps) => {
	const [value, setValue] = useState(args.value);

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setValue(e.target.value);

	return <TextArea {...args} onChange={onChange} value={value} />;
};

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const WithRowsDefaultTheme = Template.bind({});
WithRowsDefaultTheme.args = {
	rows: 10,
};

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({});
VisuallyHideLabelDefaultTheme.args = {
	hideLabel: true,
};

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting:
		'Please keep comments respectful and abide by the community guidelines.',
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

export const WithMaxLengthDefaultTheme = Template.bind({});
WithMaxLengthDefaultTheme.args = {
	maxLength: 10,
};

// *****************************************************************************

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
	value: 'This is a value passed in as a prop',
};

// *****************************************************************************
