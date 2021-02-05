import {
	neutral,
	error as _error,
	success as _success,
	brand,
	news,
} from '../global';

export const text = {
	primary: neutral[7],
	supporting: neutral[46],
	success: _success[400],
	error: _error[400],
	ctaPrimary: neutral[100],
	ctaSecondary: brand[400],
	ctaTertiary: brand[400],
	anchorPrimary: brand[500],
	anchorSecondary: neutral[7],
	userInput: neutral[7],
	inputLabel: neutral[7],
	inputLabelSupporting: neutral[46],
	inputChecked: brand[400], //choice card only
	inputHover: brand[400], //choice card only
	groupLabel: neutral[7],
	groupLabelSupporting: neutral[46],
	newsInverse: news[550],
};
