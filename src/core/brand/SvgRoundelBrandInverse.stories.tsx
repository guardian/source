import {
	SvgRoundelBrandInverse,
	SvgRoundelBrandInverseProps,
} from './SvgRoundelBrandInverse';

export default {
	title: 'Source/src-brand/SvgRoundelBrandInverse',
	component: SvgRoundelBrandInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgRoundelBrandInverseProps) => (
	<SvgRoundelBrandInverse {...args} />
);
Demo.storyName = 'SvgRoundelBrandInverse';
Demo.args = {
	width: 300,
};
