import { ChoiceCardGroup, ChoiceCardGroupProps } from './ChoiceCardGroup';
import ChoiceCard from './ChoiceCard.stories';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';
import { Story } from '../../../@types/storybook-emotion-10-fixes';

export default {
	title: 'Source/src-choice-card/ChoiceCardGroup',
	component: ChoiceCardGroup,
	subcomponents: { ChoiceCard: ChoiceCard.component },
	args: {
		name: 'colours',
		label: 'A ChoiceCardGroup example',
		supporting: 'These are your options',
		multi: false,
	},
	argTypes: {
		columns: {
			options: [undefined, 2, 3, 4, 5],
			control: { type: 'select' },
		},
		error: {
			options: [undefined, 'example error message'],
			control: { type: 'select' },
		},
	},
};

const Template: Story = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		<ChoiceCard.component id="abc1" value="option-1" label="Option 1" />
		<ChoiceCard.component id="abc2" value="option-2" label="Option 2" />
		<ChoiceCard.component id="abc3" value="option-3" label="Option 3" />
		<ChoiceCard.component id="abc4" value="option-4" label="Option 4" />
		<ChoiceCard.component id="abc5" value="option-5" label="Option 5" />
		<ChoiceCard.component id="abc6" value="option-6" label="Option 6" />
	</ChoiceCardGroup>
);

export const Playground = Template.bind({});
asPlayground(Playground);
