import React, { useState } from 'react';
import { Checkbox, CheckboxGroup, checkboxBrand } from './index';
import CheckboxStories from './Checkbox.stories';
import type { CheckboxGroupProps } from './CheckboxGroup';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-checkbox/CheckboxGroup',
	component: CheckboxGroup,
	subcomponents: { Checkbox },
	argTypes: {},
	args: {
		name: 'checkbox-group',
		label: 'Checkbox group',
		supporting: '',
		hideLabel: false,
		error: undefined,
	},
};

const Template: Story<CheckboxGroupProps> = (args: CheckboxGroupProps) => {
	const [checked, setChecked] = useState(CheckboxStories.args.checked);

	return (
		<CheckboxGroup {...args}>
			<Checkbox
				{...CheckboxStories.args}
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
		</CheckboxGroup>
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

export const VisuallyHideLegendLightTheme = Template.bind({});
VisuallyHideLegendLightTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendLightTheme);

// *****************************************************************************

export const VisuallyHideLegendBrandTheme = Template.bind({});
VisuallyHideLegendBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
VisuallyHideLegendBrandTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendBrandTheme);

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

export const ErrorLightTheme = Template.bind({});
ErrorLightTheme.args = {
	error: 'Error message',
};
asChromaticStory(ErrorLightTheme);

// *****************************************************************************

export const ErrorBrandTheme = Template.bind({});
ErrorBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxBrand,
};
ErrorBrandTheme.args = {
	error: 'Error message',
};
asChromaticStory(ErrorBrandTheme);
