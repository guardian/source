import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from '../palette';
import { userFeedbackDefault, userFeedbackBrand } from './user-feedback';
import { labelDefault, labelBrand } from './label';

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
