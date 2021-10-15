import { useState } from 'react';
import { TextInput } from './index';
import type { TextInputProps } from './index';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-text-input/TextInput',
	component: TextInput,
	args: {
		label: 'Email',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: undefined,
		success: undefined,
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

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultLightTheme = Template.bind({});
asChromaticStory(DefaultLightTheme);

// *****************************************************************************

export const OptionalLight = Template.bind({});
OptionalLight.args = {
	optional: true,
};
asChromaticStory(OptionalLight);

// *****************************************************************************

export const HideLabel = Template.bind({});
HideLabel.args = {
	hideLabel: true,
};
asChromaticStory(HideLabel);

// *****************************************************************************

export const SupportingTextLight = Template.bind({});
SupportingTextLight.args = {
	supporting: 'alex@example.com',
};
asChromaticStory(SupportingTextLight);

// *****************************************************************************

export const Width30Light = Template.bind({});
Width30Light.args = {
	width: 30,
	label: 'First name',
};
asChromaticStory(Width30Light);

// *****************************************************************************

export const Width10Light = Template.bind({});
Width10Light.args = {
	width: 10,
	label: 'Postcode',
};
asChromaticStory(Width10Light);

// *****************************************************************************

export const Width4Light = Template.bind({});
Width4Light.args = {
	width: 4,
	label: 'Year of birth',
};
asChromaticStory(Width4Light);

// *****************************************************************************

export const ErrorWithMessageLight = Template.bind({});
ErrorWithMessageLight.args = {
	error: 'The email address entered is not valid',
};
asChromaticStory(ErrorWithMessageLight);

// *****************************************************************************

export const SuccessWithMessageLight = Template.bind({});
SuccessWithMessageLight.args = {
	success: 'Your email address has been registered successfully',
};
asChromaticStory(SuccessWithMessageLight);

// *****************************************************************************

export const ConstraintLight = Template.bind({});
ConstraintLight.args = {
	label: 'Phone number',
	pattern: '[0-9]{1,11}',
	title: '11 digit phone number',
	type: 'tel',
};
asChromaticStory(ConstraintLight);

// *****************************************************************************
