import React from 'react';
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

// *****************************************************************************

// export const PriorityLight = (_: LinkProps) => (
// 	<ThemeProvider theme={linkDefault}>
// 		<div css={flexStart}>
// 			{priorityLinks.map((button, index) => (
// 				<div key={index}>{button}</div>
// 			))}
// 		</div>
// 	</ThemeProvider>
// );

// PriorityLight.story = {
// 	parameters: {
// 		controls: {
// 			disabled: true,
// 		},
// 	},
// };

// export const PriorityBlue = (_: LinkProps) => (
// 	<ThemeProvider theme={linkBrand}>
// 		<Link href="#">Primary</Link>
// 	</ThemeProvider>
// );

// PriorityBlue.story = {
// 	parameters: {
// 		backgrounds: {
// 			default: 'brand',
// 			values: [storybookBackgrounds.brand],
// 		},
// 		controls: {
// 			disabled: true,
// 		},
// 	},
// };

// export const PriorityYellow = (_: LinkProps) => (
// 	<ThemeProvider theme={linkBrandAlt}>
// 		<Link href="#">Primary</Link>
// 	</ThemeProvider>
// );

// PriorityYellow.story = {
// 	parameters: {
// 		backgrounds: {
// 			default: 'brandAlt',
// 			values: [storybookBackgrounds.brandAlt],
// 		},
// 		controls: {
// 			disabled: true,
// 		},
// 	},
// };

// export const SubduedLight = (_: LinkProps) => (
// 	<ThemeProvider theme={linkDefault}>
// 		<div css={flexStart}>
// 			{subduedLinks.map((button, index) => (
// 				<div key={index}>{button}</div>
// 			))}
// 		</div>
// 	</ThemeProvider>
// );

// SubduedLight.story = {
// 	parameters: {
// 		controls: {
// 			disabled: true,
// 		},
// 	},
// };

// export const TextAndIconLinks = (_: LinkProps) => (
// 	<>
// 		<div css={spacer}>
// 			<Link icon={<SvgExternal />} href="#">
// 				Terms and conditions
// 			</Link>
// 		</div>
// 		<div css={[flexStart, spacer]}>
// 			<Link icon={<SvgChevronLeftSingle />} href="#">
// 				Previous
// 			</Link>
// 			<Link iconSide="right" icon={<SvgArrowRightStraight />} href="#">
// 				Next
// 			</Link>
// 		</div>
// 		<div css={spacer}>
// 			<Link iconSide="left" icon={<SvgIndent />} href="#">
// 				Indent
// 			</Link>
// 		</div>
// 		<div css={spacer}>
// 			<Link icon={<SvgExternal />} subdued={true} href="#">
// 				Terms and conditions
// 			</Link>
// 		</div>
// 		<div css={[flexStart, spacer]}>
// 			<Link icon={<SvgChevronLeftSingle />} subdued={true} href="#">
// 				Previous
// 			</Link>
// 			<Link
// 				iconSide="right"
// 				icon={<SvgArrowRightStraight />}
// 				subdued={true}
// 				href="#"
// 			>
// 				Next
// 			</Link>
// 		</div>
// 		<div css={spacer}>
// 			<Link iconSide="left" icon={<SvgIndent />} subdued={true} href="#">
// 				Indent
// 			</Link>
// 		</div>
// 	</>
// );

// TextAndIconLinks.story = {
// 	parameters: {
// 		controls: {
// 			disabled: true,
// 		},
// 	},
// };
