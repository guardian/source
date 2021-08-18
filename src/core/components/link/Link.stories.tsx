import { ThemeProvider } from '@emotion/react';
import { linkDefault, linkBrandAlt, linkBrand } from './index';
import { Link, LinkProps } from './Link';
import { SvgExternal } from '@guardian/src-icons';
import { storybookBackgrounds } from '@guardian/src-helpers';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
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

export const PrimaryLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
PrimaryLinkLightTheme.args = {
	icon: undefined,
};
asChromaticStory(PrimaryLinkLightTheme);

// *****************************************************************************

export const PrimaryLinkBrandTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkBrand}>
		<Template {...args} />
	</ThemeProvider>
);
PrimaryLinkBrandTheme.args = {
	icon: undefined,
};
PrimaryLinkBrandTheme.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
};
asChromaticStory(PrimaryLinkBrandTheme);

// *****************************************************************************

export const PrimaryLinkBrandAltTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkBrandAlt}>
		<Template {...args} />
	</ThemeProvider>
);
PrimaryLinkBrandAltTheme.args = {
	icon: undefined,
};
PrimaryLinkBrandAltTheme.parameters = {
	backgrounds: {
		default: 'brandAlt',
		values: [storybookBackgrounds.brandAlt],
	},
};
asChromaticStory(PrimaryLinkBrandAltTheme);

// *****************************************************************************

export const SecondaryLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondaryLinkLightTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
asChromaticStory(SecondaryLinkLightTheme);

// *****************************************************************************

export const PrimarySubduedLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
PrimarySubduedLinkLightTheme.args = {
	subdued: true,
	icon: undefined,
};
asChromaticStory(PrimarySubduedLinkLightTheme);

// *****************************************************************************

export const SecondarySubduedLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondarySubduedLinkLightTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
asChromaticStory(SecondarySubduedLinkLightTheme);

// *****************************************************************************

export const PrimaryIconLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
asChromaticStory(PrimaryIconLinkLightTheme);

// *****************************************************************************

export const SecondaryIconLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondaryIconLinkLightTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconLinkLightTheme);

// *****************************************************************************

export const SubduedIconLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SubduedIconLinkLightTheme.args = {
	subdued: true,
};
asChromaticStory(SubduedIconLinkLightTheme);

// *****************************************************************************

export const RightIconLinkLightTheme = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
RightIconLinkLightTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconLinkLightTheme);
