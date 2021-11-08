import { text, background, border } from '@guardian/src-foundations/palette';
import { userFeedbackDefault } from './user-feedback';

export const selectDefault = {
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
	...userFeedbackDefault,
};
