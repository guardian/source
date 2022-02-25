import { css } from '@emotion/react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { SvgAlert } from './SvgAlert';
import { SvgAlertRound } from './SvgAlertRound';
import { SvgAlertTriangle } from './SvgAlertTriangle';
import { SvgAppleBrand } from './SvgAppleBrand';
import { SvgArrowDownStraight } from './SvgArrowDownStraight';
import { SvgArrowLeftStraight } from './SvgArrowLeftStraight';
import { SvgArrowRightStraight } from './SvgArrowRightStraight';
import { SvgArrowUpStraight } from './SvgArrowUpStraight';
import { SvgAudio } from './SvgAudio';
import { SvgCamera } from './SvgCamera';
import { SvgCheckmark } from './SvgCheckmark';
import { SvgChevronDownSingle } from './SvgChevronDownSingle';
import { SvgChevronLeftDouble } from './SvgChevronLeftDouble';
import { SvgChevronLeftSingle } from './SvgChevronLeftSingle';
import { SvgChevronRightDouble } from './SvgChevronRightDouble';
import { SvgChevronRightSingle } from './SvgChevronRightSingle';
import { SvgChevronUpSingle } from './SvgChevronUpSingle';
import { SvgClock } from './SvgClock';
import { SvgCreditCard } from './SvgCreditCard';
import { SvgCross } from './SvgCross';
import { SvgDirectDebit } from './SvgDirectDebit';
import { SvgDirectDebitWide } from './SvgDirectDebitWide';
import { SvgEnvelope } from './SvgEnvelope';
import { SvgExternal } from './SvgExternal';
import { SvgEye } from './SvgEye';
import { SvgEyeStrike } from './SvgEyeStrike';
import { SvgFacebook } from './SvgFacebook';
import { SvgFacebookBrand } from './SvgFacebookBrand';
import { SvgGift } from './SvgGift';
import { SvgGlobe } from './SvgGlobe';
import { SvgGoogleBrand } from './SvgGoogleBrand';
import { SvgHouse } from './SvgHouse';
import { SvgIndent } from './SvgIndent';
import { SvgInfo } from './SvgInfo';
import { SvgLinkedIn } from './SvgLinkedIn';
import { SvgMessenger } from './SvgMessenger';
import { SvgMinus } from './SvgMinus';
import { SvgOfflineCloud } from './SvgOfflineCloud';
import { SvgPayPal } from './SvgPayPal';
import { SvgPerson } from './SvgPerson';
import { SvgPinterest } from './SvgPinterest';
import { SvgPlay } from './SvgPlay';
import { SvgPlus } from './SvgPlus';
import { SvgQuote } from './SvgQuote';
import { SvgSettings } from './SvgSettings';
import { SvgSpeechBubble } from './SvgSpeechBubble';
import { SvgSpinner } from './SvgSpinner';
import { SvgStar } from './SvgStar';
import { SvgTickRound } from './SvgTickRound';
import { SvgTwitter } from './SvgTwitter';
import { SvgVideo } from './SvgVideo';
import { SvgWhatsApp } from './SvgWhatsApp';
import type { IconProps, IconSize } from './types';

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
	SvgSpinner,
	SvgStar,
	SvgTickRound,
	SvgTwitter,
	SvgAudio,
	SvgVideo,
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
