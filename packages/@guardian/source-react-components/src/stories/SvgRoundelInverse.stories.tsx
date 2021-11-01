import { SvgRoundelInverse } from '../../../src-brand/SvgRoundelInverse';

export default {
	title: 'Source v4/source-react-components/SvgRoundelInverse',
	component: SvgRoundelInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgRoundelInverse.stories';
