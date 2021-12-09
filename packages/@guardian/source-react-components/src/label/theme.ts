import { brandText, text } from '@guardian/source-foundations';

export const labelThemeDefault = {
	label: {
		textLabel: text.inputLabel,
		textOptional: text.supporting,
		textSupporting: text.supporting,
		textError: text.error,
		textSuccess: text.success,
	},
};

export const labelThemeBrand = {
	label: {
		textLabel: brandText.inputLabel,
		textOptional: brandText.supporting,
		textSupporting: brandText.supporting,
		textError: brandText.error,
		textSuccess: brandText.success,
	},
};
