import { LinkButton, LinkButtonProps } from './LinkButton';
import { SvgArrowRightStraight } from '@guardian/src-icons';
import { asPlayground, asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/@types/storybook-emotion-10-fixes';
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
	PrimaryPriorityLightTheme,
	SecondaryPriorityLightTheme,
	TertiaryPriorityLightTheme,
	SubduedPriorityLightTheme,
] = priorityArgs.map((priority) => {
	const story = Template.bind({});

	story.args = {
		priority,
	};
	asChromaticStory(story);

	return story;
});

// *****************************************************************************

export const TextAndIconLeftDefaultSizeLightTheme = Template.bind({});
TextAndIconLeftDefaultSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
};
asChromaticStory(TextAndIconLeftDefaultSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightDefaultSizeLightTheme = Template.bind({});
TextAndIconRightDefaultSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
};
asChromaticStory(TextAndIconRightDefaultSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftSmallSizeLightTheme = Template.bind({});
TextAndIconLeftSmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'small',
};
asChromaticStory(TextAndIconLeftSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightSmallSizeLightTheme = Template.bind({});
TextAndIconRightSmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	size: 'small',
};
asChromaticStory(TextAndIconRightSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftXSmallSizeLightTheme = Template.bind({});
TextAndIconLeftXSmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'xsmall',
};
asChromaticStory(TextAndIconLeftXSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightXSmallSizeLightTheme = Template.bind({});
TextAndIconRightXSmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	size: 'xsmall',
};
asChromaticStory(TextAndIconRightXSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftWithNudgeLightTheme = Template.bind({});
TextAndIconLeftWithNudgeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	nudgeIcon: true,
};
asChromaticStory(TextAndIconLeftWithNudgeLightTheme);

// *****************************************************************************

export const TextAndIconRightWithNudgeLightTheme = Template.bind({});
TextAndIconRightWithNudgeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	iconSide: 'right',
	nudgeIcon: true,
};
asChromaticStory(TextAndIconRightWithNudgeLightTheme);

// *****************************************************************************

export const IconOnlyDefaultSizeLightTheme = Template.bind({});
IconOnlyDefaultSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	hideLabel: true,
};
asChromaticStory(IconOnlyDefaultSizeLightTheme);

// *****************************************************************************

export const IconOnlySmallSizeLightTheme = Template.bind({});
IconOnlySmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'small',
	hideLabel: true,
};
asChromaticStory(IconOnlySmallSizeLightTheme);

// *****************************************************************************

export const IconOnlyXSmallSizeLightTheme = Template.bind({});
IconOnlyXSmallSizeLightTheme.args = {
	icon: <SvgArrowRightStraight />,
	size: 'xsmall',
	hideLabel: true,
};
asChromaticStory(IconOnlyXSmallSizeLightTheme);
