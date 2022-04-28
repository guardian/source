import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { SvgGuardianBestWebsiteLogoProps } from './SvgGuardianBestWebsiteLogo';
import { SvgGuardianBestWebsiteLogo } from './SvgGuardianBestWebsiteLogo';

export default {
	title: 'Packages/source-react-components/SvgGuardianBestWebsiteLogo',
	component: SvgGuardianBestWebsiteLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgGuardianBestWebsiteLogoProps) => (
	<SvgGuardianBestWebsiteLogo {...args} />
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