import { labelBrand } from '@guardian/src-foundations/themes';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { LabelProps } from '../../../src-label/Label';
import { Label } from '../../../src-label/Label';

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

export const Playground = Template.bind({});
Playground.args = {
	text: 'Email',
	supporting: 'alex@example.com',
};
asPlayground(Playground);

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
	theme: labelBrand,
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
	theme: labelBrand,
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
	theme: labelBrand,
};
asChromaticStory(WithOptionalBrandTheme);

// *****************************************************************************

export const WithHiddenLabelBrandTheme = Template.bind({});
WithHiddenLabelBrandTheme.args = {
	hideLabel: true,
};
WithHiddenLabelBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(WithHiddenLabelBrandTheme);
