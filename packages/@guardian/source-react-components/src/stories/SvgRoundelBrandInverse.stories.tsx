import { SvgRoundelBrandInverse } from '../../../src-brand/SvgRoundelBrandInverse';

export default {
	title: 'Source v4/source-react-components/SvgRoundelBrandInverse',
	component: SvgRoundelBrandInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgRoundelBrandInverse.stories';
