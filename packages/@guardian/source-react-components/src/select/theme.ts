import { palette } from '@guardian/source-foundations';
import { userFeedbackThemeDefault } from '../user-feedback/theme';

export const selectThemeDefault = {
	select: {
		textUserInput: palette.neutral[7],
		textLabel: palette.neutral[7],
		textLabelOptional: palette.neutral[46],
		textLabelSupporting: palette.neutral[46],
		textError: palette.neutral[7],
		textSuccess: palette.success[400],
		backgroundInput: palette.neutral[100],
		border: palette.neutral[46],
		borderActive: palette.focus[400],
		borderError: palette.error[400],
		borderSuccess: palette.success[400],
	},
	selectDark: {
		textUserInput: palette.neutral[97],
		textLabel: palette.neutral[97],
		textLabelOptional: palette.neutral[60],
		textLabelSupporting: palette.neutral[60],
		textError: palette.neutral[97],
		textSuccess: palette.success[500],
		backgroundInput: palette.neutral[0],
		border: palette.neutral[60],
		borderActive: palette.focus[400],
		borderError: palette.error[500],
		borderSuccess: palette.success[500],
	},
	...userFeedbackThemeDefault,
};
