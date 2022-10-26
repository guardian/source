import type { Story } from '@storybook/react';
import type { SvgRoundelDefaultProps } from './SvgRoundelDefault';
import { SvgRoundelDefault } from './SvgRoundelDefault';

export default {
	title: 'Packages/source-react-components/SvgRoundelDefault',
	component: SvgRoundelDefault,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelDefaultProps) => (
	<SvgRoundelDefault {...args} />
);

export const Default = Template.bind({});
