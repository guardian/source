import type { Story } from '@storybook/react';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { Label } from './Label';
import { labelThemeBrand } from './theme';
import type { LabelProps } from './types';

export default {
	title: 'Packages/source-react-components/Label',
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

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const WithSupportingTextDefaultTheme = Template.bind({});
WithSupportingTextDefaultTheme.args = {
	supporting: 'alex@example.com',
};
asChromaticStory(WithSupportingTextDefaultTheme);

// *****************************************************************************

export const WithOptionalDefaultTheme = Template.bind({});
WithOptionalDefaultTheme.args = {
	optional: true,
};
asChromaticStory(WithOptionalDefaultTheme);

// *****************************************************************************

export const WithHiddenLabelDefaultTheme = Template.bind({});
WithHiddenLabelDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(WithHiddenLabelDefaultTheme);

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const WithSupportingTextBrandTheme = Template.bind({});
WithSupportingTextBrandTheme.args = {
	supporting: 'alex@example.com',
};
WithSupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};
asChromaticStory(WithSupportingTextBrandTheme);

// *****************************************************************************

export const WithOptionalBrandTheme = Template.bind({});
WithOptionalBrandTheme.args = {
	optional: true,
};
WithOptionalBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};
asChromaticStory(WithOptionalBrandTheme);

// *****************************************************************************

export const WithHiddenLabelThemeBrandTheme = Template.bind({});
WithHiddenLabelThemeBrandTheme.args = {
	hideLabel: true,
};
WithHiddenLabelThemeBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};
asChromaticStory(WithHiddenLabelThemeBrandTheme);
