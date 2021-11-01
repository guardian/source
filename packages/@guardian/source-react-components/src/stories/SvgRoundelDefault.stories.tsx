import { SvgRoundelDefault } from '../../../src-brand/SvgRoundelDefault';

export default {
	title: 'Source v4/source-react-components/SvgRoundelDefault',
	component: SvgRoundelDefault,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgRoundelDefault.stories';
