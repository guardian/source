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

test('No package has accidentally lost an export', () => {
	expect(packageExports(sourceFoundations)).toEqual([
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
		'descriptionId',
		'error',
		'focus',
		'focusHalo',
		'generateSourceId',
		'labs',
		'lifestyle',
		'line',
		'neutral',
		'news',
		'opinion',
		'pxToRem',
		'remSpace',
		'rootPixelFontSize',
		'space',
		'specialReport',
		'sport',
		'success',
		'text',
		'transitions',
		'visuallyHidden',
	]);
	expect(packageExports(sourceReactComponentsDevelopmentKitchen)).toEqual([
		'EditorialButton',
		'EditorialLinkButton',
		'Lines',
		'Logo',
		'QuoteIcon',
		'StarRating',
	]);
	expect(packageExports(srcBrand)).toEqual([
		'SvgGuardianLiveLogo',
		'SvgGuardianLogo',
		'SvgRoundelBrand',
		'SvgRoundelBrandInverse',
		'SvgRoundelDefault',
		'SvgRoundelInverse',
	]);
	expect(packageExports(srcAccordion)).toEqual([
		'Accordion',
		'AccordionRow',
		'accordionDefault',
	]);
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
	expect(packageExports(srcCheckbox)).toEqual([
		'Checkbox',
		'CheckboxGroup',
		'checkboxBrand',
		'checkboxDefault',
	]);
	expect(packageExports(srcChoiceCard)).toEqual([
		'ChoiceCard',
		'ChoiceCardGroup',
		'choiceCardDefault',
	]);
	expect(packageExports(srcFooter)).toEqual(['Footer']);
	expect(packageExports(srcLabel)).toEqual([
		'Label',
		'Legend',
		'labelBrand',
		'labelDefault',
	]);
	expect(packageExports(srcLayout)).toEqual([
		'Column',
		'Columns',
		'Container',
		'Hide',
		'Inline',
		'Stack',
		'Tiles',
	]);
	expect(packageExports(srcLink)).toEqual([
		'ButtonLink',
		'Link',
		'linkBrand',
		'linkBrandAlt',
		'linkDefault',
	]);
	expect(packageExports(srcRadio)).toEqual([
		'Radio',
		'RadioGroup',
		'radioBrand',
		'radioDefault',
	]);
	expect(packageExports(srcSelect)).toEqual([
		'Option',
		'Select',
		'selectDefault',
	]);
	expect(packageExports(srcTextArea)).toEqual(['TextArea']);
	expect(packageExports(srcTextInput)).toEqual([
		'TextInput',
		'textInputDefault',
	]);
	expect(packageExports(srcUserFeedback)).toEqual([
		'InlineError',
		'InlineSuccess',
		'userFeedbackBrand',
		'userFeedbackDefault',
	]);
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
	expect(packageExports(srcHelpers)).toEqual([
		'storybookBackgrounds',
		'svgBackgroundImage',
	]);
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
