import * as sourceFoundations from '@guardian/source-foundations';
import * as sourceReactComponents from '@guardian/source-react-components';
import * as sourceReactComponentsDevelopmentKitchen from '@guardian/source-react-components-development-kitchen';

const packageExports = (pkg: Record<string, unknown>) =>
	Object.keys(pkg).sort();

describe('No exports have changed in the ', () => {
	it('@guardian/source-foundations package', () => {
		expect(packageExports(sourceFoundations)).toEqual([
			'FocusStyleManager',
			'appearance',
			'background',
			'between',
			'body',
			'bodyObjectStyles',
			'bodySizes',
			'border',
			'brand',
			'brandAlt',
			'brandAltBackground',
			'brandAltBorder',
			'brandAltLine',
			'brandAltText',
			'brandBackground',
			'brandBorder',
			'brandLine',
			'brandText',
			'breakpoints',
			'culture',
			'descriptionId',
			'error',
			'focus',
			'focusHalo',
			'fontWeights',
			'fonts',
			'from',
			'generateSourceId',
			'headline',
			'headlineObjectStyles',
			'headlineSizes',
			'height',
			'iconSize',
			'labs',
			'lifestyle',
			'line',
			'lineHeights',
			'neutral',
			'news',
			'opinion',
			'palette',
			'pxToRem',
			'remBodySizes',
			'remHeadlineSizes',
			'remHeight',
			'remSpace',
			'remTextSansSizes',
			'remTitlepieceSizes',
			'remWidth',
			'resets',
			'rootPixelFontSize',
			'size',
			'space',
			'specialReport',
			'sport',
			'success',
			'svgBackgroundImage',
			'text',
			'textSans',
			'textSansObjectStyles',
			'textSansSizes',
			'titlepiece',
			'titlepieceObjectStyles',
			'titlepieceSizes',
			'transitions',
			'until',
			'visuallyHidden',
			'width',
		]);
	});

	it('@guardian/source-react-components-development-kitchen package', () => {
		expect(packageExports(sourceReactComponentsDevelopmentKitchen)).toEqual(
			[
				'DashedLines',
				'Divider',
				'DottedLines',
				'EditorialButton',
				'EditorialLinkButton',
				'ErrorSummary',
				'InfoSummary',
				'Lines',
				'Logo',
				'QuoteIcon',
				'SquigglyLines',
				'StarRating',
				'StraightLines',
				'SuccessSummary',
				'ToggleSwitch',
			],
		);
	});

	it('@guardian/source-react-components package', () => {
		expect(packageExports(sourceReactComponents)).toEqual([
			'Accordion',
			'AccordionRow',
			'Button',
			'ButtonLink',
			'Checkbox',
			'CheckboxGroup',
			'ChoiceCard',
			'ChoiceCardGroup',
			'Column',
			'Columns',
			'Container',
			'Footer',
			'Hide',
			'Inline',
			'InlineError',
			'InlineSuccess',
			'Label',
			'Legend',
			'Link',
			'LinkButton',
			'Option',
			'Radio',
			'RadioGroup',
			'Select',
			'Stack',
			'SvgAlert',
			'SvgAlertRound',
			'SvgAlertTriangle',
			'SvgAppleBrand',
			'SvgArrowDownStraight',
			'SvgArrowLeftStraight',
			'SvgArrowRightStraight',
			'SvgArrowUpStraight',
			'SvgAudio',
			'SvgCamera',
			'SvgCheckmark',
			'SvgChevronDownSingle',
			'SvgChevronLeftDouble',
			'SvgChevronLeftSingle',
			'SvgChevronRightDouble',
			'SvgChevronRightSingle',
			'SvgChevronUpSingle',
			'SvgClock',
			'SvgCreditCard',
			'SvgCross',
			'SvgCrossedOutCloud',
			'SvgDirectDebit',
			'SvgDirectDebitWide',
			'SvgEnvelope',
			'SvgExclamation',
			'SvgExternal',
			'SvgEye',
			'SvgEyeStrike',
			'SvgFacebook',
			'SvgFacebookBrand',
			'SvgFacebookMessenger',
			'SvgGift',
			'SvgGlobe',
			'SvgGoogleBrand',
			'SvgGuardianBestWebsiteLogo',
			'SvgGuardianLiveLogo',
			'SvgGuardianLogo',
			'SvgHouse',
			'SvgIndent',
			'SvgInfo',
			'SvgInfoRound',
			'SvgLinkedIn',
			'SvgMediaControlsPlay',
			'SvgMessenger',
			'SvgMinus',
			'SvgOfflineCloud',
			'SvgPayPal',
			'SvgPerson',
			'SvgPinned',
			'SvgPinterest',
			'SvgPlay',
			'SvgPlus',
			'SvgQuote',
			'SvgRoundelBrand',
			'SvgRoundelBrandInverse',
			'SvgRoundelDefault',
			'SvgRoundelInverse',
			'SvgSettings',
			'SvgSpeechBubble',
			'SvgSpinner',
			'SvgStar',
			'SvgTickRound',
			'SvgTwitter',
			'SvgVideo',
			'SvgWhatsApp',
			'TextArea',
			'TextInput',
			'Tiles',
			'accordionThemeDefault',
			'buttonThemeBrand',
			'buttonThemeBrandAlt',
			'buttonThemeDefault',
			'buttonThemeReaderRevenue',
			'buttonThemeReaderRevenueBrand',
			'buttonThemeReaderRevenueBrandAlt',
			'checkboxThemeBrand',
			'checkboxThemeDefault',
			'choiceCardThemeDefault',
			'footerThemeBrand',
			'labelThemeBrand',
			'labelThemeDefault',
			'linkThemeBrand',
			'linkThemeBrandAlt',
			'linkThemeDefault',
			'radioThemeBrand',
			'radioThemeDefault',
			'selectThemeDefault',
			'textInputThemeDefault',
			'userFeedbackThemeBrand',
			'userFeedbackThemeDefault',
		]);
	});
});
