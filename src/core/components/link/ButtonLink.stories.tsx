import { SvgExternal } from '@guardian/src-icons';
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

export const PrimaryButtonLinkLightTheme = Template.bind({});
PrimaryButtonLinkLightTheme.args = {
	icon: undefined,
};
PrimaryButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(PrimaryButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryButtonLinkLightTheme = Template.bind({});
SecondaryButtonLinkLightTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
SecondaryButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(SecondaryButtonLinkLightTheme);

// *****************************************************************************

export const PrimarySubduedButtonLinkLightTheme = Template.bind({});
PrimarySubduedButtonLinkLightTheme.args = {
	subdued: true,
	icon: undefined,
};
PrimarySubduedButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(PrimarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const SecondarySubduedButtonLinkLightTheme = Template.bind({});
SecondarySubduedButtonLinkLightTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
SecondarySubduedButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(SecondarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const PrimaryIconButtonLinkLightTheme = Template.bind({});
PrimaryIconButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(PrimaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryIconButtonLinkLightTheme = Template.bind({});
SecondaryIconButtonLinkLightTheme.args = {
	priority: 'secondary',
};
SecondaryIconButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(SecondaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SubduedIconButtonLinkLightTheme = Template.bind({});
SubduedIconButtonLinkLightTheme.args = {
	subdued: true,
};
SubduedIconButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(SubduedIconButtonLinkLightTheme);

// *****************************************************************************

export const RightIconButtonLinkLightTheme = Template.bind({});
RightIconButtonLinkLightTheme.args = {
	iconSide: 'right',
};
RightIconButtonLinkLightTheme.parameters = {
	theme: linkDefault,
};
asChromaticStory(RightIconButtonLinkLightTheme);

// *****************************************************************************
