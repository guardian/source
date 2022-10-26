import type { Story } from '@storybook/react';
import type { SvgRoundelBrandInverseProps } from './SvgRoundelBrandInverse';
import { SvgRoundelBrandInverse } from './SvgRoundelBrandInverse';

export default {
	title: 'Packages/source-react-components/SvgRoundelBrandInverse',
	component: SvgRoundelBrandInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelBrandInverseProps) => (
	<SvgRoundelBrandInverse {...args} />
);

export const Default = Template.bind({});
