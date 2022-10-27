import type { Story } from '@storybook/react';
import { useState } from 'react';
import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';
import { checkboxThemeBrand } from './theme';

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

// *****************************************************************************

export const DefaultBrandTheme = Template.bind({});
DefaultBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: checkboxThemeBrand,
};

// *****************************************************************************

export const SupportingTextDefaultTheme = Template.bind({});
SupportingTextDefaultTheme.args = {
	supporting: 'Supporting text',
};

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

// *****************************************************************************

export const SupportingTextOnlyDefaultTheme = Template.bind({});
SupportingTextOnlyDefaultTheme.args = {
	label: null,
	supporting: 'Supporting text',
};

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

// *****************************************************************************

export const IndeterminateDefaultTheme = Template.bind({});
IndeterminateDefaultTheme.args = {
	checked: undefined,
	indeterminate: true,
};

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

// *****************************************************************************

export const UnlabelledDefaultTheme = Template.bind({});
UnlabelledDefaultTheme.args = {
	label: null,
	'aria-label': 'Checkbox',
};
