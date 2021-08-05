import { SvgGuardianLogo, SvgGuardianLogoProps } from './SvgGuardianLogo';

export default {
	title: 'Source/src-brand/SvgGuardianLogo',
	component: SvgGuardianLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgGuardianLogoProps) => (
	<SvgGuardianLogo {...args} />
);
Demo.storyName = 'SvgGuardianLogo';
Demo.args = {
	width: 300,
};
