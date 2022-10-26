import type { Story } from '@storybook/react';
import { Radio } from './Radio';
import type { RadioProps } from './Radio';
import { radioThemeBrand } from './theme';

// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
	title: 'Packages/source-react-components/Radio',
	component: Radio,
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
		},
		supporting: {
			control: {
				type: 'text',
			},
		},
		cssOverrides: {
			control: null,
		},
	},
	args: {
		label: 'Red',
		value: 'red',
		supporting: '',
		defaultChecked: true,
	},
};

const Template: Story = (args: RadioProps) => <Radio {...args} />;

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Hex colour code: #ff0000',
};

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({});
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};
SupportingTextBrandTheme.args = {
	supporting: 'Hex colour code: #ff0000',
};

// *****************************************************************************

export const SupportingTextOnlyDefaultTheme = Template.bind({});
SupportingTextOnlyDefaultTheme.args = {
	supporting: 'Hex colour code: #ff0000',
	label: null,
};

// *****************************************************************************

export const SupportingTextOnlyBrandTheme = Template.bind({});
SupportingTextOnlyBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: radioThemeBrand,
};
SupportingTextOnlyBrandTheme.args = {
	supporting: 'Hex colour code: #ff0000',
	label: null,
};

// *****************************************************************************

export const UnlabelledDefaultTheme = Template.bind({});
UnlabelledDefaultTheme.args = {
	label: undefined,
};
