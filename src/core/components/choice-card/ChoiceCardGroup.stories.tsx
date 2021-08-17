import { ThemeProvider } from '@emotion/react';
import { choiceCardDefault } from '@guardian/src-foundations/themes';
import React, { useState } from 'react';
import { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';
import { ChoiceCard } from './ChoiceCard';
import ChoiceCardStories from './ChoiceCard.stories';
import { ChoiceCardGroup, ChoiceCardGroupProps } from './ChoiceCardGroup';

export default {
	title: 'Source/src-choice-card/ChoiceCardGroup',
	component: ChoiceCardGroup,
	subcomponents: { ChoiceCard },
	args: {
		name: 'colours',
		label: 'Choose an option',
		supporting: 'These are your options',
		multi: false,
	},
	argTypes: {
		// sorted by required,alpha
		name: undefined,
		columns: {
			options: [undefined, 2, 3, 4, 5],
			control: { type: 'select' },
		},
		error: {
			options: [undefined, 'example error message'],
			control: { type: 'select' },
		},
		label: undefined,
		multi: undefined,
		supporting: undefined,
	},
};

const Template: Story = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		{args.children ?? (
			<>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc1"
					value="option-1"
					label="Option 1"
					key={1}
				/>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc2"
					value="option-2"
					label="Option 2"
					key={2}
				/>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc3"
					value="option-3"
					label="Option 3"
					key={3}
				/>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc4"
					value="option-4"
					label="Option 4"
					key={4}
				/>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc5"
					value="option-5"
					label="Option 5"
					key={5}
				/>
				<ChoiceCard
					{...ChoiceCardStories.args}
					id="abc6"
					value="option-6"
					label="Option 6"
					key={6}
				/>
			</>
		)}
	</ChoiceCardGroup>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
Default.args = {
	label: undefined,
	supporting: undefined,
};
asChromaticStory(Default);

// *****************************************************************************

export const DefaultMobile = Template.bind({});
DefaultMobile.args = {
	label: undefined,
	supporting: undefined,
};
DefaultMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(DefaultMobile);

// *****************************************************************************

export const DefaultTablet = Template.bind({});
DefaultTablet.args = {
	label: undefined,
	supporting: undefined,
};
DefaultTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(DefaultTablet);

// *****************************************************************************

export const DefaultIn2Columns = Template.bind({});
DefaultIn2Columns.args = {
	label: undefined,
	supporting: undefined,
	columns: 2,
};
asChromaticStory(DefaultIn2Columns);

// *****************************************************************************

export const DefaultIn3Columns = Template.bind({});
DefaultIn3Columns.args = {
	label: undefined,
	supporting: undefined,
	columns: 3,
};
asChromaticStory(DefaultIn3Columns);

// *****************************************************************************

export const DefaultIn4Columns = Template.bind({});
DefaultIn4Columns.args = {
	label: undefined,
	supporting: undefined,
	columns: 4,
};
asChromaticStory(DefaultIn4Columns);

// *****************************************************************************

export const DefaultIn5Columns = Template.bind({});
DefaultIn5Columns.args = {
	label: undefined,
	supporting: undefined,
	columns: 5,
};
asChromaticStory(DefaultIn5Columns);

// *****************************************************************************

export const WithLabel = Template.bind({});
WithLabel.args = { supporting: undefined };
asChromaticStory(WithLabel);

// *****************************************************************************

export const WithSupporting = Template.bind({});
asChromaticStory(WithSupporting);

// *****************************************************************************

export const WithError = Template.bind({});
WithError.args = {
	error: 'Please select a choice card to continue',
	label: undefined,
	supporting: undefined,
};
asChromaticStory(WithError);

// *****************************************************************************

export const WithLabelAndError = Template.bind({});
WithLabelAndError.args = {
	error: 'Please select a choice card to continue',
	supporting: undefined,
};
asChromaticStory(WithLabelAndError);

// *****************************************************************************

export const WithLabelAndSupportingAndError = Template.bind({});
WithLabelAndSupportingAndError.args = {
	error: 'Please select a choice card to continue',
};
asChromaticStory(WithLabelAndSupportingAndError);

// *****************************************************************************

export const WithWildlyVaryingLengths = Template.bind({});
WithWildlyVaryingLengths.args = {
	children: [
		<ChoiceCard
			id="abc1"
			value="option-1"
			label="A very, very, very, very, very, very, very long piece of text indeed"
			key={1}
		/>,
		<ChoiceCard
			id="abc2"
			value="option-2"
			label="Something probable"
			key={2}
		/>,
		<ChoiceCard id="abc3" value="option-3" label="Short" key={3} />,
	],
};
asChromaticStory(WithWildlyVaryingLengths);

// *****************************************************************************

export const WithWildlyVaryingLengthsMobile = Template.bind({});
WithWildlyVaryingLengthsMobile.args = WithWildlyVaryingLengths.args;
WithWildlyVaryingLengthsMobile.parameters = {
	viewport: { defaultViewport: 'mobile' },
};
asChromaticStory(WithWildlyVaryingLengthsMobile);

// *****************************************************************************

export const WithWildlyVaryingLengthsTablet = Template.bind({});
WithWildlyVaryingLengthsTablet.args = WithWildlyVaryingLengths.args;
WithWildlyVaryingLengthsTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithWildlyVaryingLengthsTablet);

