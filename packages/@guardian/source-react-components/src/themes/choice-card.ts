import { background, border, text } from '@guardian/src-foundations/palette';
import { userFeedbackDefault } from './user-feedback';

export const choiceCardDefault = {
	choiceCard: {
		textLabel: text.supporting,
		textLabelSupporting: text.supporting,
		textGroupLabel: text.groupLabel,
		textGroupLabelSupporting: text.groupLabelSupporting,
		border: border.input,
		textChecked: text.inputChecked,
		backgroundChecked: '#E3F6FF',
		backgroundTick: background.inputChecked,
		borderChecked: border.inputChecked,
		textHover: text.inputHover,
		borderHover: border.inputHover,
		textError: text.error,
		borderError: border.error,
	},
	...userFeedbackDefault,
};
