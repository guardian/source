import { useState } from 'react';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox';
import { checkboxBrand } from './index';

export default {
	title: 'Source/src-checkbox/Checkbox',
	component: Checkbox,
	argTypes: {},
	args: {
		label: 'Checkbox',
		checked: true,
		supporting: '',
	},
};

const Template: Story<CheckboxProps> = (args: CheckboxProps) => {
	const [checked, setChecked] = useState(args.checked);

	return (
		<Checkbox
			{...args}
			checked={checked}
			onChange={(e) => setChecked(e.target.checked)}
		/>
	);
};

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultLightTheme = Template.bind({});
asChromaticStory(DefaultLightTheme);

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const SupportingTextLightTheme = Template.bind({});
SupportingTextLightTheme.args = {
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextLightTheme);

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({});
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
SupportingTextBrandTheme.args = {
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const SupportingTextOnlyLightTheme = Template.bind({});
SupportingTextOnlyLightTheme.args = {
	label: null,
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextOnlyLightTheme);

// *****************************************************************************

export const SupportingTextOnlyBrandTheme = Template.bind({});
SupportingTextOnlyBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
SupportingTextOnlyBrandTheme.args = {
	label: null,
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextOnlyBrandTheme);

// *****************************************************************************

export const IndeterminateLightTheme = Template.bind({});
IndeterminateLightTheme.args = {
	indeterminate: true,
};
asChromaticStory(IndeterminateLightTheme);

// *****************************************************************************

export const IndeterminateBrandTheme = Template.bind({});
IndeterminateBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
IndeterminateBrandTheme.args = {
	indeterminate: true,
};
asChromaticStory(IndeterminateBrandTheme);

// *****************************************************************************

export const UnlabelledLightTheme = Template.bind({});
UnlabelledLightTheme.args = {
	label: null,
	'aria-label': 'Checkbox',
};
asChromaticStory(UnlabelledLightTheme);
