import { useState } from 'react';
import type { Story } from '../../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../../lib/story-intents';
import { ToggleSwitch } from './ToggleSwitch';
import type { ToggleSwitchProps } from './ToggleSwitch';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/ToggleSwitch',
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

export const AndroidNoLabel = Template.bind({});
AndroidNoLabel.args = {
	platform: 'android',
};
asChromaticStory(AndroidNoLabel);

// *****************************************************************************

export const MediumNoLabel = Template.bind({});
MediumNoLabel.args = {
	platform: 'ios',
};
asChromaticStory(MediumNoLabel);

// *****************************************************************************

export const WebNoLabel = Template.bind({});
WebNoLabel.args = {
	platform: 'web',
};
asChromaticStory(WebNoLabel);

// *****************************************************************************

export const AndroidWithLabel = Template.bind({});
AndroidWithLabel.args = {
	label: 'Get alerts on this story',
	platform: 'android',
};
asChromaticStory(AndroidWithLabel);

// *****************************************************************************

export const MediumWithLabel = Template.bind({});
MediumWithLabel.args = {
	label: 'Get alerts on this story',
	platform: 'ios',
};
asChromaticStory(MediumWithLabel);

// *****************************************************************************

export const WebWithLabel = Template.bind({});
WebWithLabel.args = {
	label: 'Get alerts on this story',
	platform: 'web',
};
asChromaticStory(WebWithLabel);
