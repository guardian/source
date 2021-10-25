import { SvgExternal } from '@guardian/src-icons';
import { ButtonLink } from './ButtonLink';
import { ButtonLinkProps } from './ButtonLink';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
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
asChromaticStory(PrimaryButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryButtonLinkLightTheme = Template.bind({});
SecondaryButtonLinkLightTheme.args = {
	priority: 'secondary',
	icon: undefined,
};
asChromaticStory(SecondaryButtonLinkLightTheme);

// *****************************************************************************

export const PrimarySubduedButtonLinkLightTheme = Template.bind({});
PrimarySubduedButtonLinkLightTheme.args = {
	subdued: true,
	icon: undefined,
};
asChromaticStory(PrimarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const SecondarySubduedButtonLinkLightTheme = Template.bind({});
SecondarySubduedButtonLinkLightTheme.args = {
	priority: 'secondary',
	subdued: true,
	icon: undefined,
};
asChromaticStory(SecondarySubduedButtonLinkLightTheme);

// *****************************************************************************

export const PrimaryIconButtonLinkLightTheme = Template.bind({});
asChromaticStory(PrimaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SecondaryIconButtonLinkLightTheme = Template.bind({});
SecondaryIconButtonLinkLightTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconButtonLinkLightTheme);

// *****************************************************************************

export const SubduedIconButtonLinkLightTheme = Template.bind({});
SubduedIconButtonLinkLightTheme.args = {
	subdued: true,
};
asChromaticStory(SubduedIconButtonLinkLightTheme);

// *****************************************************************************

export const RightIconButtonLinkLightTheme = Template.bind({});
RightIconButtonLinkLightTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconButtonLinkLightTheme);

// *****************************************************************************
