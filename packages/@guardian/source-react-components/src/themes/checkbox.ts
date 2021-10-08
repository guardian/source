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
