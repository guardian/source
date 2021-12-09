import { css } from '@emotion/react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { IconProps, IconSize } from './types';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
export { SvgAlert } from './SvgAlert';
export { SvgAlertRound } from './SvgAlertRound';
export { SvgAlertTriangle } from './SvgAlertTriangle';
export { SvgAppleBrand } from './SvgAppleBrand';
export { SvgArrowDownStraight } from './SvgArrowDownStraight';
export { SvgArrowLeftStraight } from './SvgArrowLeftStraight';
export { SvgArrowRightStraight } from './SvgArrowRightStraight';
export { SvgArrowUpStraight } from './SvgArrowUpStraight';
export { SvgAudio } from './SvgAudio';
export { SvgCamera } from './SvgCamera';
export { SvgCheckmark } from './SvgCheckmark';
export { SvgChevronDownSingle } from './SvgChevronDownSingle';
export { SvgChevronLeftDouble } from './SvgChevronLeftDouble';
export { SvgChevronLeftSingle } from './SvgChevronLeftSingle';
export { SvgChevronRightDouble } from './SvgChevronRightDouble';
export { SvgChevronRightSingle } from './SvgChevronRightSingle';
export { SvgChevronUpSingle } from './SvgChevronUpSingle';
export { SvgClock } from './SvgClock';
export { SvgCreditCard } from './SvgCreditCard';
export { SvgCross } from './SvgCross';
export { SvgDirectDebit } from './SvgDirectDebit';
export { SvgDirectDebitWide } from './SvgDirectDebitWide';
export { SvgEnvelope } from './SvgEnvelope';
export { SvgExternal } from './SvgExternal';
export { SvgEyeStrike } from './SvgEyeStrike';
export { SvgEye } from './SvgEye';
export { SvgFacebook } from './SvgFacebook';
export { SvgFacebookBrand } from './SvgFacebookBrand';
export { SvgGift } from './SvgGift';
export { SvgGlobe } from './SvgGlobe';
export { SvgGoogleBrand } from './SvgGoogleBrand';
export { SvgHouse } from './SvgHouse';
export { SvgIndent } from './SvgIndent';
export { SvgInfo } from './SvgInfo';
export { SvgLinkedIn } from './SvgLinkedIn';
export { SvgMessenger } from './SvgMessenger';
export { SvgMinus } from './SvgMinus';
export { SvgOfflineCloud } from './SvgOfflineCloud';
export { SvgPayPal } from './SvgPayPal';
export { SvgPerson } from './SvgPerson';
export { SvgPinterest } from './SvgPinterest';
export { SvgPlay } from './SvgPlay';
export { SvgPlus } from './SvgPlus';
export { SvgQuote } from './SvgQuote';
export { SvgSettings } from './SvgSettings';
export { SvgSpeechBubble } from './SvgSpeechBubble';
export { SvgStar } from './SvgStar';
export { SvgTickRound } from './SvgTickRound';
export { SvgTwitter } from './SvgTwitter';
export { SvgVideo } from './SvgVideo';
export { SvgWhatsApp } from './SvgWhatsApp';

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
	title: 'Packages/source-react-components/Icons',
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
	icons: Array<React.FunctionComponent<IconProps>>;
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

export const XsmallIconsDefaultTheme = Template.bind({});
XsmallIconsDefaultTheme.args = {
	size: 'xsmall',
	icons: Object.values(uiIcons),
};
asChromaticStory(XsmallIconsDefaultTheme);

// *****************************************************************************

export const SmallIconsDefaultTheme = Template.bind({});
SmallIconsDefaultTheme.args = {
	size: 'small',
	icons: Object.values(uiIcons),
};
asChromaticStory(SmallIconsDefaultTheme);

// *****************************************************************************

export const MediumIconsDefaultTheme = Template.bind({});
MediumIconsDefaultTheme.args = {
	size: 'medium',
	icons: Object.values(uiIcons),
};
asChromaticStory(MediumIconsDefaultTheme);

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

export const PaymentIconsDefaultTheme = Template.bind({});
PaymentIconsDefaultTheme.args = {
	size: 'medium',
	icons: Object.values(paymentIcons),
};
asChromaticStory(PaymentIconsDefaultTheme);

// *****************************************************************************

export const WidePaymentIconsDefaultTheme = Template.bind({});
WidePaymentIconsDefaultTheme.args = {
	size: 'medium',
	icons: Object.values(widePaymentIcons),
};
asChromaticStory(WidePaymentIconsDefaultTheme);
