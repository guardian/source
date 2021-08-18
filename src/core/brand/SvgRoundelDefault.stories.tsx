import { Story } from '../../@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../lib/story-intents';
import { SvgRoundelDefault, SvgRoundelDefaultProps } from './SvgRoundelDefault';

export default {
	title: 'Source/src-brand/SvgRoundelDefault',
	component: SvgRoundelDefault,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelDefaultProps) => (
	<SvgRoundelDefault {...args} />
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
