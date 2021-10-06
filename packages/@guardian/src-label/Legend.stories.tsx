import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { labelBrand, labelDefault } from '@guardian/src-foundations/themes';

// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { Legend, LegendProps } from './Legend';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';

export default {
	title: 'Source/src-label/Legend',
	args: {
		text: 'Hello World',
		supporting: 'undefined',
		optional: false,
		hideLabel: false,
	},
	argTypes: {
		supporting: {
			options: ['undefined', 'text', 'component'],
			mapping: {
				undefined: undefined,
				text: 'Here I am',
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

export const Demo = Template.bind({});
Demo.args = {
	text: 'Hello world',
	supporting: 'text',
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

export const DefaultThemeWithSupportingComponent = Template.bind({});
DefaultThemeWithSupportingComponent.args = {
	supporting: 'component',
};
DefaultThemeWithSupportingComponent.parameters = {
	backgrounds: {
		default: 'background.primary',
	},
	theme: labelDefault,
};
asChromaticStory(DefaultThemeWithSupportingComponent);

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

export const BrandThemeWithSupportingComponent = Template.bind({});
BrandThemeWithSupportingComponent.args = {
	supporting: (
		<span role="img" aria-label="Image of a letter">
			💌
		</span>
	),
};
BrandThemeWithSupportingComponent.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: labelBrand,
};
asChromaticStory(BrandThemeWithSupportingComponent);

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

// *****************************************************************************
