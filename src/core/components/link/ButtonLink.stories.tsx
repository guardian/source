import { SvgExternal } from '@guardian/src-icons';
import { ThemeProvider } from '@emotion/react';
import { ButtonLink } from './ButtonLink';
import { linkDefault } from './index';
import { ButtonLinkProps } from './ButtonLink';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-link/ButtonLink',
	component: ButtonLink,
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

const Template: Story = (args: ButtonLinkProps) => (
	<ButtonLink {...args}>Click Me</ButtonLink>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const PrimaryButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
PrimaryButtonLinkLightTheme.args = {
	icon: undefined,
};
asChromaticStory(PrimaryButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondaryButtonLinkLightTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
asChromaticStory(SecondaryButtonLinkLightTheme);

// *****************************************************************************

export const PrimarySubduedButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
PrimarySubduedButtonLinkLightTheme.args = {
	subdued: true,
	icon: undefined,
};
asChromaticStory(PrimarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const SecondarySubduedButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondarySubduedButtonLinkLightTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
asChromaticStory(SecondarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const PrimaryIconButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
asChromaticStory(PrimaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryIconButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SecondaryIconButtonLinkLightTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SubduedIconButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
SubduedIconButtonLinkLightTheme.args = {
	subdued: true,
};
asChromaticStory(SubduedIconButtonLinkLightTheme);

// *****************************************************************************

export const RightIconButtonLinkLightTheme = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<Template {...args} />
	</ThemeProvider>
);
RightIconButtonLinkLightTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconButtonLinkLightTheme);

// *****************************************************************************
