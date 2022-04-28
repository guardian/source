import { css } from '@emotion/react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import type { IconProps, IconSize } from '../@types/Icons';
import { SvgAlertRound } from '../vendor/icons/SvgAlertRound';
import { SvgAlertTriangle } from '../vendor/icons/SvgAlertTriangle';
import { SvgAppleBrand } from '../vendor/icons/SvgAppleBrand';
import { SvgArrowDownStraight } from '../vendor/icons/SvgArrowDownStraight';
import { SvgArrowLeftStraight } from '../vendor/icons/SvgArrowLeftStraight';
import { SvgArrowRightStraight } from '../vendor/icons/SvgArrowRightStraight';
import { SvgArrowUpStraight } from '../vendor/icons/SvgArrowUpStraight';
import { SvgAudio } from '../vendor/icons/SvgAudio';
import { SvgCamera } from '../vendor/icons/SvgCamera';
import { SvgCheckmark } from '../vendor/icons/SvgCheckmark';
import { SvgChevronDownSingle } from '../vendor/icons/SvgChevronDownSingle';
import { SvgChevronLeftDouble } from '../vendor/icons/SvgChevronLeftDouble';
import { SvgChevronLeftSingle } from '../vendor/icons/SvgChevronLeftSingle';
import { SvgChevronRightDouble } from '../vendor/icons/SvgChevronRightDouble';
import { SvgChevronRightSingle } from '../vendor/icons/SvgChevronRightSingle';
import { SvgChevronUpSingle } from '../vendor/icons/SvgChevronUpSingle';
import { SvgClock } from '../vendor/icons/SvgClock';
import { SvgCreditCard } from '../vendor/icons/SvgCreditCard';
import { SvgCross } from '../vendor/icons/SvgCross';
import { SvgCrossedOutCloud } from '../vendor/icons/SvgCrossedOutCloud';
import { SvgDirectDebit } from '../vendor/icons/SvgDirectDebit';
import { SvgDirectDebitWide } from '../vendor/icons/SvgDirectDebitWide';
import { SvgEnvelope } from '../vendor/icons/SvgEnvelope';
import { SvgExclamation } from '../vendor/icons/SvgExclamation';
import { SvgExternal } from '../vendor/icons/SvgExternal';
import { SvgEye } from '../vendor/icons/SvgEye';
import { SvgEyeStrike } from '../vendor/icons/SvgEyeStrike';
import { SvgFacebook } from '../vendor/icons/SvgFacebook';
import { SvgFacebookBrand } from '../vendor/icons/SvgFacebookBrand';
import { SvgFacebookMessenger } from '../vendor/icons/SvgFacebookMessenger';
import { SvgGift } from '../vendor/icons/SvgGift';
import { SvgGlobe } from '../vendor/icons/SvgGlobe';
import { SvgGoogleBrand } from '../vendor/icons/SvgGoogleBrand';
import { SvgHouse } from '../vendor/icons/SvgHouse';
import { SvgIndent } from '../vendor/icons/SvgIndent';
import { SvgInfoRound } from '../vendor/icons/SvgInfoRound';
import { SvgLinkedIn } from '../vendor/icons/SvgLinkedIn';
import { SvgMediaControlsPlay } from '../vendor/icons/SvgMediaControlsPlay';
import { SvgMinus } from '../vendor/icons/SvgMinus';
import { SvgPayPalBrand } from '../vendor/icons/SvgPayPalBrand';
import { SvgPerson } from '../vendor/icons/SvgPerson';
import { SvgPinned } from '../vendor/icons/SvgPinned';
import { SvgPinterest } from '../vendor/icons/SvgPinterest';
import { SvgPlus } from '../vendor/icons/SvgPlus';
import { SvgQuote } from '../vendor/icons/SvgQuote';
import { SvgSettings } from '../vendor/icons/SvgSettings';
import { SvgSpeechBubble } from '../vendor/icons/SvgSpeechBubble';
import { SvgStar } from '../vendor/icons/SvgStar';
import { SvgTickRound } from '../vendor/icons/SvgTickRound';
import { SvgTwitter } from '../vendor/icons/SvgTwitter';
import { SvgVideo } from '../vendor/icons/SvgVideo';
import { SvgWhatsApp } from '../vendor/icons/SvgWhatsApp';
import { SvgSpinner } from './SvgSpinner';

const uiIcons = {
	SvgExclamation,
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
	SvgFacebookMessenger,
	SvgMinus,
	SvgCrossedOutCloud,
	SvgMediaControlsPlay,
	SvgPlus,
	SvgPerson,
	SvgPinned,
	SvgPinterest,
	SvgQuote,
	SvgIndent,
	SvgInfoRound,
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
	SvgPayPal: SvgPayPalBrand,
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
) => (
	<args.icon
		size={args.size}
		isAnnouncedByScreenReader={args.isAnnouncedByScreenReader}
	/>
);

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
	isAnnouncedByScreenReader: false,
};
asPlayground(Playground);

// *****************************************************************************

type IconChromaticStoryArgs = {
	size: IconSize;
	icons: Array<React.FunctionComponent<IconProps>>;
	isAnnouncedByScreenReader: boolean;
};
const Template: Story<IconChromaticStoryArgs> = (
	args: IconChromaticStoryArgs,
) => {
	const icons = args.icons.map((Icon, index) => (
		<Icon
			key={index}
			size={args.size}
			isAnnouncedByScreenReader={args.isAnnouncedByScreenReader}
		/>
	));

	return <>{icons}</>;
};

// *****************************************************************************

export const XsmallIconsDefaultTheme = Template.bind({});
XsmallIconsDefaultTheme.args = {
	size: 'xsmall',
	isAnnouncedByScreenReader: true,
	icons: Object.values(uiIcons),
};
asChromaticStory(XsmallIconsDefaultTheme);

// *****************************************************************************

export const SmallIconsDefaultTheme = Template.bind({});
SmallIconsDefaultTheme.args = {
	size: 'small',
	isAnnouncedByScreenReader: true,
	icons: Object.values(uiIcons),
};
asChromaticStory(SmallIconsDefaultTheme);

// *****************************************************************************

export const MediumIconsDefaultTheme = Template.bind({});
MediumIconsDefaultTheme.args = {
	size: 'medium',
	isAnnouncedByScreenReader: true,
	icons: Object.values(uiIcons),
};
asChromaticStory(MediumIconsDefaultTheme);

// *****************************************************************************

export const MediumIconsBrandTheme = Template.bind({});
MediumIconsBrandTheme.args = {
	size: 'medium',
	isAnnouncedByScreenReader: true,
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
	isAnnouncedByScreenReader: true,
	icons: Object.values(paymentIcons),
};
asChromaticStory(PaymentIconsDefaultTheme);

// *****************************************************************************

export const WidePaymentIconsDefaultTheme = Template.bind({});
WidePaymentIconsDefaultTheme.args = {
	size: 'medium',
	isAnnouncedByScreenReader: true,
	icons: Object.values(widePaymentIcons),
};
asChromaticStory(WidePaymentIconsDefaultTheme);
