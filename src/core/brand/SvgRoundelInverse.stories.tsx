import { Story } from '../../@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../lib/story-intents';
import { SvgRoundelInverse, SvgRoundelInverseProps } from './SvgRoundelInverse';

export default {
	title: 'Source/src-brand/SvgRoundelInverse',
	component: SvgRoundelInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelInverseProps) => (
	<SvgRoundelInverse {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	width: 300,
};
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
