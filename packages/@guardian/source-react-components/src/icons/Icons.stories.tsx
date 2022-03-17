import { css } from '@emotion/react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { SvgAlertRound } from './components/SvgAlertRound';
import { SvgAlertTriangle } from './components/SvgAlertTriangle';
import { SvgAppleBrand } from './components/SvgAppleBrand';
import { SvgArrowDownStraight } from './components/SvgArrowDownStraight';
import { SvgArrowLeftStraight } from './components/SvgArrowLeftStraight';
import { SvgArrowRightStraight } from './components/SvgArrowRightStraight';
import { SvgArrowUpStraight } from './components/SvgArrowUpStraight';
import { SvgAudio } from './components/SvgAudio';
import { SvgCamera } from './components/SvgCamera';
import { SvgCheckmark } from './components/SvgCheckmark';
import { SvgChevronDownSingle } from './components/SvgChevronDownSingle';
import { SvgChevronLeftDouble } from './components/SvgChevronLeftDouble';
import { SvgChevronLeftSingle } from './components/SvgChevronLeftSingle';
import { SvgChevronRightDouble } from './components/SvgChevronRightDouble';
import { SvgChevronRightSingle } from './components/SvgChevronRightSingle';
import { SvgChevronUpSingle } from './components/SvgChevronUpSingle';
import { SvgClock } from './components/SvgClock';
import { SvgCreditCard } from './components/SvgCreditCard';
import { SvgCross } from './components/SvgCross';
import { SvgCrossedOutCloud } from './components/SvgCrossedOutCloud';
import { SvgDirectDebit } from './components/SvgDirectDebit';
import { SvgDirectDebitWide } from './components/SvgDirectDebitWide';
import { SvgEnvelope } from './components/SvgEnvelope';
import { SvgExclamation } from './components/SvgExclamation';
import { SvgExternal } from './components/SvgExternal';
import { SvgEye } from './components/SvgEye';
import { SvgEyeStrike } from './components/SvgEyeStrike';
import { SvgFacebook } from './components/SvgFacebook';
import { SvgFacebookBrand } from './components/SvgFacebookBrand';
import { SvgFacebookMessenger } from './components/SvgFacebookMessenger';
import { SvgGift } from './components/SvgGift';
import { SvgGlobe } from './components/SvgGlobe';
import { SvgGoogleBrand } from './components/SvgGoogleBrand';
import { SvgHouse } from './components/SvgHouse';
import { SvgIndent } from './components/SvgIndent';
import { SvgInfoRound } from './components/SvgInfoRound';
import { SvgLinkedIn } from './components/SvgLinkedIn';
import { SvgMediaControlsPlay } from './components/SvgMediaControlsPlay';
import { SvgMinus } from './components/SvgMinus';
import { SvgPaypalBrand } from './components/SvgPaypalBrand';
import { SvgPerson } from './components/SvgPerson';
import { SvgPinned } from './components/SvgPinned';
import { SvgPinterest } from './components/SvgPinterest';
import { SvgPlus } from './components/SvgPlus';
import { SvgQuote } from './components/SvgQuote';
import { SvgSettings } from './components/SvgSettings';
import { SvgSpeechBubble } from './components/SvgSpeechBubble';
import { SvgSpinner } from './components/SvgSpinner';
import { SvgStar } from './components/SvgStar';
import { SvgTickRound } from './components/SvgTickRound';
import { SvgTwitter } from './components/SvgTwitter';
import { SvgVideo } from './components/SvgVideo';
import { SvgWhatsApp } from './components/SvgWhatsApp';
import type { IconProps, IconSize } from './types';

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
	SvgPaypalBrand,
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
