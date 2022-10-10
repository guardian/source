import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
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

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};
asChromaticStory(OptionalDefaultTheme);

// *****************************************************************************

export const HideLabelDefaultTheme = Template.bind({});
HideLabelDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(HideLabelDefaultTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Must be between 6 and 8 digits long',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************

export const Width30DefaultTheme = Template.bind({});
Width30DefaultTheme.args = {
	width: 30,
	label: 'Card number',
};
asChromaticStory(Width30DefaultTheme);

// *****************************************************************************

export const Width10DefaultTheme = Template.bind({});
Width10DefaultTheme.args = {
	width: 10,
	label: 'Sort code',
};
asChromaticStory(Width10DefaultTheme);

// *****************************************************************************

export const Width4DefaultTheme = Template.bind({});
Width4DefaultTheme.args = {
	width: 4,
	label: 'Year of birth',
};
asChromaticStory(Width4DefaultTheme);

// *****************************************************************************

export const ErrorWithMessageDefaultTheme = Template.bind({});
ErrorWithMessageDefaultTheme.args = {
	error: 'error',
};
asChromaticStory(ErrorWithMessageDefaultTheme);

// *****************************************************************************

export const SuccessWithMessageDefaultTheme = Template.bind({});
SuccessWithMessageDefaultTheme.args = {
	success: 'success',
};
asChromaticStory(SuccessWithMessageDefaultTheme);

// *****************************************************************************
export const WithPrefix = Template.bind({});
WithPrefix.args = {
	prefix: '£',
	label: 'Contribution amount',
};
asChromaticStory(WithPrefix);

// *****************************************************************************
export const WithSuffix = Template.bind({});
WithSuffix.args = {
	suffix: 'kr.',
	label: 'Contribution amount',
};
asChromaticStory(WithSuffix);

// *****************************************************************************
export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = {
	prefix: '£',
	suffix: 'per month',
	label: 'Contribution amount',
};
asChromaticStory(WithPrefixAndSuffix);
