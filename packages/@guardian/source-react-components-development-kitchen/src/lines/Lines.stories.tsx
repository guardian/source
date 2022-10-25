import type { Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { DashedLines as DashedLinesComponent } from './DashedLines';
import { DottedLines as DottedLinesComponent } from './DottedLines';
import type { LinesProps } from './Lines';
import { SquigglyLines as SquigglyLinesComponent } from './SquigglyLines';
import { StraightLines as StraightLinesComponent } from './StraightLines';

export default {
	title: 'Packages/source-react-components-development-kitchen/Lines',
	component: StraightLinesComponent,
	args: {
		count: '4',
	},
};

const Template: Story = (args: LinesProps) => {
	switch (args.effect) {
		case 'dotted':
			return <DottedLinesComponent {...args} />;
		case 'dashed':
			return <DashedLinesComponent {...args} />;
		case 'squiggly':
			return <SquigglyLinesComponent {...args} />;
		case 'straight':
		default:
			return <StraightLinesComponent {...args} />;
	}
};

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
	count: '1',
};
asChromaticStory(SingleLine);

// *****************************************************************************

export const FourLines = Template.bind({});
FourLines.args = {
	count: '4',
};
asChromaticStory(FourLines);

// *****************************************************************************

export const EightLines = Template.bind({});
EightLines.args = {
	count: '8',
};
asChromaticStory(EightLines);

// *****************************************************************************

export const BlueLines = Template.bind({});
BlueLines.args = {
	color: 'blue',
};
asChromaticStory(BlueLines);
