import type { Story } from '@storybook/react';
import type { ButtonProps } from '../src/button/Button';
import { Button } from '../src/button/Button';

export default {
	title: 'Button',
	component: Button,
	viewMode: 'docs',
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
	<Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
	children: 'Test',
};

Default.parameters = {
	viewMode: 'docs',
	docs: {
		description: {
			story: 'Some story **markdown**',
		},
	},
};
