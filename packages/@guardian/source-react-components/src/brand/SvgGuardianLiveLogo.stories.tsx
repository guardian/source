import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { SvgGuardianLiveLogoProps } from './SvgGuardianLiveLogo';
import { SvgGuardianLiveLogo } from './SvgGuardianLiveLogo';

export default {
	title: 'Packages/source-react-components/SvgGuardianLiveLogo',
	component: SvgGuardianLiveLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgGuardianLiveLogoProps) => (
	<SvgGuardianLiveLogo {...args} />
);

export const Default = Template.bind({});
asChromaticStory(Default);
