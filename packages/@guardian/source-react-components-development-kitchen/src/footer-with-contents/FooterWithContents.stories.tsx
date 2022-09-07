import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
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

export const Playground = Template.bind({});
Playground.args = {
	children: 'Content goes here',
};
asPlayground(Playground);

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
