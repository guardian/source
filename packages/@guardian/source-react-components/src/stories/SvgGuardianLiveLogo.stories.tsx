import { SvgGuardianLiveLogo } from '../../../src-brand/SvgGuardianLiveLogo';

export default {
	title: 'Source v4/source-react-components/SvgGuardianLiveLogo',
	component: SvgGuardianLiveLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export * from '../../../src-brand/SvgGuardianLiveLogo.stories';
