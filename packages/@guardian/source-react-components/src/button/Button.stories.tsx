import type {
	Parameters,
	Story,
} from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { SvgCross } from '../icons/SvgCross';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { buttonThemeBrand, buttonThemeBrandAlt } from './theme';
import {
	buttonThemeReaderRevenue,
	buttonThemeReaderRevenueBrand,
	buttonThemeReaderRevenueBrandAlt,
} from './theme-reader-revenue';
import type { ButtonPriority } from './types';
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
		theme: buttonThemeBrand,
	},
	brandAlt: {
		backgrounds: {
			default: 'brandAltBackground.primary',
		},
		theme: buttonThemeBrandAlt,
	},
	readerRevenue: {
		theme: buttonThemeReaderRevenue,
	},
	readerRevenueBrand: {
		backgrounds: {
			default: 'brandBackground.primary',
		},
		theme: buttonThemeReaderRevenueBrand,
	},
	readerRevenueBrandAlt: {
		backgrounds: {
			default: 'brandAltBackground.primary',
		},
		theme: buttonThemeReaderRevenueBrandAlt,
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
	title: 'Packages/source-react-components/Button',
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
		children: 'Subscribe now',
		size: 'default',
		hideLabel: false,
		icon: 'undefined',
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
	PrimaryPriorityDefaultTheme,
	SecondaryPriorityDefaultTheme,
	TertiaryPriorityDefaultTheme,
	SubduedPriorityDefaultTheme,
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

export const DefaultSizeDefaultTheme = Template.bind({});
asChromaticStory(DefaultSizeDefaultTheme);

// *****************************************************************************

export const SmallSizeDefaultTheme = Template.bind({});
SmallSizeDefaultTheme.args = {
	size: 'small',
};
asChromaticStory(SmallSizeDefaultTheme);

// *****************************************************************************

export const XSmallSizeDefaultTheme = Template.bind({});
XSmallSizeDefaultTheme.args = {
	size: 'xsmall',
};
asChromaticStory(XSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftDefaultSizeDefaultTheme = Template.bind({});
TextAndIconLeftDefaultSizeDefaultTheme.args = {
	icon: 'cross',
	children: 'Close',
};
asChromaticStory(TextAndIconLeftDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({});
TextAndIconRightDefaultSizeDefaultTheme.args = {
	icon: 'cross',
	iconSide: 'right',
	children: 'Close',
};
asChromaticStory(TextAndIconRightDefaultSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftSmallSizeDefaultTheme.args = {
	icon: 'cross',
	size: 'small',
	children: 'Close',
};
asChromaticStory(TextAndIconLeftSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightSmallSizeDefaultTheme.args = {
	icon: 'cross',
	iconSide: 'right',
	size: 'small',
	children: 'Close',
};
asChromaticStory(TextAndIconRightSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftXSmallSizeDefaultTheme.args = {
	icon: 'cross',
	size: 'xsmall',
	children: 'Close',
};
asChromaticStory(TextAndIconLeftXSmallSizeDefaultTheme);

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightXSmallSizeDefaultTheme.args = {
	icon: 'cross',
	iconSide: 'right',
	size: 'xsmall',
	children: 'Close',
};
asChromaticStory(TextAndIconRightXSmallSizeDefaultTheme);

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({});
IconOnlyDefaultSizeDefaultTheme.args = {
	icon: 'cross',
	hideLabel: true,
	children: 'Close subscription banner',
};
asChromaticStory(IconOnlyDefaultSizeDefaultTheme);

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({});
IconOnlySmallSizeDefaultTheme.args = {
	icon: 'cross',
	hideLabel: true,
	size: 'small',
	children: 'Close subscription banner',
};
asChromaticStory(IconOnlySmallSizeDefaultTheme);

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({});
IconOnlyXSmallSizeDefaultTheme.args = {
	icon: 'cross',
	hideLabel: true,
	size: 'xsmall',
	children: 'Close subscription banner',
};
asChromaticStory(IconOnlyXSmallSizeDefaultTheme);

// *****************************************************************************

export const IsLoadingButton = Template.bind({});
IsLoadingButton.args = {
	isLoading: true,
	icon: 'cross',
	iconSide: 'right',
};
asChromaticStory(IsLoadingButton);

export const IsLoadingButton1 = Template.bind({});
IsLoadingButton1.args = {
	isLoading: true,
	icon: 'cross',
	iconSide: 'right',
	priority: 'secondary',
};
asChromaticStory(IsLoadingButton1);

export const IsLoadingButton2 = Template.bind({});
IsLoadingButton2.args = {
	isLoading: true,
	icon: 'cross',
	iconSide: 'right',
	priority: 'tertiary',
};
asChromaticStory(IsLoadingButton2);

export const IsLoadingButton3 = Template.bind({});
IsLoadingButton3.args = {
	isLoading: true,
	icon: 'cross',
	iconSide: 'right',
	priority: 'subdued',
};
asChromaticStory(IsLoadingButton3);
