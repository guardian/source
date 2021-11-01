import { SvgGuardianLogo } from '../../../src-brand/SvgGuardianLogo';

export default {
	title: 'Source v4/source-react-components/SvgGuardianLogo',
	component: SvgGuardianLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgGuardianLogo.stories';
