import type { Story } from '@storybook/react';
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

// *****************************************************************************

export const DottedLines = Template.bind({});
DottedLines.args = {
	effect: 'dotted',
};

// *****************************************************************************

export const SquigglyLines = Template.bind({});
SquigglyLines.args = {
	effect: 'squiggly',
};

// *****************************************************************************

export const DashedLines = Template.bind({});
DashedLines.args = {
	effect: 'dashed',
};

// *****************************************************************************

export const SingleLine = Template.bind({});
SingleLine.args = {
	count: '1',
};

// *****************************************************************************

export const FourLines = Template.bind({});
FourLines.args = {
	count: '4',
};

// *****************************************************************************

export const EightLines = Template.bind({});
EightLines.args = {
	count: '8',
};

// *****************************************************************************

export const BlueLines = Template.bind({});
BlueLines.args = {
	color: 'blue',
};
