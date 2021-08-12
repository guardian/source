import { ChoiceCard, ChoiceCardProps } from './ChoiceCard';
import { SvgCamera } from '@guardian/src-icons';
import { asPlayground } from '../../../lib/story-intents';
import { Story } from '../../../@types/storybook-emotion-10-fixes';

export default {
	title: 'Source/src-choice-card/ChoiceCard',
	component: ChoiceCard,
	args: {
		id: 'option-1-id',
		value: 'option-1',
		label: 'string',
		icon: 'undefined',
	},
	argTypes: {
		// include all args so they render in the correct order
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
		defaultChecked: undefined,
		icon: {
			options: ['undefined', 'icon'],
			mapping: {
				undefined: undefined,
				icon: <SvgCamera />,
			},
		},
		onChange: undefined,
	},
};

const Template: Story = (args: ChoiceCardProps) => <ChoiceCard {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);
