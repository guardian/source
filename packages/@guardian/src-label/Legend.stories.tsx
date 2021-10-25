import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { labelBrand } from '@guardian/src-foundations/themes';

// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { Legend, LegendProps } from './Legend';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';

export default {
	title: 'Source/src-label/Legend',
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

export const Playground = Template.bind({});
Playground.args = {
	text: 'Email',
	supporting: 'text',
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const WithSupportingTextDefaultTheme = Template.bind({});
WithSupportingTextDefaultTheme.args = {
	supporting: 'text',
};
asChromaticStory(WithSupportingTextDefaultTheme);

// *****************************************************************************

export const WithSupportingComponentDefaultTheme = Template.bind({});
WithSupportingComponentDefaultTheme.args = {
	supporting: 'component',
};
asChromaticStory(WithSupportingComponentDefaultTheme);

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
	supporting: 'text',
};
WithSupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(WithSupportingTextBrandTheme);

// *****************************************************************************

export const WithSupportingComponentBrandTheme = Template.bind({});
WithSupportingComponentBrandTheme.args = {
	supporting: 'component',
};
WithSupportingComponentBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(WithSupportingComponentBrandTheme);

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

// *****************************************************************************
