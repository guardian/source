import {
	neutral,
	error as _error,
	success as _success,
	brand,
	sport,
} from '../global';

export const border = {
	primary: neutral[60],
	secondary: neutral[86],
	success: _success[400],
	error: _error[400],
	ctaTertiary: brand[400],
	input: neutral[60],
	inputChecked: brand[500],
	inputHover: brand[500],
	inputActive: brand[500],
	focusHalo: sport[500],
};
