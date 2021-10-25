import { linkBrandAlt, linkBrand } from './index';
import { Link, LinkProps } from './Link';
import { SvgExternal } from '@guardian/src-icons';
import { storybookBackgrounds } from '@guardian/src-helpers';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-link/Link',
	component: Link,
	args: {
		priority: 'primary',
		subdued: false,
		icon: <SvgExternal />,
		iconSide: 'left',
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

export const PrimaryLinkLightTheme = Template.bind({});
PrimaryLinkLightTheme.args = {
	icon: undefined,
};
asChromaticStory(PrimaryLinkLightTheme);

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

export const SecondaryLinkLightTheme = Template.bind({});
SecondaryLinkLightTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
asChromaticStory(SecondaryLinkLightTheme);

// *****************************************************************************

export const PrimarySubduedLinkLightTheme = Template.bind({});
PrimarySubduedLinkLightTheme.args = {
	subdued: true,
	icon: undefined,
};
asChromaticStory(PrimarySubduedLinkLightTheme);

// *****************************************************************************

export const SecondarySubduedLinkLightTheme = Template.bind({});
SecondarySubduedLinkLightTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
asChromaticStory(SecondarySubduedLinkLightTheme);

// *****************************************************************************

export const PrimaryIconLinkLightTheme = Template.bind({});
asChromaticStory(PrimaryIconLinkLightTheme);

// *****************************************************************************

export const SecondaryIconLinkLightTheme = Template.bind({});
SecondaryIconLinkLightTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconLinkLightTheme);

// *****************************************************************************

export const SubduedIconLinkLightTheme = Template.bind({});
SubduedIconLinkLightTheme.args = {
	subdued: true,
};
asChromaticStory(SubduedIconLinkLightTheme);

// *****************************************************************************

export const RightIconLinkLightTheme = Template.bind({});
RightIconLinkLightTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconLinkLightTheme);
