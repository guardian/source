import type { Story } from '@storybook/react';
import { useState } from 'react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { Checkbox } from './Checkbox';
import CheckboxStories from './Checkbox.stories';
import type { CheckboxGroupProps } from './CheckboxGroup';
import { CheckboxGroup } from './CheckboxGroup';
import { checkboxThemeBrand } from './theme';

export default {
	title: 'Packages/source-react-components/CheckboxGroup',
	component: CheckboxGroup,
	subcomponents: { Checkbox },
	argTypes: {},
	args: {
		name: 'your-newsletters',
		label: 'Your newsletters',
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

export const VisuallyHideLegendDefaultTheme = Template.bind({});
VisuallyHideLegendDefaultTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendDefaultTheme);

// *****************************************************************************

export const VisuallyHideLegendBrandTheme = Template.bind({});
VisuallyHideLegendBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
VisuallyHideLegendBrandTheme.args = {
	hideLabel: true,
};
asChromaticStory(VisuallyHideLegendBrandTheme);

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Pick the issues and topics that interest you',
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
	supporting: 'Pick the issues and topics that interest you',
};
asChromaticStory(SupportingTextBrandTheme);

// *****************************************************************************

export const ErrorDefaultTheme = Template.bind({});
ErrorDefaultTheme.args = {
	error: 'This newsletter is not available in your region',
};
asChromaticStory(ErrorDefaultTheme);

// *****************************************************************************

export const ErrorBrandTheme = Template.bind({});
ErrorBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};
ErrorBrandTheme.args = {
	error: 'This newsletter is not available in your region',
};
asChromaticStory(ErrorBrandTheme);
