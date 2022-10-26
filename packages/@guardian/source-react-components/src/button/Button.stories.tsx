import type { Parameters, Story } from '@storybook/react';
import { SvgCross } from '../../vendor/icons/SvgCross';
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

// *****************************************************************************

export const SmallSizeDefaultTheme = Template.bind({});
SmallSizeDefaultTheme.args = {
	size: 'small',
};

// *****************************************************************************

export const XSmallSizeDefaultTheme = Template.bind({});
XSmallSizeDefaultTheme.args = {
	size: 'xsmall',
};

// *****************************************************************************

export const TextAndIconLeftDefaultSizeDefaultTheme = Template.bind({});
TextAndIconLeftDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	children: 'Close',
};

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({});
TextAndIconRightDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	iconSide: 'right',
	children: 'Close',
};

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	size: 'small',
	children: 'Close',
};

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	iconSide: 'right',
	size: 'small',
	children: 'Close',
};

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({});
TextAndIconLeftXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	size: 'xsmall',
	children: 'Close',
};

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({});
TextAndIconRightXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	iconSide: 'right',
	size: 'xsmall',
	children: 'Close',
};

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({});
IconOnlyDefaultSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	hideLabel: true,
	children: 'Close subscription banner',
};

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({});
IconOnlySmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	hideLabel: true,
	size: 'small',
	children: 'Close subscription banner',
};

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({});
IconOnlyXSmallSizeDefaultTheme.args = {
	// @ts-expect-error - Storybook maps 'JSX element' to <SvgCross />
	icon: 'cross',
	hideLabel: true,
	size: 'xsmall',
	children: 'Close subscription banner',
};

// *****************************************************************************

export const IsLoadingPrimary = Template.bind({});
IsLoadingPrimary.args = {
	isLoading: true,
};

// *****************************************************************************

export const IsLoadingPrimarySmall = Template.bind({});
IsLoadingPrimarySmall.args = {
	isLoading: true,
	size: 'small',
};

// *****************************************************************************

export const IsLoadingPrimaryXSmall = Template.bind({});
IsLoadingPrimaryXSmall.args = {
	isLoading: true,
	size: 'xsmall',
};

// *****************************************************************************

export const IsLoadingSecondary = Template.bind({});
IsLoadingSecondary.args = {
	isLoading: true,
	priority: 'secondary',
};

// *****************************************************************************

export const IsLoadingTertiary = Template.bind({});
IsLoadingTertiary.args = {
	isLoading: true,
	priority: 'tertiary',
};

// *****************************************************************************

export const IsLoadingSubdued = Template.bind({});
IsLoadingSubdued.args = {
	isLoading: true,
	priority: 'subdued',
};

// *****************************************************************************

export const IsLoadingIconSideRight = Template.bind({});
IsLoadingIconSideRight.args = {
	isLoading: true,
	iconSide: 'right',
};

// *****************************************************************************

export const IsLoadingDisabled = Template.bind({});
IsLoadingDisabled.args = {
	isLoading: true,
	disabled: true,
};

// *****************************************************************************

export const IsLoadingLabelHidden = Template.bind({});
IsLoadingLabelHidden.args = {
	isLoading: true,
	hideLabel: true,
};
