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

export const radioThemeDefault = {
	radio: {
		borderHover: border.inputHover,
		border: border.input,
		backgroundChecked: background.inputChecked,
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
		borderError: border.error,
	},
	...labelThemeDefault,
	...userFeedbackThemeDefault,
};

export const radioThemeBrand = {
	radio: {
		borderHover: brandBorder.inputHover,
		border: brandBorder.input,
		backgroundChecked: brandBackground.inputChecked,
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.supporting,
		borderError: brandBorder.error,
	},
	...labelThemeBrand,
	...userFeedbackThemeBrand,
};
