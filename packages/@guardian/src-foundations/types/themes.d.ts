import '@emotion/react';
import {
	accordionDefault,
	buttonDefault,
	checkboxDefault,
	choiceCardDefault,
	labelDefault,
	linkDefault,
	footerBrand,
	radioDefault,
	selectDefault,
	textInputDefault,
	userFeedbackDefault,
} from '@guardian/src-foundations/themes';
declare module '@emotion/react' {
	export interface Theme {
		accordion?: typeof accordionDefault.accordion;
		button?: typeof buttonDefault.button;
		checkbox?: typeof checkboxDefault.checkbox;
		choiceCard?: typeof choiceCardDefault.choiceCard;
		footer?: typeof footerBrand.footer;
		label?: typeof labelDefault.label;
		layout?: {};
		link?: typeof linkDefault.link;
		radio?: typeof radioDefault.radio;
		select?: typeof selectDefault.select;
		textArea?: {};
		textInput?: typeof textInputDefault.textInput;
		userFeedback?: typeof userFeedbackDefault.userFeedback;
	}
}
