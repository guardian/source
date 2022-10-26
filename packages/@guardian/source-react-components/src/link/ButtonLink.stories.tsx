import type { Story } from '@storybook/react';
import { SvgExternal } from '../../vendor/icons/SvgExternal';
import type { ButtonLinkProps } from './ButtonLink';
import { ButtonLink } from './ButtonLink';

export default {
	title: 'Packages/source-react-components/ButtonLink',
	component: ButtonLink,
	args: {
		priority: 'primary',
		icon: <SvgExternal />,
		iconSide: 'left',
	},
	argTypes: {
		icon: {
			options: ['undefined', 'SvgExternal'],
			mapping: {
				undefined: undefined,
				SvgExternal: <SvgExternal />,
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story = (args: ButtonLinkProps) => (
	<ButtonLink {...args}>Return to home page</ButtonLink>
);

export const PrimaryButtonLinkDefaultTheme = Template.bind({});
PrimaryButtonLinkDefaultTheme.args = {
	icon: 'undefined',
};

// *****************************************************************************

export const SecondaryButtonLinkDefaultTheme = Template.bind({});
SecondaryButtonLinkDefaultTheme.args = {
	priority: 'secondary',
	icon: 'undefined',
};

// *****************************************************************************

export const PrimaryIconButtonLinkDefaultTheme = Template.bind({});

// *****************************************************************************

export const SecondaryIconButtonLinkDefaultTheme = Template.bind({});
SecondaryIconButtonLinkDefaultTheme.args = {
	priority: 'secondary',
};

// *****************************************************************************

export const RightIconButtonLinkDefaultTheme = Template.bind({});
RightIconButtonLinkDefaultTheme.args = {
	iconSide: 'right',
};

// *****************************************************************************
