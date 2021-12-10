import { background, border, text } from '@guardian/source-foundations';
import { userFeedbackThemeDefault } from '../user-feedback/theme';

export const selectThemeDefault = {
	select: {
		textUserInput: text.userInput,
		textLabel: text.inputLabel,
		textLabelOptional: text.supporting,
		textLabelSupporting: text.supporting,
		textError: text.inputError,
		textSuccess: text.success,
		backgroundInput: background.input,
		border: border.input,
		borderActive: border.inputActive,
		borderError: border.error,
		borderSuccess: border.success,
	},
	...userFeedbackThemeDefault,
};
