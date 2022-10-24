import type { Theme as EmotionTheme } from '@emotion/react';
import type { accordionThemeDefault } from '../accordion/theme';
import type { buttonThemeDefault } from '../button/theme';
import type { checkboxThemeDefault } from '../checkbox/theme';
import type { choiceCardThemeDefault } from '../choice-card/theme';
import type { footerThemeBrand } from '../footer/theme';
import type { labelThemeDefault } from '../label/theme';
import type { linkThemeDefault } from '../link/theme';
import type { radioThemeDefault } from '../radio/theme';
import type { selectThemeDefault } from '../select/theme';
import type { textInputThemeDefault } from '../text-input/theme';
import type { userFeedbackThemeDefault } from '../user-feedback/theme';

export interface Theme extends EmotionTheme {
	accordion?: typeof accordionThemeDefault.accordion;
	button?: typeof buttonThemeDefault.button;
	checkbox?: typeof checkboxThemeDefault.checkbox;
	choiceCard?: typeof choiceCardThemeDefault.choiceCard;
	footer?: typeof footerThemeBrand.footer;
	label?: typeof labelThemeDefault.label;
	layout?: Record<string, unknown>;
	link?: typeof linkThemeDefault.link;
	radio?: typeof radioThemeDefault.radio;
	select?: typeof selectThemeDefault.select;
	textArea?: Record<string, unknown>;
	textInput?: typeof textInputThemeDefault.textInput;
	userFeedback?: typeof userFeedbackThemeDefault.userFeedback;
}
