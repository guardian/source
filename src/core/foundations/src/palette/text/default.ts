import { neutral, error as _error, success as _success, brand } from "../global"

export const text = {
	primary: neutral[7],
	secondary: neutral[46], //TODO: deprecate?
	supporting: neutral[46],
	success: _success[400],
	error: _error[400],
	ctaPrimary: neutral[100],
	ctaSecondary: brand[400],
	anchorPrimary: brand[500],
	anchorSecondary: neutral[7],
	input: neutral[7],
	inputSupporting: neutral[46],
	inputChecked: brand[400],
	inputHover: brand[400],
}
