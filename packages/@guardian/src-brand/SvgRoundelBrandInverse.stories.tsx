import { Story } from '../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';
import {
	SvgRoundelBrandInverse,
	SvgRoundelBrandInverseProps,
} from './SvgRoundelBrandInverse';

export default {
	title: 'Source/src-brand/SvgRoundelBrandInverse',
	component: SvgRoundelBrandInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelBrandInverseProps) => (
	<SvgRoundelBrandInverse {...args} />
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
