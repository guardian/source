import { TextArea, TextAreaProps } from './index';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
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
	},
	args: {
		label: 'Comments',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: undefined,
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

export const DefaultLight = Template.bind({});
asChromaticStory(DefaultLight);

// *****************************************************************************

export const WithRows = Template.bind({});
WithRows.args = {
	rows: 10,
};
asChromaticStory(WithRows);

// *****************************************************************************

export const OptionalLight = Template.bind({});
OptionalLight.args = {
	optional: true,
};
asChromaticStory(OptionalLight);

// *****************************************************************************

export const VisuallyHideLabelLight = Template.bind({});
VisuallyHideLabelLight.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLabelLight);

// *****************************************************************************

export const SupportingTextLight = Template.bind({});
SupportingTextLight.args = {
	supporting:
		'Please keep comments respectful and abide by the community guidelines.',
};
asChromaticStory(SupportingTextLight);

// *****************************************************************************

export const ErrorWithMessageLight = Template.bind({});
ErrorWithMessageLight.args = {
	error: 'Please tell us your views',
};
asChromaticStory(ErrorWithMessageLight);

// *****************************************************************************

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
	maxLengh: 10,
};
asChromaticStory(WithMaxLength);

// *****************************************************************************
