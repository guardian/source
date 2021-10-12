import type { Story } from '../../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../../lib/story-intents';
import type { LogoProps } from './Logo';
import { Logo } from './Logo';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Logo',
	component: Logo,
	args: {
		logoType: 'standard',
	},
	parameters: {
		backgrounds: {
			default: 'brandBackground.primary',
		},
	},
};

const Template: Story = (args: LogoProps) => <Logo {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

const TripleTemplate: Story = () => (
	<div>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</div>
);

// *****************************************************************************

export const Desktop = TripleTemplate.bind({});
Desktop.parameters = {
	viewport: {
		defaultViewport: 'desktop',
	},
};
asChromaticStory(Desktop);

// *****************************************************************************

export const Tablet = TripleTemplate.bind({});
Tablet.parameters = {
	viewport: {
		defaultViewport: 'tablet',
	},
};
asChromaticStory(Tablet);

// *****************************************************************************

export const MobileMedium = TripleTemplate.bind({});
MobileMedium.parameters = {
	viewport: {
		defaultViewport: 'mobileMedium',
	},
};
asChromaticStory(MobileMedium);

// *****************************************************************************

export const Mobile = TripleTemplate.bind({});
Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile',
	},
};
asChromaticStory(Mobile);

// *****************************************************************************