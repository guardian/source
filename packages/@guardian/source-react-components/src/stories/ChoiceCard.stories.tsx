import { SvgCamera } from '@guardian/src-icons';
import { ChoiceCard } from '../../../src-choice-card/ChoiceCard';

export default {
	title: 'Source v4/source-react-components/ChoiceCard',
	component: ChoiceCard,
	args: {
		id: 'option-1-id',
		value: 'option-1',
		label: 'string',
	},
	argTypes: {
		// sorted by required,alpha
		id: undefined,
		label: {
			options: ['string', 'JSX element'],
			mapping: {
				string: 'Option 1',
				'JSX element': <em>Option 1</em>,
			},
		},
		value: undefined,
		checked: undefined,
		defaultChecked: {
			control: { disable: true },
		},
		icon: {
			options: ['undefined', 'JSX element'],
			mapping: {
				undefined: undefined,
				'JSX element': <SvgCamera />,
			},
			control: { type: 'radio' },
		},
		onChange: { action: 'choice changed' },
	},
};

export * from '../../../src-choice-card/ChoiceCard.stories';
