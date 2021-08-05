import { SvgRoundelDefault, SvgRoundelDefaultProps } from './SvgRoundelDefault';

export default {
	title: 'Source/src-brand/SvgRoundelDefault',
	component: SvgRoundelDefault,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgRoundelDefaultProps) => (
	<SvgRoundelDefault {...args} />
);
Demo.storyName = 'SvgRoundelDefault';
Demo.args = {
	width: 300,
};
