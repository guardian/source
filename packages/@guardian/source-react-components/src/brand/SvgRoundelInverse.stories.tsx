import type { Story } from '@storybook/react';
import type { SvgRoundelInverseProps } from './SvgRoundelInverse';
import { SvgRoundelInverse } from './SvgRoundelInverse';

export default {
	title: 'Packages/source-react-components/SvgRoundelInverse',
	component: SvgRoundelInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelInverseProps) => (
	<SvgRoundelInverse {...args} />
);

export const Default = Template.bind({});
