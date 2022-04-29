import * as pkgExports from './index';

// this makes sure no type exports have been removed
// it won't catch that new ones have been added, but can anyone?
export type {
	EditorialButtonProps,
	EditorialLinkButtonProps,
	LineCount,
	LinesProps,
	LogoProps,
	HeadlineSize,
	QuoteIconProps,
	StarRatingProps,
	ToggleSwitchProps,
} from './index';

it('Should have exactly these exports', () => {
	expect(Object.keys(pkgExports).sort()).toEqual([
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
	]);
});
