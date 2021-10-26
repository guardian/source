import { LinkButton, LinkButtonProps } from './LinkButton';
import { SvgArrowRightStraight } from '@guardian/src-icons';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

const priorityArgs = ['primary', 'secondary', 'tertiary', 'subdued'];

export default {
	title: 'Source/src-button/LinkButton',
	component: LinkButton,
	argTypes: {
		icon: {
			options: ['undefined', 'arrow'],
			mapping: {
				undefined: undefined,
				arrow: <SvgArrowRightStraight />,
			},
			control: { type: 'radio' },
		},
	},
	args: {
		children: 'Link Button',
		size: 'default',
		hideLabel: false,
		icon: undefined,
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

const Template: Story<LinkButtonProps> = (args: LinkButtonProps) => (
	<LinkButton {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const [
	PrimaryPriorityDefaultTheme,
	SecondaryPriorityDefaultTheme,
	TertiaryPriorityDefaultTheme,
	SubduedPriorityDefaultTheme,
] = priorityArgs.map((priority) => {
	const story = Template.bind({});

	story.args = {
		priority,
	};
	asChromaticStory(story);

	return story;
});

// *****************************************************************************

export const TextAndIconLeftDefaultSizeDefaultTheme = Template.bind({});
TextAndIconLeftDefaultSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
};
asChromaticStory(TextAndIconLeftDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({});
TextAndIconRightDefaultSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
};
asChromaticStory(TextAndIconRightDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftSmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'small',
};
asChromaticStory(TextAndIconLeftSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightSmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	size: 'small',
};
asChromaticStory(TextAndIconRightSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftXSmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'xsmall',
};
asChromaticStory(TextAndIconLeftXSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightXSmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	size: 'xsmall',
};
asChromaticStory(TextAndIconRightXSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftWithNudgeDefaultTheme = Template.bind({});
TextAndIconLeftWithNudgeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	nudgeIcon: true,
};
asChromaticStory(TextAndIconLeftWithNudgeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightWithNudgeDefaultTheme = Template.bind({});
TextAndIconRightWithNudgeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	nudgeIcon: true,
};
asChromaticStory(TextAndIconRightWithNudgeDefaultTheme);

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({});
IconOnlyDefaultSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	hideLabel: true,
};
asChromaticStory(IconOnlyDefaultSizeDefaultTheme);

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({});
IconOnlySmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'small',
	hideLabel: true,
};
asChromaticStory(IconOnlySmallSizeDefaultTheme);

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({});
IconOnlyXSmallSizeDefaultTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'xsmall',
	hideLabel: true,
};
asChromaticStory(IconOnlyXSmallSizeDefaultTheme);
