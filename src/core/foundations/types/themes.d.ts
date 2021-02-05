import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		accordion: {
			textPrimary: string;
			borderPrimary: string;
		};
		button: {};
		checkbox: {
			border: string;
			borderHover: string;
			borderChecked: string;
			borderError: string;
			backgroundChecked: string;
			textLabel: string;
			textLabelSupporting: string;
			textIndeterminate: string;
		};
		choiceCard: {
			textLabel: string;
			textLabelSupporting: string;
			textGroupLabel: string;
			textGroupLabelSupporting: string;
			border: string;
			textChecked: string;
			backgroundChecked: string;
			backgroundTick: string;
			borderChecked: string;
			textHover: string;
			borderHover: string;
			textError: string;
			borderError: string;
		};
		footer: {
			border: string;
			background: string;
			text: string;
			anchor: string;
			anchorHover: string;
		};
		label: {
			textLabel: string;
			textOptional: string;
			textSupporting: string;
			textError: string;
			textSuccess: string;
		};
		layout: {};
		link: {};
		radio: {
			borderHover: string;
			border: string;
			backgroundChecked: string;
			textLabel: string;
			textLabelSupporting: string;
			borderError: string;
		};
		select: {
			textUserInput: string;
			textLabel: string;
			textLabelOptional: string;
			textLabelSupporting: string;
			textError: string;
			textSuccess: string;
			backgroundInput: string;
			border: string;
			borderActive: string;
			borderError: string;
			borderSuccess: string;
		};
		textArea: {};
		textInput: {
			textUserInput: string;
			textLabel: string;
			textLabelOptional: string;
			textLabelSupporting: string;
			textError: string;
			textSuccess: string;
			backgroundInput: string;
			border: string;
			borderActive: string;
			borderError: string;
			borderSuccess: string;
		};
		userFeedback: {
			textSuccess: string;
			textError: string;
		};
	}
}
