import { SvgRoundelBrand } from '../../../src-brand/SvgRoundelBrand';

export default {
	title: 'Source v4/source-react-components/SvgRoundelBrand',
	component: SvgRoundelBrand,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgRoundelBrand.stories';
