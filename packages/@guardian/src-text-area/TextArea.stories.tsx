import { TextArea, TextAreaProps } from './index';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-text-area/TextArea',
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
		error: undefined,
		success: undefined,
	},
};

const Template: Story<TextAreaProps> = (args: TextAreaProps) => (
	<TextArea {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	rows: 3,
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const WithRowsDefaultTheme = Template.bind({});
WithRowsDefaultTheme.args = {
	rows: 10,
};
asChromaticStory(WithRowsDefaultTheme);

// *****************************************************************************

export const OptionalDefaultTheme = Template.bind({});
OptionalDefaultTheme.args = {
	optional: true,
};
asChromaticStory(OptionalDefaultTheme);

// *****************************************************************************

export const VisuallyHideLabelDefaultTheme = Template.bind({});
VisuallyHideLabelDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLabelDefaultTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting:
		'Please keep comments respectful and abide by the community guidelines.',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************

export const ErrorWithMessageDefaultTheme = Template.bind({});
ErrorWithMessageDefaultTheme.args = {
	error: 'Please tell us your views',
};
asChromaticStory(ErrorWithMessageDefaultTheme);

// *****************************************************************************

export const SuccessWithMessageDefaultTheme = Template.bind({});
SuccessWithMessageDefaultTheme.args = {
	success: 'Thanks for telling us your views',
};
asChromaticStory(SuccessWithMessageDefaultTheme);

// *****************************************************************************

export const WithMaxLengthDefaultTheme = Template.bind({});
WithMaxLengthDefaultTheme.args = {
	maxLengh: 10,
};
asChromaticStory(WithMaxLengthDefaultTheme);

// *****************************************************************************
