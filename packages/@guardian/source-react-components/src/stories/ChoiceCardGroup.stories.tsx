import { ChoiceCard } from '../../../src-choice-card/ChoiceCard';
import { ChoiceCardGroup } from '../../../src-choice-card/ChoiceCardGroup';

export default {
	title: 'Source v4/source-react-components/ChoiceCardGroup',
	component: ChoiceCardGroup,
	subcomponents: { ChoiceCard },
	args: {
		name: 'colours',
		label: 'Choose an option',
		supporting: 'These are your options',
		multi: false,
	},
	argTypes: {
		// sorted by required,alpha
		name: undefined,
		columns: {
			options: [undefined, 2, 3, 4, 5],
			control: { type: 'select' },
		},
		error: {
			options: [undefined, 'Please select a choice card to continue'],
			control: { type: 'select' },
		},
		label: undefined,
		multi: undefined,
		supporting: undefined,
	},
};

export * from '../../../src-choice-card/ChoiceCardGroup.stories';
