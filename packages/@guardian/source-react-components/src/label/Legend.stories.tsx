import type { Story } from '@storybook/react';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { Legend } from './Legend';
import { labelThemeBrand } from './theme';
import type { LegendProps } from './types';

export default {
	title: 'Packages/source-react-components/Legend',
	args: {
		text: 'Email',
		supporting: 'undefined',
		optional: false,
		hideLabel: false,
	},
	argTypes: {
		supporting: {
			options: ['undefined', 'text', 'component'],
			mapping: {
				undefined: undefined,
				text: 'alex@example.com',
				component: (
					<span role="img" aria-label="Image of a letter">
						💌
					</span>
				),
			},
			control: { type: 'radio' },
		},
	},
	component: Legend,
};

const Template: Story<LegendProps> = (args: LegendProps) => (
	<fieldset>
		<Legend {...args} />
	</fieldset>
);

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const WithSupportingTextDefaultTheme = Template.bind({});
WithSupportingTextDefaultTheme.args = {
	supporting: 'text',
};

// *****************************************************************************

export const WithSupportingComponentDefaultTheme = Template.bind({});
WithSupportingComponentDefaultTheme.args = {
	supporting: 'component',
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
	supporting: 'text',
};
WithSupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};

// *****************************************************************************

export const WithSupportingComponentBrandTheme = Template.bind({});
WithSupportingComponentBrandTheme.args = {
	supporting: 'component',
};
WithSupportingComponentBrandTheme.parameters = {
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

export const WithHiddenLabelBrandTheme = Template.bind({});
WithHiddenLabelBrandTheme.args = {
	hideLabel: true,
};
WithHiddenLabelBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelThemeBrand,
};

// *****************************************************************************
