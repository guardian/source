import { SvgCamera } from '@guardian/src-icons';
import { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';
import { ChoiceCard, ChoiceCardProps } from './ChoiceCard';

export default {
	title: 'Source/src-choice-card/ChoiceCard',
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

const Template: Story<ChoiceCardProps> = (args: ChoiceCardProps) => (
	<ChoiceCard {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	icon: 'undefined',
	checked: false,
};
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};
asChromaticStory(Checked);

// *****************************************************************************

export const Error = Template.bind({});
Error.args = {
	error: true,
};
asChromaticStory(Error);

// *****************************************************************************

export const Icon = Template.bind({});
Icon.args = {
	icon: <SvgCamera />,
};
asChromaticStory(Icon);
