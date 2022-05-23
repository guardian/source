import { palette } from '@guardian/source-foundations';
import { labelThemeBrand, labelThemeDefault } from '../label/theme';
import {
	userFeedbackThemeBrand,
	userFeedbackThemeDefault,
} from '../user-feedback/theme';

export const radioThemeDefault = {
	radio: {
		borderHover: palette.focus[400],
		border: palette.neutral[60],
		backgroundChecked: palette.focus[400],
		textLabel: palette.neutral[7],
		textLabelSupporting: palette.neutral[46],
		borderError: palette.error[400],
	},
	...labelThemeDefault,
	...userFeedbackThemeDefault,
};

export const radioThemeBrand = {
	radio: {
		borderHover: palette.neutral[100],
		border: palette.brand[800],
		backgroundChecked: palette.neutral[100],
		textLabel: palette.neutral[100],
		textLabelSupporting: palette.brand[800],
		borderError: palette.error[500],
	},
	...labelThemeBrand,
	...userFeedbackThemeBrand,
};
