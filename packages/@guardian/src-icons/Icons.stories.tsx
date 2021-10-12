import { css } from '@emotion/react';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

import type { IconProps, IconSize } from './types';
import {
	SvgAlert,
	SvgAlertRound,
	SvgAlertTriangle,
	SvgAppleBrand,
	SvgArrowDownStraight,
	SvgArrowLeftStraight,
	SvgArrowRightStraight,
	SvgArrowUpStraight,
	SvgCamera,
	SvgCheckmark,
	SvgChevronDownSingle,
	SvgChevronLeftDouble,
	SvgChevronLeftSingle,
	SvgChevronRightDouble,
	SvgChevronRightSingle,
	SvgChevronUpSingle,
	SvgClock,
	SvgCross,
	SvgCreditCard,
	SvgDirectDebit,
	SvgDirectDebitWide,
	SvgEnvelope,
	SvgExternal,
	SvgEye,
	SvgEyeStrike,
	SvgFacebook,
	SvgFacebookBrand,
	SvgGift,
	SvgGlobe,
	SvgGoogleBrand,
	SvgHouse,
	SvgIndent,
	SvgInfo,
	SvgLinkedIn,
	SvgMessenger,
	SvgMinus,
	SvgOfflineCloud,
	SvgPayPal,
	SvgPerson,
	SvgPlay,
	SvgPlus,
	SvgPinterest,
	SvgQuote,
	SvgSettings,
	SvgSpeechBubble,
	SvgStar,
	SvgTickRound,
	SvgTwitter,
	SvgWhatsApp,
} from './index';

const uiIcons = {
	SvgAlert,
	SvgAlertRound,
	SvgAlertTriangle,
	SvgAppleBrand,
	SvgArrowDownStraight,
	SvgArrowLeftStraight,
	SvgArrowRightStraight,
	SvgArrowUpStraight,
	SvgChevronDownSingle,
	SvgChevronLeftDouble,
	SvgChevronLeftSingle,
	SvgChevronRightDouble,
	SvgChevronRightSingle,
	SvgChevronUpSingle,
	SvgClock,
	SvgEnvelope,
	SvgExternal,
	SvgEye,
	SvgEyeStrike,
	SvgFacebook,
	SvgFacebookBrand,
	SvgGift,
	SvgGlobe,
	SvgGoogleBrand,
	SvgHouse,
	SvgCheckmark,
	SvgCamera,
	SvgCross,
	SvgLinkedIn,
	SvgMessenger,
	SvgMinus,
	SvgOfflineCloud,
	SvgPlay,
	SvgPlus,
	SvgPerson,
	SvgPinterest,
	SvgQuote,
	SvgIndent,
	SvgInfo,
	SvgSettings,
	SvgSpeechBubble,
	SvgStar,
	SvgTickRound,
	SvgTwitter,
	SvgWhatsApp,
};

const paymentIcons = {
	SvgCreditCard,
	SvgDirectDebit,
	SvgPayPal,
};

const widePaymentIcons = {
	SvgDirectDebitWide,
};

export default {
	title: 'Source/src-icons/Icons',
};

interface IconPlaygroundArgs extends IconProps {
	icon: React.FunctionComponent<IconProps>;
}

export const Playground: Story<IconPlaygroundArgs> = (
	args: IconPlaygroundArgs,
) => <args.icon size={args.size} />;

Playground.argTypes = {
	size: {
		options: ['medium', 'small', 'xsmall'],
		control: { type: 'radio' },
	},
	icon: {
		options: Object.keys({
			...uiIcons,
			...paymentIcons,
			...widePaymentIcons,
		}),
		mapping: {
			...uiIcons,
			...paymentIcons,
			...widePaymentIcons,
		},
		control: {
			type: 'select',
		},
	},
};
Playground.args = {
	size: 'medium',
	icon: 'SvgAlertRound',
};
asPlayground(Playground);

// *****************************************************************************

type IconChromaticStoryArgs = {
	size: IconSize;
	icons: React.FunctionComponent<IconProps>[];
};
const Template: Story<IconChromaticStoryArgs> = (
	args: IconChromaticStoryArgs,
) => {
	const icons = args.icons.map((Icon, index) => (
		<Icon key={index} size={args.size} />
	));

	return <>{icons}</>;
};

// *****************************************************************************

export const XsmallIconsLightTheme = Template.bind({});
XsmallIconsLightTheme.args = {
	size: 'xsmall',
	icons: Object.values(uiIcons),
};
asChromaticStory(XsmallIconsLightTheme);

// *****************************************************************************

export const SmallIconsLightTheme = Template.bind({});
SmallIconsLightTheme.args = {
	size: 'small',
	icons: Object.values(uiIcons),
};
asChromaticStory(SmallIconsLightTheme);

// *****************************************************************************

export const MediumIconsLightTheme = Template.bind({});
MediumIconsLightTheme.args = {
	size: 'medium',
	icons: Object.values(uiIcons),
};
asChromaticStory(MediumIconsLightTheme);

// *****************************************************************************

export const MediumIconsBrandTheme = Template.bind({});
MediumIconsBrandTheme.args = {
	size: 'medium',
	icons: Object.values(uiIcons),
};
MediumIconsBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
};
MediumIconsBrandTheme.decorators = [
	(Story: Story) => (
		<div
			css={css`
				svg {
					fill: white;
				}
			`}
		>
			<Story />
		</div>
	),
];
asChromaticStory(MediumIconsBrandTheme);

// *****************************************************************************

export const PaymentIconsLightTheme = Template.bind({});
PaymentIconsLightTheme.args = {
	size: 'medium',
	icons: Object.values(paymentIcons),
};
asChromaticStory(PaymentIconsLightTheme);

// *****************************************************************************

export const WidePaymentIconsLightTheme = Template.bind({});
WidePaymentIconsLightTheme.args = {
	size: 'medium',
	icons: Object.values(widePaymentIcons),
};
asChromaticStory(WidePaymentIconsLightTheme);