// *****************************************************************************

export const WithDefaultTheme = (args: ChoiceCardGroupProps) => (
	<ThemeProvider theme={choiceCardDefault}>
		<Template {...args} />
	</ThemeProvider>
);
asChromaticStory(WithDefaultTheme);

// *****************************************************************************

export const ControlledMultiSelect: Story = (args: ChoiceCardGroupProps) => {
	const [state, setState] = useState({
		opt1: true,
		opt2: true,
	});
	return (
		<>
			<ChoiceCardGroup {...args}>
				<ChoiceCard
					id="abc1"
					value="option-1"
					label="Option 1"
					checked={state.opt1}
					onChange={() => setState({ ...state, opt1: !state.opt1 })}
				/>
				<ChoiceCard
					id="abc2"
					value="option-2"
					label="Option 2"
					checked={state.opt2}
					onChange={() => setState({ ...state, opt2: !state.opt2 })}
				/>
			</ChoiceCardGroup>
			<pre>
				Option 1: {state.opt1 ? 'selected' : 'unselected'}
				{'\n'}
				Option 2: {state.opt2 ? 'selected' : 'unselected'}
			</pre>
		</>
	);
};
ControlledMultiSelect.args = {
	multi: true,
};
asChromaticStory(ControlledMultiSelect);

// *****************************************************************************

export const ControlledSingleSelect: Story = (args: ChoiceCardGroupProps) => {
	const [selected, setSelected] = useState<string | null>('option-2');

	return (
		<>
			<ChoiceCardGroup {...args}>
				<ChoiceCard
					id="abc1"
					value="option-1"
					label="Option 1"
					checked={selected === 'option-1'}
					onChange={() => setSelected('option-1')}
				/>
				<ChoiceCard
					id="abc2"
					value="option-2"
					label="Option 2"
					checked={selected === 'option-2'}
					onChange={() => setSelected('option-2')}
				/>
			</ChoiceCardGroup>
			<pre>
				Option 1: {selected === 'option-1' ? 'selected' : 'unselected'}
				{'\n'}
				Option 2: {selected === 'option-2' ? 'selected' : 'unselected'}
			</pre>
		</>
	);
};
ControlledSingleSelect.args = {
	multi: false,
};
asChromaticStory(ControlledSingleSelect);

// *****************************************************************************

export const UnControlledMultiSelect: Story = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		<ChoiceCard
			id="abc1"
			value="option-1"
			label="Option 1"
			defaultChecked
		/>
		<ChoiceCard
			id="abc2"
			value="option-2"
			label="Option 2"
			defaultChecked
		/>
	</ChoiceCardGroup>
);
UnControlledMultiSelect.args = {
	multi: true,
};
UnControlledMultiSelect.storyName = 'Un-controlled Multi Select';
asChromaticStory(UnControlledMultiSelect);

// *****************************************************************************

export const UnControlledSingleSelect: Story = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		<ChoiceCard id="abc1" value="option-1" label="Option 1" />
		<ChoiceCard
			id="abc2"
			value="option-2"
			label="Option 2"
			defaultChecked
		/>
	</ChoiceCardGroup>
);
UnControlledSingleSelect.args = {
	multi: false,
};
UnControlledSingleSelect.storyName = 'Un-controlled Single Select';
asChromaticStory(UnControlledSingleSelect);
