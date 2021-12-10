import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { SvgCamera } from '../icons/SvgCamera';
import { ChoiceCard } from './ChoiceCard';
import type { ChoiceCardProps } from './ChoiceCard';

export default {
	title: 'Packages/source-react-components/ChoiceCard',
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

export const DefaultDefaultTheme = Template.bind({});
asChromaticStory(DefaultDefaultTheme);

// *****************************************************************************

export const CheckedDefaultTheme = Template.bind({});
CheckedDefaultTheme.args = {
	checked: true,
};
asChromaticStory(CheckedDefaultTheme);

// *****************************************************************************

export const ErrorDefaultTheme = Template.bind({});
ErrorDefaultTheme.args = {
	error: true,
};
asChromaticStory(ErrorDefaultTheme);

// *****************************************************************************

export const IconDefaultTheme = Template.bind({});
IconDefaultTheme.args = {
	icon: 'JSX element',
};
asChromaticStory(IconDefaultTheme);
