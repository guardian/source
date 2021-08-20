import { background, border } from '@guardian/src-foundations/palette';
import { userFeedbackDefault } from './user-feedback';
import {
	ColorTextUserInput,
	ColorTextInputLabel,
	ColorTextSupporting,
	ColorTextError,
	ColorTextSuccess,
} from '../../dist/tokens/color';

export const textInputDefault = {
	textInput: {
		textUserInput: ColorTextUserInput,
		textLabel: ColorTextInputLabel,
		textLabelOptional: ColorTextSupporting,
		textLabelSupporting: ColorTextSupporting,
		textError: ColorTextError,
		textSuccess: ColorTextSuccess,
		backgroundInput: background.input,
		border: border.input,
		borderActive: border.inputActive,
		borderError: border.error,
		borderSuccess: border.success,
	},
	...userFeedbackDefault,
};
