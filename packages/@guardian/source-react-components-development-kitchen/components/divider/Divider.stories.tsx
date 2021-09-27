import { Divider, DividerProps } from './index';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asPlayground,
	asChromaticStory,
} from '../../../../../lib/story-intents';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Divider',
	component: Divider,
};

const Template: Story = (args: DividerProps) => (
	<span>
		<p>Some text</p>
		<Divider {...args} />
		<p>Some text</p>
	</span>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultDivider = Template.bind({});
asChromaticStory(DefaultDivider);

// *****************************************************************************

export const TightDivider = Template.bind({});
TightDivider.args = {
	spaceAbove: 'tight',
};
asChromaticStory(TightDivider);

// *****************************************************************************

export const FullDivider = Template.bind({});
FullDivider.args = {
	size: 'full',
};
asChromaticStory(FullDivider);

// *****************************************************************************

export const TextDivider = Template.bind({});
TextDivider.args = {
	displayText: 'I am centred',
};
asChromaticStory(TextDivider);
