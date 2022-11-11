import { palette } from '@guardian/source-foundations';
import { userFeedbackThemeDefault } from '../user-feedback/theme';

export const textAreaThemeDefault = {
	textArea: {
		textUserInput: palette.neutral[7],
		textError: palette.neutral[7],
		textSuccess: palette.success[400],
		backgroundInput: palette.neutral[100],
		border: palette.neutral[46],
		borderActive: palette.focus[400],
		borderError: palette.error[400],
		borderSuccess: palette.success[400],
	},
	textAreaDark: {
		textUserInput: palette.neutral[97],
		textError: palette.neutral[97],
		textSuccess: palette.success[400],
		backgroundInput: palette.neutral[0],
		border: palette.neutral[60],
		borderActive: palette.focus[400],
		borderError: palette.error[500],
		borderSuccess: palette.success[500],
	},
	...userFeedbackThemeDefault,
};
