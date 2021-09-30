import * as sourceFoundations from '@guardian/source-foundations';
import * as sourceReactComponentsDevelopmentKitchen from '@guardian/source-react-components-development-kitchen';
import * as srcBrand from '@guardian/src-brand';
import * as srcAccordion from '@guardian/src-accordion';
import * as srcButton from '@guardian/src-button';
import * as srcCheckbox from '@guardian/src-checkbox';
import * as srcChoiceCard from '@guardian/src-choice-card';
import * as srcFooter from '@guardian/src-footer';
import * as srcLabel from '@guardian/src-label';
import * as srcLayout from '@guardian/src-layout';
import * as srcLink from '@guardian/src-link';
import * as srcRadio from '@guardian/src-radio';
import * as srcSelect from '@guardian/src-select';
import * as srcTextArea from '@guardian/src-text-area';
import * as srcTextInput from '@guardian/src-text-input';
import * as srcUserFeedback from '@guardian/src-user-feedback';
import * as srcFoundations from '@guardian/src-foundations';
import * as srcHelpers from '@guardian/src-helpers';
import * as srcIcons from '@guardian/src-icons';

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
				'EditorialButton',
				'EditorialLinkButton',
				'Lines',
				'Logo',
				'QuoteIcon',
				'StarRating',
			],
		);
	});

	it('@guardian/src-brand package', () => {
		expect(packageExports(srcBrand)).toEqual([
			'SvgGuardianLiveLogo',
			'SvgGuardianLogo',
			'SvgRoundelBrand',
			'SvgRoundelBrandInverse',
			'SvgRoundelDefault',
			'SvgRoundelInverse',
		]);
	});

	it('@guardian/src-accordion package', () => {
		expect(packageExports(srcAccordion)).toEqual([
			'Accordion',
			'AccordionRow',
			'accordionDefault',
		]);
	});

	it('@guardian/src-button package', () => {
		expect(packageExports(srcButton)).toEqual([
			'Button',
			'LinkButton',
			'buttonBrand',
			'buttonBrandAlt',
			'buttonDefault',
			'buttonReaderRevenue',
			'buttonReaderRevenueBrand',
			'buttonReaderRevenueBrandAlt',
		]);
	});

	it('@guardian/src-checkbox package', () => {
		expect(packageExports(srcCheckbox)).toEqual([
			'Checkbox',
			'CheckboxGroup',
			'checkboxBrand',
			'checkboxDefault',
		]);
	});

	it('@guardian/src-choice-card package', () => {
		expect(packageExports(srcChoiceCard)).toEqual([
			'ChoiceCard',
			'ChoiceCardGroup',
			'choiceCardDefault',
		]);
	});

	it('@guardian/src-footer package', () => {
		expect(packageExports(srcFooter)).toEqual(['Footer']);
	});

	it('@guardian/src-label package', () => {
		expect(packageExports(srcLabel)).toEqual([
			'Label',
			'Legend',
			'labelBrand',
			'labelDefault',
		]);
	});

	it('@guardian/src-layout package', () => {
		expect(packageExports(srcLayout)).toEqual([
			'Column',
			'Columns',
			'Container',
			'Hide',
			'Inline',
			'Stack',
			'Tiles',
		]);
	});

	it('@guardian/src-link package', () => {
		expect(packageExports(srcLink)).toEqual([
			'ButtonLink',
			'Link',
			'linkBrand',
			'linkBrandAlt',
			'linkDefault',
		]);
	});

	it('@guardian/src-radio package', () => {
		expect(packageExports(srcRadio)).toEqual([
			'Radio',
			'RadioGroup',
			'radioBrand',
			'radioDefault',
		]);
	});

	it('@guardian/src-select package', () => {
		expect(packageExports(srcSelect)).toEqual([
			'Option',
			'Select',
			'selectDefault',
		]);
	});

	it('@guardian/src-text-area package', () => {
		expect(packageExports(srcTextArea)).toEqual(['TextArea']);
	});

	it('@guardian/src-text-input package', () => {
		expect(packageExports(srcTextInput)).toEqual([
			'TextInput',
			'textInputDefault',
		]);
	});

	it('@guardian/src-user-feedback package', () => {
		expect(packageExports(srcUserFeedback)).toEqual([
			'InlineError',
			'InlineSuccess',
			'userFeedbackBrand',
			'userFeedbackDefault',
		]);
	});

	it('@guardian/src-foundations package', () => {
		expect(packageExports(srcFoundations)).toEqual([
			'background',
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
			'error',
			'focus',
			'labs',
			'lifestyle',
			'line',
			'neutral',
			'news',
			'opinion',
			'palette',
			'remSpace',
			'space',
			'specialReport',
			'sport',
			'success',
			'text',
			'transitions',
		]);
	});

	it('@guardian/src-helpers package', () => {
		expect(packageExports(srcHelpers)).toEqual([
			'storybookBackgrounds',
			'svgBackgroundImage',
		]);
	});

	it('@guardian/src-icons package', () => {
		expect(packageExports(srcIcons)).toEqual([
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
			'SvgSettings',
			'SvgSpeechBubble',
			'SvgStar',
			'SvgTickRound',
			'SvgTwitter',
			'SvgVideo',
			'SvgWhatsApp',
		]);
	});
});
