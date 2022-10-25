import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';
import { checkboxThemeBrand } from './theme';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

export default {
	title: 'Packages/source-react-components/Checkbox',
	component: Checkbox,
	argTypes: {},
	args: {
		label: 'The Guardian Today',
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

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
asChromaticStory(DefaultBrandTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextDefaultTheme);

// *****************************************************************************

export const SupportingTextBrandTheme = Template.bind({});
SupportingTextBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
SupportingTextBrandTheme.args = {
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const SupportingTextOnlyDefaultTheme = Template.bind({});
SupportingTextOnlyDefaultTheme.args = {
	label: null,
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextOnlyDefaultTheme);

// *****************************************************************************

export const SupportingTextOnlyBrandTheme = Template.bind({});
SupportingTextOnlyBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
SupportingTextOnlyBrandTheme.args = {
	label: null,
	supporting: 'Supporting text',
};
asChromaticStory(SupportingTextOnlyBrandTheme);

// *****************************************************************************

export const IndeterminateDefaultTheme = Template.bind({});
IndeterminateDefaultTheme.args = {
	checked: undefined,
	indeterminate: true,
};
asChromaticStory(IndeterminateDefaultTheme);

// *****************************************************************************

export const IndeterminateBrandTheme = Template.bind({});
IndeterminateBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
IndeterminateBrandTheme.args = {
	indeterminate: true,
};
asChromaticStory(IndeterminateBrandTheme);

// *****************************************************************************

export const UnlabelledDefaultTheme = Template.bind({});
UnlabelledDefaultTheme.args = {
	label: null,
	'aria-label': 'Checkbox',
};
asChromaticStory(UnlabelledDefaultTheme);
