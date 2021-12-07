import { storybookBackgrounds } from '@guardian/src-helpers';
import { SvgExternal } from '@guardian/src-icons';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { linkBrand, linkBrandAlt } from '../../../src-link/index';
import { Link } from '../../../src-link/Link';
import type { LinkProps } from '../../../src-link/Link';

export default {
	title: 'Packages/source-react-components/Link',
	component: Link,
	args: {
		priority: 'primary',
		subdued: false,
		icon: <SvgExternal />,
		iconSide: 'left',
		href: '#',
	},
	argTypes: {
		icon: {
			options: ['undefined', 'SvgExternal'],
			mapping: {
				undefined: undefined,
				SvgExternal: <SvgExternal />,
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story = (args: LinkProps) => <Link {...args}>Click Me</Link>;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const PrimaryLinkDefaultTheme = Template.bind({});
PrimaryLinkDefaultTheme.args = {
	icon: undefined,
};
asChromaticStory(PrimaryLinkDefaultTheme);

// *****************************************************************************

export const PrimaryLinkBrandTheme = Template.bind({});
PrimaryLinkBrandTheme.args = {
	icon: undefined,
};
PrimaryLinkBrandTheme.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
	theme: linkBrand,
};
asChromaticStory(PrimaryLinkBrandTheme);

// *****************************************************************************

export const PrimaryLinkBrandAltTheme = Template.bind({});
PrimaryLinkBrandAltTheme.args = {
	icon: undefined,
};
PrimaryLinkBrandAltTheme.parameters = {
	backgrounds: {
		default: 'brandAlt',
		values: [storybookBackgrounds.brandAlt],
	},
	theme: linkBrandAlt,
};
asChromaticStory(PrimaryLinkBrandAltTheme);

// *****************************************************************************

export const SecondaryLinkDefaultTheme = Template.bind({});
SecondaryLinkDefaultTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
asChromaticStory(SecondaryLinkDefaultTheme);

// *****************************************************************************

export const PrimarySubduedLinkDefaultTheme = Template.bind({});
PrimarySubduedLinkDefaultTheme.args = {
	subdued: true,
	icon: undefined,
};
asChromaticStory(PrimarySubduedLinkDefaultTheme);

// *****************************************************************************

export const SecondarySubduedLinkDefaultTheme = Template.bind({});
SecondarySubduedLinkDefaultTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
asChromaticStory(SecondarySubduedLinkDefaultTheme);

// *****************************************************************************

export const PrimaryIconLinkDefaultTheme = Template.bind({});
asChromaticStory(PrimaryIconLinkDefaultTheme);

// *****************************************************************************

export const SecondaryIconLinkDefaultTheme = Template.bind({});
SecondaryIconLinkDefaultTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconLinkDefaultTheme);

// *****************************************************************************

export const SubduedIconLinkDefaultTheme = Template.bind({});
SubduedIconLinkDefaultTheme.args = {
	subdued: true,
};
asChromaticStory(SubduedIconLinkDefaultTheme);

// *****************************************************************************

export const RightIconLinkDefaultTheme = Template.bind({});
RightIconLinkDefaultTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconLinkDefaultTheme);
