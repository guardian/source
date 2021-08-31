import { Lines, LinesProps } from './index';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Kitchen/source-kitchen-react/Lines',
	component: Lines,
	args: {
		effect: 'straight',
		count: 4,
	},
};

const Template: Story = (args: LinesProps) => <Lines {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultLines = Template.bind({});
asChromaticStory(DefaultLines);

// *****************************************************************************

export const DottedLines = Template.bind({});
DottedLines.args = {
	effect: 'dotted',
};
asChromaticStory(DottedLines);

// *****************************************************************************

export const SquigglyLines = Template.bind({});
SquigglyLines.args = {
	effect: 'squiggly',
};
asChromaticStory(SquigglyLines);

// *****************************************************************************

export const DashedLines = Template.bind({});
DashedLines.args = {
	effect: 'dashed',
};
asChromaticStory(DashedLines);

// *****************************************************************************

export const SingleLine = Template.bind({});
SingleLine.args = {
	count: 1,
};
asChromaticStory(SingleLine);

// *****************************************************************************

export const FourLines = Template.bind({});
FourLines.args = {
	count: 4,
};
asChromaticStory(FourLines);

// *****************************************************************************

export const EightLines = Template.bind({});
EightLines.args = {
	count: 8,
};
asChromaticStory(EightLines);

// *****************************************************************************

export const BlueLines = Template.bind({});
BlueLines.args = {
	color: 'blue',
};
asChromaticStory(BlueLines);
