import { palette } from '@guardian/source-foundations';
import { labelThemeBrand, labelThemeDefault } from '../label/theme';
import {
	userFeedbackThemeBrand,
	userFeedbackThemeDefault,
} from '../user-feedback/theme';

export const checkboxThemeDefault = {
	checkbox: {
		border: palette.neutral[46],
		borderHover: palette.brand[500],
		borderChecked: palette.brand[500],
		borderError: palette.error[400],
		backgroundChecked: palette.brand[500],
		textLabel: palette.neutral[7],
		textLabelSupporting: palette.neutral[46],
		textIndeterminate: palette.neutral[46],
	},
	...userFeedbackThemeDefault,
	...labelThemeDefault,
};

export const checkboxThemeBrand = {
	checkbox: {
		border: palette.brand[800],
		borderHover: palette.neutral[100],
		borderChecked: palette.neutral[100],
		borderError: palette.error[500],
		backgroundChecked: palette.neutral[100],
		textLabel: palette.neutral[100],
		textLabelSupporting: palette.brand[800],
		textIndeterminate: palette.brand[800],
	},
	...userFeedbackThemeBrand,
	...labelThemeBrand,
};
