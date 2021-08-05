import { SvgRoundelBrand, SvgRoundelBrandProps } from './SvgRoundelBrand';

export default {
	title: 'Source/src-brand/SvgRoundelBrand',
	component: SvgRoundelBrand,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgRoundelBrandProps) => (
	<SvgRoundelBrand {...args} />
);
Demo.storyName = 'SvgRoundelBrand';
Demo.args = {
	width: 300,
};
