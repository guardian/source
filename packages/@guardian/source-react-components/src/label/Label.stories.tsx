import type { Story } from '@storybook/react';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
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

// *****************************************************************************

export const WithSupportingTextDefaultTheme = Template.bind({});
WithSupportingTextDefaultTheme.args = {
	supporting: 'alex@example.com',
};

// *****************************************************************************

export const WithOptionalDefaultTheme = Template.bind({});
WithOptionalDefaultTheme.args = {
	optional: true,
};

// *****************************************************************************

export const WithHiddenLabelDefaultTheme = Template.bind({});
WithHiddenLabelDefaultTheme.args = {
	hideLabel: true,
};

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};

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
