import { SvgRoundelInverse, SvgRoundelInverseProps } from './SvgRoundelInverse';

export default {
	title: 'Source/src-brand/SvgRoundelInverse',
	component: SvgRoundelInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgRoundelInverseProps) => (
	<SvgRoundelInverse {...args} />
);
Demo.storyName = 'SvgRoundelInverse';
Demo.args = {
	width: 300,
};
