import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
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

export const AndroidNoLabel = Template.bind({});
AndroidNoLabel.args = {
	platform: 'android',
};
asChromaticStory(AndroidNoLabel);

// *****************************************************************************

export const IosNoLabel = Template.bind({});
IosNoLabel.args = {
	platform: 'ios',
};
asChromaticStory(IosNoLabel);

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

export const IosWithLabel = Template.bind({});
IosWithLabel.args = {
	label: 'Get alerts on this story',
	platform: 'ios',
};
asChromaticStory(IosWithLabel);

// *****************************************************************************

export const WebWithLabel = Template.bind({});
WebWithLabel.args = {
	label: 'Get alerts on this story',
	platform: 'web',
};
asChromaticStory(WebWithLabel);

// *****************************************************************************

export const AndroidWithLabelLeft = Template.bind({});
AndroidWithLabelLeft.args = {
	label: 'Get alerts on this story',
	labelPosition: 'left',
	platform: 'android',
};
asChromaticStory(AndroidWithLabelLeft);

// *****************************************************************************

export const IosWithLabelLeft = Template.bind({});
IosWithLabelLeft.args = {
	label: 'Get alerts on this story',
	labelPosition: 'left',
	platform: 'ios',
};
asChromaticStory(IosWithLabelLeft);

// *****************************************************************************

export const WebWithLabelLeft = Template.bind({});
WebWithLabelLeft.args = {
	label: 'Get alerts on this story',
	labelPosition: 'left',
	platform: 'web',
};
asChromaticStory(WebWithLabelLeft);
