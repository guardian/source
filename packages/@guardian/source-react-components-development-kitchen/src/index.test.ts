import * as pkgExports from './index';

// this makes sure no type exports have been removed
// it won't catch that new ones have been added, but can anyone?
export type {
	EditorialButtonProps,
	EditorialLinkButtonProps,
	FooterLinksProps,
	FooterWithContentsProps,
	LineCount,
	LinesProps,
	LogoProps,
	NumericInput,
	NumericInputProps,
	HeadlineSize,
	QuoteIconProps,
	StarRatingProps,
	ToggleSwitchProps,
	ToggleSwitchAppsProps,
} from './index';

it('Should have exactly these exports', () => {
	expect(Object.keys(pkgExports).sort()).toEqual([
		'DashedLines',
		'Divider',
		'DottedLines',
		'EditorialButton',
		'EditorialLinkButton',
		'ErrorSummary',
		'FooterLinks',
		'FooterWithContents',
		'InfoSummary',
		'Lines',
		'Logo',
		'NumericInput',
		'QuoteIcon',
		'SquigglyLines',
		'StarRating',
		'StraightLines',
		'SuccessSummary',
		'ToggleSwitch',
		'ToggleSwitchApps',
		'defaultGuardianLinks',
	]);
});
