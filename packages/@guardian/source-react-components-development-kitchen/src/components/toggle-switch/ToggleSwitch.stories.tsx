import { useState } from 'react';
import type { Story } from '../../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../../lib/story-intents';
import { ToggleSwitch } from './ToggleSwitch';
import type { ToggleSwitchProps } from './ToggleSwitch';

export default {
	title: 'Packages/source-react-components-development-kitchen/ToggleSwitch',
	component: ToggleSwitch,
	args: {},
};

const Template: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<ToggleSwitch
			{...args}
			checked={checked}
			onClick={() => {
				setChecked(!checked);
			}}
		/>
	);
};

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const SlimNoLabel = Template.bind({});
SlimNoLabel.args = {
	size: 'slim',
};
asChromaticStory(SlimNoLabel);

// *****************************************************************************

export const MediumNoLabel = Template.bind({});
MediumNoLabel.args = {
	size: 'medium',
};
asChromaticStory(MediumNoLabel);

// *****************************************************************************

export const SlimWithLabel = Template.bind({});
SlimWithLabel.args = {
	label: 'Get alerts on this story',
	size: 'slim',
};
asChromaticStory(SlimWithLabel);

// *****************************************************************************

export const MediumWithLabel = Template.bind({});
MediumWithLabel.args = {
	label: 'Get alerts on this story',
	size: 'medium',
};
asChromaticStory(MediumWithLabel);
