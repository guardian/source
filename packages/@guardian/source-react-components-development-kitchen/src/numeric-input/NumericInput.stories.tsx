import type { Story } from '@storybook/react';
import { useState } from 'react';
import type { NumericInputProps } from './NumericInput';
import { NumericInput } from './NumericInput';

export default {
	title: 'Packages/source-react-components-development-kitchen/NumericInput',
	component: NumericInput,
	args: {
		label: 'Account number',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: 'undefined',
		success: 'undefined',
	},
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error: 'The account number entered is not valid',
			},
			control: { type: 'radio' },
		},
		success: {
			options: ['undefined', 'success'],
			mapping: {
				undefined: undefined,
				success: 'Your account number has been validated successfully',
			},
			control: { type: 'radio' },
		},
		id: { control: null },
	},
};

const Template: Story<NumericInputProps> = (args: NumericInputProps) => {
	const [state, setState] = useState('');
	return (
		<NumericInput
			{...args}
			value={state}
			onChange={(event) => setState(event.target.value)}
		/>
	);
};

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};

// *****************************************************************************

export const HideLabelDefaultTheme = Template.bind({});
HideLabelDefaultTheme.args = {
	hideLabel: true,
};

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Must be between 6 and 8 digits long',
};

// *****************************************************************************

export const Width30DefaultTheme = Template.bind({});
Width30DefaultTheme.args = {
	width: 30,
	label: 'Card number',
};

// *****************************************************************************

export const Width10DefaultTheme = Template.bind({});
Width10DefaultTheme.args = {
	width: 10,
	label: 'Sort code',
};

// *****************************************************************************

export const Width4DefaultTheme = Template.bind({});
Width4DefaultTheme.args = {
	width: 4,
	label: 'Year of birth',
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
export const WithPrefix = Template.bind({});
WithPrefix.args = {
	prefixText: '£',
	label: 'Contribution amount',
};

// *****************************************************************************
export const WithSuffix = Template.bind({});
WithSuffix.args = {
	suffixText: 'kr.',
	label: 'Contribution amount',
};

// *****************************************************************************
export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = {
	prefixText: '£',
	suffixText: 'per month',
	label: 'Contribution amount',
	supporting: 'Will be charged monthly starting from today',
};

// *****************************************************************************
export const WithPrefixAndError = Template.bind({});
WithPrefixAndError.args = {
	prefixText: '£',
	label: 'Contribution amount',
	error: 'The amount entered is not valid',
};

// *****************************************************************************
export const WithSuffixAndSuccess = Template.bind({});
WithSuffixAndSuccess.args = {
	suffixText: 'kr.',
	label: 'Contribution amount',
	success: 'success',
};
