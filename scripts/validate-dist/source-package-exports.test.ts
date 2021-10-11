import * as sourceFoundations from '@guardian/source-foundations';
import * as sourceReactComponentsDevelopmentKitchen from '@guardian/source-react-components-development-kitchen';
import * as sourceReactComponents from '@guardian/source-react-components';

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
				'Divider',
				'EditorialButton',
				'EditorialLinkButton',
				'ErrorSummary',
				'Lines',
				'Logo',
				'QuoteIcon',
				'StarRating',
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
			'SvgDirectDebit',
			'SvgDirectDebitWide',
			'SvgEnvelope',
			'SvgExternal',
			'SvgEye',
			'SvgEyeStrike',
			'SvgFacebook',
			'SvgFacebookBrand',
			'SvgGift',
			'SvgGlobe',
			'SvgGoogleBrand',
			'SvgGuardianLiveLogo',
			'SvgGuardianLogo',
			'SvgHouse',
			'SvgIndent',
			'SvgInfo',
			'SvgLinkedIn',
			'SvgMessenger',
			'SvgMinus',
			'SvgOfflineCloud',
			'SvgPayPal',
			'SvgPerson',
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
			'SvgStar',
			'SvgTickRound',
			'SvgTwitter',
			'SvgVideo',
			'SvgWhatsApp',
			'TextArea',
			'TextInput',
			'Tiles',
			'accordionDefault',
			'buttonBrand',
			'buttonBrandAlt',
			'buttonDefault',
			'buttonReaderRevenue',
			'buttonReaderRevenueBrand',
			'buttonReaderRevenueBrandAlt',
			'checkboxBrand',
			'checkboxDefault',
			'choiceCardDefault',
			'footerBrand',
			'labelBrand',
			'labelDefault',
			'linkBrand',
			'linkBrandAlt',
			'linkDefault',
			'radioBrand',
			'radioDefault',
			'selectDefault',
			'textInputDefault',
			'userFeedbackBrand',
			'userFeedbackDefault',
		]);
	});
});
