import type { Story } from '@storybook/react';
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

export const DefaultFooterLinks = Template.bind({});

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
