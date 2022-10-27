import type { Story } from '@storybook/react';
import { SvgCamera } from '../../vendor/icons/SvgCamera';
import { ChoiceCard } from './ChoiceCard';
import type { ChoiceCardProps } from './ChoiceCard';

export default {
	title: 'Packages/source-react-components/ChoiceCard',
	component: ChoiceCard,
	args: {
		id: 'option-1-id',
		value: 'option-1',
		label: 'string',
	},
	argTypes: {
		label: {
			options: ['string', 'JSX element'],
			mapping: {
				string: 'Option 1',
				'JSX element': <em>Option 1</em>,
			},
		},
		defaultChecked: {
			control: { disable: true },
		},
		icon: {
			options: ['undefined', 'JSX element'],
			mapping: {
				undefined: undefined,
				'JSX element': <SvgCamera />,
			},
			control: { type: 'radio' },
		},
		onChange: { action: 'choice changed' },
	},
};

const Template: Story<ChoiceCardProps> = (args: ChoiceCardProps) => (
	<ChoiceCard {...args} />
);

// *****************************************************************************

export const DefaultDefaultTheme = Template.bind({});

// *****************************************************************************

export const CheckedDefaultTheme = Template.bind({});
CheckedDefaultTheme.args = {
	checked: true,
};

// *****************************************************************************

export const ErrorDefaultTheme = Template.bind({});
ErrorDefaultTheme.args = {
	error: true,
};

// *****************************************************************************

export const IconDefaultTheme = Template.bind({});
IconDefaultTheme.args = {
	label: 'Camera',
	// @ts-expect-error - Storybook maps 'JSX element' to <em>Option 1</em>
	icon: 'JSX element',
};
