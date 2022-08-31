import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { FooterLinksProps } from './FooterLinks';
import { defaultGuardianLinks, FooterLinks } from './FooterLinks';

export default {
	title: 'Packages/source-react-components-development-kitchen/FooterLinks',
	component: FooterLinks,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template: Story<FooterLinksProps> = (args: FooterLinksProps) => (
	<FooterLinks {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	links: [
		{
			href: '/',
			text: 'Privacy policy',
		},
	],
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultFooterLinks = Template.bind({});
asChromaticStory(DefaultFooterLinks);

// *****************************************************************************

export const FooterLinksInColumns = Template.bind({});
FooterLinksInColumns.args = {
	links: [
		...defaultGuardianLinks,
		{
			href: '/',
			text: 'About us',
		},
	],
};
asChromaticStory(FooterLinksInColumns);
