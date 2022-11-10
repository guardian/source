import type { Story } from '@storybook/react';
import { SvgArrowRightStraight } from '../../vendor/icons/SvgArrowRightStraight';
import { LinkButton } from './LinkButton';
import type { LinkButtonProps } from './LinkButton';
import type { ButtonPriority } from './types';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

const priorityArgs: ButtonPriority[] = [
	'primary',
	'secondary',
	'tertiary',
	'subdued',
];

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

	return story;
});

// *****************************************************************************

export const TextAndIconLeftDefaultSizeDefaultTheme = Template.bind({});
TextAndIconLeftDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
};

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({});
TextAndIconRightDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	iconSide: 'right',
};

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	size: 'small',
};

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	iconSide: 'right',
	size: 'small',
};

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	size: 'xsmall',
};

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	iconSide: 'right',
	size: 'xsmall',
};

// *****************************************************************************

export const TextAndIconLeftWithNudgeDefaultTheme = Template.bind({});
TextAndIconLeftWithNudgeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	nudgeIcon: true,
};

// *****************************************************************************

export const TextAndIconRightWithNudgeDefaultTheme = Template.bind({});
TextAndIconRightWithNudgeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	iconSide: 'right',
	nudgeIcon: true,
};

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({});
IconOnlyDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	hideLabel: true,
};

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({});
IconOnlySmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	size: 'small',
	hideLabel: true,
};

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({});
IconOnlyXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'arrow' to <SvgArrowRightStraight />
	icon: 'arrow',
	size: 'xsmall',
	hideLabel: true,
};
