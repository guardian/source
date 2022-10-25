import type { Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import {
	DefaultFooterLinks,
	FooterLinksInColumns,
} from './FooterLinks.stories';
import type { FooterWithContentsProps } from './FooterWithContents';
import { FooterWithContents } from './FooterWithContents';

export default {
	title:
		'Packages/source-react-components-development-kitchen/FooterWithContents',
	component: FooterWithContents,
	parameters: {
		layout: 'fullscreen',
	},
};

const Template: Story<FooterWithContentsProps> = (
	args: FooterWithContentsProps,
) => <FooterWithContents {...args} />;

// *****************************************************************************

export const DefaultFooterWithContents = Template.bind({});
DefaultFooterWithContents.args = {
	children: <DefaultFooterLinks />,
};
asChromaticStory(DefaultFooterWithContents);

// *****************************************************************************

export const FooterWithColumnLinks = Template.bind({});
FooterWithColumnLinks.args = {
	children: <FooterLinksInColumns {...FooterLinksInColumns.args} />,
};
asChromaticStory(DefaultFooterWithContents);
