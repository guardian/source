import { neutral, success as _success, error as _error, brand } from "../global"

export const brandText = {
	primary: neutral[100],
	secondary: brand[800], //TODO: deprecate?
	supporting: brand[800],
	success: _success[400],
	error: _error[500],
	ctaPrimary: brand[400],
	ctaSecondary: neutral[100],
	anchorPrimary: neutral[100],
	input: neutral[100],
	inputSupporting: brand[800],
}
