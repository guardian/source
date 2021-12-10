import '@emotion/react';

import { accordionThemeDefault } from '../accordion/theme';
import { buttonThemeDefault } from '../button/theme';
import { checkboxThemeDefault } from '../checkbox/theme';
import { choiceCardThemeDefault } from '../choice-card/theme';
import { labelThemeDefault } from '../label/theme';
import { linkThemeDefault } from '../link/theme';
import { footerThemeBrand } from '../footer/theme';
import { radioThemeDefault } from '../radio/theme';
import { selectThemeDefault } from '../select/theme';
import { textInputThemeDefault } from '../text-input/theme';
import { userFeedbackThemeDefault } from '../user-feedback/theme';

declare module '@emotion/react' {
	export interface Theme {
		accordion?: typeof accordionThemeDefault.accordion;
		button?: typeof buttonThemeDefault.button;
		checkbox?: typeof checkboxThemeDefault.checkbox;
		choiceCard?: typeof choiceCardThemeDefault.choiceCard;
		footer?: typeof footerThemeBrand.footer;
		label?: typeof labelThemeDefault.label;
		layout?: {};
		link?: typeof linkThemeDefault.link;
		radio?: typeof radioThemeDefault.radio;
		select?: typeof selectThemeDefault.select;
		textArea?: {};
		textInput?: typeof textInputThemeDefault.textInput;
		userFeedback?: typeof userFeedbackThemeDefault.userFeedback;
	}
}
