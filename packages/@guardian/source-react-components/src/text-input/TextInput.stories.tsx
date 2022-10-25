import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { TextInput } from './TextInput';
import type { TextInputProps } from './TextInput';

export default {
	title: 'Packages/source-react-components/TextInput',
	component: TextInput,
	args: {
		label: 'Email',
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
				error: 'The email address entered is not valid',
			},
			control: { type: 'radio' },
		},
		success: {
			options: ['undefined', 'success'],
			mapping: {
				undefined: undefined,
				success: 'Your email address has been registered successfully',
			},
			control: { type: 'radio' },
		},
		id: { control: null },
	},
};

const Template: Story<TextInputProps> = (args: TextInputProps) => {
	const [state, setState] = useState('');
	return (
		<TextInput
			{...args}
			value={state}
			onChange={(event) => setState(event.target.value)}
		/>
	);
};

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
	supporting: 'alex@example.com',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************

export const Width30DefaultTheme = Template.bind({});
Width30DefaultTheme.args = {
	width: 30,
	label: 'First name',
};
asChromaticStory(Width30DefaultTheme);

// *****************************************************************************

export const Width10DefaultTheme = Template.bind({});
Width10DefaultTheme.args = {
	width: 10,
	label: 'Postcode',
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

export const ConstraintDefaultTheme = Template.bind({});
ConstraintDefaultTheme.args = {
	label: 'Phone number',
	pattern: '[0-9]{1,11}',
	title: '11 digit phone number',
	type: 'tel',
};
asChromaticStory(ConstraintDefaultTheme);

// *****************************************************************************
