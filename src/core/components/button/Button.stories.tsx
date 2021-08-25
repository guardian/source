import { Button, ButtonProps } from './Button';
import type { ButtonPriority } from './types';
import {
	buttonBrand,
	buttonBrandAlt,
	buttonReaderRevenue,
	buttonReaderRevenueBrand,
	buttonReaderRevenueBrandAlt,
} from './index';
import { SvgCross } from '@guardian/src-icons';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type {
	Story,
	Parameters,
} from '../../../@types/storybook-emotion-10-fixes';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

const priorityArgs: ButtonPriority[] = [
	'primary',
	'secondary',
	'tertiary',
	'subdued',
];
const readerRevenuePriorityArgs: ButtonPriority[] = ['primary', 'tertiary'];
const themeParameters = {
	default: {},
	brand: {
		backgrounds: {
			default: 'brandBackground.primary',
		},
		theme: buttonBrand,
	},
	brandAlt: {
		backgrounds: {
			default: 'brandAltBackground.primary',
		},
		theme: buttonBrandAlt,
	},
	readerRevenue: {
		theme: buttonReaderRevenue,
	},
	readerRevenueBrand: {
		backgrounds: {
			default: 'brandBackground.primary',
		},
		theme: buttonReaderRevenueBrand,
	},
	readerRevenueBrandAlt: {
		backgrounds: {
			default: 'brandAltBackground.primary',
		},
		theme: buttonReaderRevenueBrandAlt,
	},
};
const createStory = (args: Partial<ButtonProps>, parameters: Parameters) => {
	const story = Template.bind({});

	story.parameters = parameters;
	story.args = args;
	asChromaticStory(story);

	return story;
};

export default {
	title: 'Source/src-button/Button',
	component: Button,
	argTypes: {
		icon: {
			options: ['undefined', 'cross'],
			mapping: {
				undefined: undefined,
				cross: <SvgCross />,
			},
			control: { type: 'radio' },
		},
	},
	args: {
		children: 'Button',
		size: 'default',
		hideLabel: false,
		icon: undefined,
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
	<Button {...args} />
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
] = priorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.default),
);

// *****************************************************************************

export const [
	PrimaryPriorityBrandTheme,
	SecondaryPriorityBrandTheme,
	TertiaryPriorityBrandTheme,
	SubduedPriorityBrandTheme,
] = priorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.brand),
);

// *****************************************************************************

export const [
	PrimaryPriorityBrandAltTheme,
	SecondaryPriorityBrandAltTheme,
	TertiaryPriorityBrandAltTheme,
	SubduedPriorityBrandAltTheme,
] = priorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.brandAlt),
);

// *****************************************************************************

export const [
	PrimaryPriorityReaderRevenueTheme,
	TertiaryPriorityReaderRevenueTheme,
] = readerRevenuePriorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.readerRevenue),
);

// *****************************************************************************

export const [
	PrimaryPriorityReaderRevenueBrandTheme,
	TertiaryPriorityReaderRevenueBrandTheme,
] = readerRevenuePriorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.readerRevenueBrand),
);

// *****************************************************************************

export const [
	PrimaryPriorityReaderRevenueBrandAltTheme,
	TertiaryPriorityReaderRevenueBrandAltTheme,
] = readerRevenuePriorityArgs.map((priority) =>
	createStory({ priority }, themeParameters.readerRevenueBrandAlt),
);

// *****************************************************************************

export const DefaultSizeLightTheme = Template.bind({});
asChromaticStory(DefaultSizeLightTheme);

// *****************************************************************************

export const SmallSizeLightTheme = Template.bind({});
SmallSizeLightTheme.args = {
	size: 'small',
};
asChromaticStory(SmallSizeLightTheme);

// *****************************************************************************

export const XSmallSizeLightTheme = Template.bind({});
XSmallSizeLightTheme.args = {
	size: 'xsmall',
};
asChromaticStory(XSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftDefaultSizeLightTheme = Template.bind({});
TextAndIconLeftDefaultSizeLightTheme.args = {
	icon: <SvgCross />,
};
asChromaticStory(TextAndIconLeftDefaultSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightDefaultSizeLightTheme = Template.bind({});
TextAndIconRightDefaultSizeLightTheme.args = {
	icon: <SvgCross />,
	iconSide: 'right',
};
asChromaticStory(TextAndIconRightDefaultSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftSmallSizeLightTheme = Template.bind({});
TextAndIconLeftSmallSizeLightTheme.args = {
	icon: <SvgCross />,
	size: 'small',
};
asChromaticStory(TextAndIconLeftSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightSmallSizeLightTheme = Template.bind({});
TextAndIconRightSmallSizeLightTheme.args = {
	icon: <SvgCross />,
	iconSide: 'right',
	size: 'small',
};
asChromaticStory(TextAndIconRightSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconLeftXSmallSizeLightTheme = Template.bind({});
TextAndIconLeftXSmallSizeLightTheme.args = {
	icon: <SvgCross />,
	size: 'xsmall',
};
asChromaticStory(TextAndIconLeftXSmallSizeLightTheme);

// *****************************************************************************

export const TextAndIconRightXSmallSizeLightTheme = Template.bind({});
TextAndIconRightXSmallSizeLightTheme.args = {
	icon: <SvgCross />,
	iconSide: 'right',
	size: 'xsmall',
};
asChromaticStory(TextAndIconRightXSmallSizeLightTheme);

// *****************************************************************************

export const IconOnlyDefaultSizeLightTheme = Template.bind({});
IconOnlyDefaultSizeLightTheme.args = {
	icon: <SvgCross />,
	hideLabel: true,
};
asChromaticStory(IconOnlyDefaultSizeLightTheme);

// *****************************************************************************

export const IconOnlySmallSizeLightTheme = Template.bind({});
IconOnlySmallSizeLightTheme.args = {
	icon: <SvgCross />,
	hideLabel: true,
	size: 'small',
};
asChromaticStory(IconOnlySmallSizeLightTheme);

// *****************************************************************************

export const IconOnlyXSmallSizeLightTheme = Template.bind({});
IconOnlyXSmallSizeLightTheme.args = {
	icon: <SvgCross />,
	hideLabel: true,
	size: 'xsmall',
};
asChromaticStory(IconOnlyXSmallSizeLightTheme);
