import {
	background,
	border,
	brandBackground,
	brandBorder,
	brandText,
	text,
} from '@guardian/source-foundations';
import { labelThemeBrand, labelThemeDefault } from '../label/theme';
import {
	userFeedbackThemeBrand,
	userFeedbackThemeDefault,
} from '../user-feedback/theme';

export const checkboxThemeDefault = {
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
	...userFeedbackThemeDefault,
	...labelThemeDefault,
};

export const checkboxThemeBrand = {
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
	...userFeedbackThemeBrand,
	...labelThemeBrand,
};
