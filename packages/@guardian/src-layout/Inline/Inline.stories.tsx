import { Story } from '../../../../lib/@types/storybook-emotion-10-fixes';
import { Inline, InlineProps } from './Inline';
import { asChromaticStory, asPlayground } from '../../../../lib/story-intents';

export default {
	title: 'Source/src-layout/Inline',
	component: Inline,
};

const Template: Story = (args: InlineProps) => (
	<Inline {...args}>
		{args.children ?? (
			<>
				<div>[Item 1]</div>
				<div>[Item 2]</div>
				<div>[Item 3]</div>
			</>
		)}
	</Inline>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const NoSpace = Template.bind({});
asChromaticStory(NoSpace);

// *****************************************************************************

export const Space1 = Template.bind({});
Space1.args = {
	space: 1,
};
asChromaticStory(Space1);

// *****************************************************************************

export const Space2 = Template.bind({});
Space2.args = {
	space: 2,
};
asChromaticStory(Space2);

// *****************************************************************************

export const Space3 = Template.bind({});
Space3.args = {
	space: 3,
};
asChromaticStory(Space3);

// *****************************************************************************

export const Space4 = Template.bind({});
Space4.args = {
	space: 4,
};
asChromaticStory(Space4);

// *****************************************************************************

export const Space5 = Template.bind({});
Space5.args = {
	space: 5,
};
asChromaticStory(Space5);

// *****************************************************************************

export const Space6 = Template.bind({});
Space6.args = {
	space: 6,
};
asChromaticStory(Space6);

// *****************************************************************************

export const Space9 = Template.bind({});
Space9.args = {
	space: 9,
};
asChromaticStory(Space9);

// *****************************************************************************

export const Space12 = Template.bind({});
Space12.args = {
	space: 12,
};
asChromaticStory(Space12);

// *****************************************************************************

export const Space24 = Template.bind({});
Space24.args = {
	space: 24,
};
asChromaticStory(Space24);

// *****************************************************************************

export const LotsOfItems = Template.bind({});
LotsOfItems.args = {
	children: [
		<div key={1}>[Item 1]</div>,
		<div key={2}>[Item 2]</div>,
		<div key={3}>[Item 3]</div>,
		<div key={4}>[Item 4]</div>,
		<div key={5}>[Item 5]</div>,
		<div key={6}>[Item 6]</div>,
		<div key={7}>[Item 7]</div>,
		<div key={8}>[Item 8]</div>,
		<div key={9}>[Item 9]</div>,
		<div key={10}>[Item 10]</div>,
		<div key={11}>[Item 11]</div>,
		<div key={12}>[Item 12]</div>,
		<div key={13}>[Item 13]</div>,
		<div key={14}>[Item 14]</div>,
		<div key={15}>[Item 15]</div>,
		<div key={16}>[Item 16]</div>,
		<div key={17}>[Item 17]</div>,
		<div key={18}>[Item 18]</div>,
		<div key={19}>[Item 19]</div>,
		<div key={20}>[Item 20]</div>,
	],
};
asChromaticStory(LotsOfItems);
