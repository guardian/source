import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { labelBrand, labelDefault } from '@guardian/src-foundations/themes';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { Label, LabelProps } from './Label';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';

export default {
	title: 'Source/src-label/Label',
	args: {
		text: 'Email',
		optional: false,
		hideLabel: false,
	},
	component: Label,
};

const Template: Story<LabelProps> = (args: LabelProps) => (
	<Label {...args}>
		<input type="email" />
	</Label>
);

export const Demo = Template.bind({});
Demo.args = {
	text: 'Email',
	supporting: 'alex@example.com',
};
asPlayground(Demo);

// *****************************************************************************

export const DefaultTheme = Template.bind({});
DefaultTheme.parameters = {
	backgrounds: {
		default: 'background.primary',
	},
	theme: labelDefault,
};
asChromaticStory(DefaultTheme);

// *****************************************************************************

export const DefaultThemeWithSupportingText = Template.bind({});
DefaultThemeWithSupportingText.args = {
	supporting: 'alex@example.com',
};
DefaultThemeWithSupportingText.parameters = {
	backgrounds: {
		default: 'background.primary',
	},
	theme: labelDefault,
};
asChromaticStory(DefaultThemeWithSupportingText);

// *****************************************************************************

export const DefaultThemeWithOptional = Template.bind({});
DefaultThemeWithOptional.args = {
	optional: true,
};
DefaultThemeWithOptional.parameters = {
	backgrounds: {
		default: 'background.primary',
	},
	theme: labelDefault,
};
asChromaticStory(DefaultThemeWithOptional);

// *****************************************************************************

export const DefaultThemeWithHiddenLabel = Template.bind({});
DefaultThemeWithHiddenLabel.args = {
	hideLabel: true,
};
DefaultThemeWithHiddenLabel.parameters = {
	backgrounds: {
		default: 'background.primary',
	},
	theme: labelDefault,
};
asChromaticStory(DefaultThemeWithHiddenLabel);

// *****************************************************************************

export const BrandTheme = Template.bind({});
BrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(BrandTheme);

// *****************************************************************************

export const BrandThemeWithSupportingText = Template.bind({});
BrandThemeWithSupportingText.args = {
	supporting: 'alex@example.com',
};
BrandThemeWithSupportingText.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(BrandThemeWithSupportingText);

// *****************************************************************************

export const BrandThemeWithOptional = Template.bind({});
BrandThemeWithOptional.args = {
	optional: true,
};
BrandThemeWithOptional.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(BrandThemeWithOptional);

// *****************************************************************************

export const BrandThemeWithHiddenLabel = Template.bind({});
BrandThemeWithHiddenLabel.args = {
	hideLabel: true,
};
BrandThemeWithHiddenLabel.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(BrandThemeWithHiddenLabel);
