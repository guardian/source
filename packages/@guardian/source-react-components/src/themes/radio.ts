import {
	background,
	border,
	brandBackground,
	brandBorder,
	brandText,
	text,
} from '@guardian/src-foundations/palette';
import { labelBrand, labelDefault } from './label';
import { userFeedbackBrand, userFeedbackDefault } from './user-feedback';

export const radioDefault = {
	radio: {
		borderHover: border.inputHover,
		border: border.input,
		backgroundChecked: background.inputChecked,
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
		borderError: border.error,
	},
	...labelDefault,
	...userFeedbackDefault,
};

export const radioBrand = {
	radio: {
		borderHover: brandBorder.inputHover,
		border: brandBorder.input,
		backgroundChecked: brandBackground.inputChecked,
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.supporting,
		borderError: brandBorder.error,
	},
	...labelBrand,
	...userFeedbackBrand,
};
