import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { SvgArrowRightStraight } from '../../vendor/icons/SvgArrowRightStraight';
import { LinkButton } from './LinkButton';
import type { LinkButtonProps } from './LinkButton';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

const priorityArgs = ['primary', 'secondary', 'tertiary', 'subdued'];

export default {
	title: 'Packages/source-react-components/LinkButton',
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
		children: 'Subscribe now',
		size: 'default',
		hideLabel: false,
		icon: 'undefined',
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
		href: '#',
	},
};

const Template: Story<LinkButtonProps> = (args: LinkButtonProps) => (
	<LinkButton {...args} />
);

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
	icon: 'arrow',
};
asChromaticStory(TextAndIconLeftDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({});
TextAndIconRightDefaultSizeDefaultTheme.args = {
	icon: 'arrow',
	iconSide: 'right',
};
asChromaticStory(TextAndIconRightDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftSmallSizeDefaultTheme.args = {
	icon: 'arrow',
	size: 'small',
};
asChromaticStory(TextAndIconLeftSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightSmallSizeDefaultTheme.args = {
	icon: 'arrow',
	iconSide: 'right',
	size: 'small',
};
asChromaticStory(TextAndIconRightSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftXSmallSizeDefaultTheme.args = {
	icon: 'arrow',
	size: 'xsmall',
};
asChromaticStory(TextAndIconLeftXSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightXSmallSizeDefaultTheme.args = {
	icon: 'arrow',
	iconSide: 'right',
	size: 'xsmall',
};
asChromaticStory(TextAndIconRightXSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftWithNudgeDefaultTheme = Template.bind({});
TextAndIconLeftWithNudgeDefaultTheme.args = {
	icon: 'arrow',
	nudgeIcon: true,
};
asChromaticStory(TextAndIconLeftWithNudgeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightWithNudgeDefaultTheme = Template.bind({});
TextAndIconRightWithNudgeDefaultTheme.args = {
	icon: 'arrow',
	iconSide: 'right',
	nudgeIcon: true,
};
asChromaticStory(TextAndIconRightWithNudgeDefaultTheme);

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({});
IconOnlyDefaultSizeDefaultTheme.args = {
	icon: 'arrow',
	hideLabel: true,
};
asChromaticStory(IconOnlyDefaultSizeDefaultTheme);

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({});
IconOnlySmallSizeDefaultTheme.args = {
	icon: 'arrow',
	size: 'small',
	hideLabel: true,
};
asChromaticStory(IconOnlySmallSizeDefaultTheme);

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({});
IconOnlyXSmallSizeDefaultTheme.args = {
	icon: 'arrow',
	size: 'xsmall',
	hideLabel: true,
};
asChromaticStory(IconOnlyXSmallSizeDefaultTheme);
