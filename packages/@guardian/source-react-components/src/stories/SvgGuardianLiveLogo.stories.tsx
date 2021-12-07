import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { SvgGuardianLiveLogoProps } from '../../../src-brand/SvgGuardianLiveLogo';
import { SvgGuardianLiveLogo } from '../../../src-brand/SvgGuardianLiveLogo';

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

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	width: 300,
};
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
