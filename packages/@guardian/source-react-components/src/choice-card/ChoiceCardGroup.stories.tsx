import { breakpoints } from '@guardian/source-foundations';
import type { Story } from '@storybook/react';
import { useState } from 'react';
import { ChoiceCard } from './ChoiceCard';
import ChoiceCardStories from './ChoiceCard.stories';
import { ChoiceCardGroup } from './ChoiceCardGroup';
import type { ChoiceCardGroupProps } from './ChoiceCardGroup';

export default {
	title: 'Packages/source-react-components/ChoiceCardGroup',
	component: ChoiceCardGroup,
	subcomponents: { ChoiceCard },
	args: {
		name: 'colours',
		label: 'Choose an option',
		supporting: 'These are your options',
		multi: false,
		hideLabel: false,
	},
	argTypes: {
		columns: {
			options: [undefined, 2, 3, 4, 5],
			control: { type: 'select' },
		},
		error: {
			options: [undefined, 'Please select a choice card to continue'],
			control: { type: 'select' },
		},
	},
};

const Template: Story<ChoiceCardGroupProps> = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
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
	</ChoiceCardGroup>
);

export const DefaultDefaultTheme = Template.bind({});
DefaultDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
};

// *****************************************************************************

export const DefaultMobileDefaultTheme = Template.bind({});
DefaultMobileDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
};
DefaultMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};

// *****************************************************************************

export const DefaultTabletDefaultTheme = Template.bind({});
DefaultTabletDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
};
DefaultTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

// *****************************************************************************

export const DefaultIn2ColumnsDefaultTheme = Template.bind({});
DefaultIn2ColumnsDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
	columns: 2,
};

// *****************************************************************************

export const DefaultIn3ColumnsDefaultTheme = Template.bind({});
DefaultIn3ColumnsDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
	columns: 3,
};

// *****************************************************************************

export const DefaultIn4ColumnsDefaultTheme = Template.bind({});
DefaultIn4ColumnsDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
	columns: 4,
};

// *****************************************************************************

export const DefaultIn5ColumnsDefaultTheme = Template.bind({});
DefaultIn5ColumnsDefaultTheme.args = {
	label: undefined,
	supporting: undefined,
	columns: 5,
};

// *****************************************************************************

export const WithLabelDefaultTheme = Template.bind({});
WithLabelDefaultTheme.args = { supporting: undefined };

// *****************************************************************************

export const WithSupportingDefaultTheme = Template.bind({});

// *****************************************************************************

export const WithErrorDefaultTheme = Template.bind({});
WithErrorDefaultTheme.args = {
	error: 'Please select a choice card to continue',
	label: undefined,
	supporting: undefined,
};

// *****************************************************************************

export const WithLabelAndErrorDefaultTheme = Template.bind({});
WithLabelAndErrorDefaultTheme.args = {
	error: 'Please select a choice card to continue',
	supporting: undefined,
};

// *****************************************************************************

export const WithLabelAndSupportingAndErrorDefaultTheme = Template.bind({});
WithLabelAndSupportingAndErrorDefaultTheme.args = {
	error: 'Please select a choice card to continue',
};

// *****************************************************************************

export const WithWildlyVaryingLengthsDefaultTheme = Template.bind({});
WithWildlyVaryingLengthsDefaultTheme.args = {
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

// *****************************************************************************

export const WithWildlyVaryingLengthsMobileDefaultTheme = Template.bind({});
WithWildlyVaryingLengthsMobileDefaultTheme.args =
	WithWildlyVaryingLengthsDefaultTheme.args;
WithWildlyVaryingLengthsMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobile' },
	chromatic: {
		viewports: [breakpoints.mobile],
	},
};

// *****************************************************************************

export const WithWildlyVaryingLengthsTabletDefaultTheme = Template.bind({});
WithWildlyVaryingLengthsTabletDefaultTheme.args =
	WithWildlyVaryingLengthsDefaultTheme.args;
WithWildlyVaryingLengthsTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

// *****************************************************************************

export const ControlledMultiSelectDefaultTheme: Story<ChoiceCardGroupProps> = (
	args: ChoiceCardGroupProps,
) => {
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
ControlledMultiSelectDefaultTheme.args = {
	multi: true,
};

// *****************************************************************************

export const ControlledSingleSelectDefaultTheme: Story<ChoiceCardGroupProps> = (
	args: ChoiceCardGroupProps,
) => {
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
ControlledSingleSelectDefaultTheme.args = {
	multi: false,
};

// *****************************************************************************

export const UnControlledMultiSelectDefaultTheme: Story<
	ChoiceCardGroupProps
> = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		<ChoiceCard id="abc1" value="option-1" label="Option 1" defaultChecked />
		<ChoiceCard id="abc2" value="option-2" label="Option 2" defaultChecked />
	</ChoiceCardGroup>
);
UnControlledMultiSelectDefaultTheme.args = {
	multi: true,
};
UnControlledMultiSelectDefaultTheme.storyName = 'Un-controlled Multi Select';

// *****************************************************************************

export const UnControlledSingleSelectDefaultTheme: Story<
	ChoiceCardGroupProps
> = (args: ChoiceCardGroupProps) => (
	<ChoiceCardGroup {...args}>
		<ChoiceCard id="abc1" value="option-1" label="Option 1" />
		<ChoiceCard id="abc2" value="option-2" label="Option 2" defaultChecked />
	</ChoiceCardGroup>
);
UnControlledSingleSelectDefaultTheme.args = {
	multi: false,
};
UnControlledSingleSelectDefaultTheme.storyName = 'Un-controlled Single Select';
