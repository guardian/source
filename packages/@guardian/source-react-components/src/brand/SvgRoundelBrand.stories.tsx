import type { Story } from '@storybook/react';
import type { SvgRoundelBrandProps } from './SvgRoundelBrand';
import { SvgRoundelBrand } from './SvgRoundelBrand';

export default {
	title: 'Packages/source-react-components/SvgRoundelBrand',
	component: SvgRoundelBrand,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelBrandProps) => (
	<SvgRoundelBrand {...args} />
);

export const Default = Template.bind({});
