import type { Story } from '@storybook/react';
import type { StackProps } from './Stack';
import { Stack } from './Stack';

export default {
	title: 'Packages/source-react-components/Stack',
	component: Stack,
};

const Template: Story = (args: StackProps) => (
	<Stack {...args}>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</Stack>
);

export const Default = Template.bind({});

// *****************************************************************************

export const Space1 = Template.bind({});
Space1.args = {
	space: 1,
};

// *****************************************************************************

export const Space2 = Template.bind({});
Space2.args = {
	space: 2,
};

// *****************************************************************************

export const Space3 = Template.bind({});
Space3.args = {
	space: 3,
};

// *****************************************************************************

export const Space4 = Template.bind({});
Space4.args = {
	space: 4,
};

// *****************************************************************************

export const Space5 = Template.bind({});
Space5.args = {
	space: 5,
};

// *****************************************************************************

export const Space6 = Template.bind({});
Space6.args = {
	space: 6,
};

// *****************************************************************************

export const Space9 = Template.bind({});
Space9.args = {
	space: 9,
};

// *****************************************************************************

export const Space12 = Template.bind({});
Space12.args = {
	space: 12,
};

// *****************************************************************************

export const Space24 = Template.bind({});
Space24.args = {
	space: 24,
};
