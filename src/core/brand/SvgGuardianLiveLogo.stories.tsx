import {
	SvgGuardianLiveLogo,
	SvgGuardianLiveLogoProps,
} from './SvgGuardianLiveLogo';

export default {
	title: 'Source/src-brand/SvgGuardianLiveLogo',
	component: SvgGuardianLiveLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

export const Demo = (args: SvgGuardianLiveLogoProps) => (
	<SvgGuardianLiveLogo {...args} />
);
Demo.storyName = 'SvgGuardianLiveLogo';
Demo.args = {
	width: 300,
};
