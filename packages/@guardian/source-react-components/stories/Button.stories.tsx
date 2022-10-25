import type { Meta, Story } from '@storybook/react';
import type { ButtonProps } from '../src/button/Button';
import { Button } from '../src/button/Button';

export default {
	title: 'Components / Button',
	component: Button,
	args: {
		children: 'test',
	},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
	<Button {...args} />
);

/**
 * Primary and Secondary button example components.
 */
export const Primary = Template.bind({});

Primary.parameters = {
	viewMode: 'story',
	chromatic: { disable: false },
};

export const Secondary = Template.bind({});

Secondary.parameters = {
	viewMode: 'story',
	chromatic: { disable: false },
};

Secondary.args = {
	priority: 'secondary',
};
