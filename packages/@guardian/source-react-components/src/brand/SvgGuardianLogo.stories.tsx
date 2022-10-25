import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { SvgGuardianLogoProps } from './SvgGuardianLogo';
import { SvgGuardianLogo } from './SvgGuardianLogo';

export default {
	title: 'Packages/source-react-components/SvgGuardianLogo',
	component: SvgGuardianLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgGuardianLogoProps) => (
	<SvgGuardianLogo {...args} />
);

export const Default = Template.bind({});
asChromaticStory(Default);
