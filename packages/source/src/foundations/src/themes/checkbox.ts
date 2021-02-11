import {
	border,
	background,
	text,
	brandBorder,
	brandBackground,
	brandText,
} from '@guardian/src-foundations/palette';
import { userFeedbackDefault, userFeedbackBrand } from './user-feedback';
import { labelDefault, labelBrand } from './label';

export const checkboxDefault = {
	checkbox: {
		border: border.input,
		borderHover: border.inputHover,
		borderChecked: border.inputChecked,
		borderError: border.error,
		backgroundChecked: background.inputChecked,
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
		textIndeterminate: text.supporting,
	},
	...userFeedbackDefault,
	...labelDefault,
};

export const checkboxBrand = {
	checkbox: {
		border: brandBorder.input,
		borderHover: brandBorder.inputHover,
		borderChecked: brandBorder.inputChecked,
		borderError: brandBorder.error,
		backgroundChecked: brandBackground.inputChecked,
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.inputLabelSupporting,
		textIndeterminate: brandText.supporting,
	},
	...userFeedbackBrand,
	...labelBrand,
};
