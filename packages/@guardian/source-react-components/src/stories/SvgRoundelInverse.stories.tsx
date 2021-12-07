import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { SvgRoundelInverseProps } from '../../../src-brand/SvgRoundelInverse';
import { SvgRoundelInverse } from '../../../src-brand/SvgRoundelInverse';

export default {
	title: 'Packages/source-react-components/SvgRoundelInverse',
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
