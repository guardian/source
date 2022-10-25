import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { ToggleSwitchApps } from './ToggleSwitchApps';
import type { ToggleSwitchAppsProps } from './ToggleSwitchApps';

export default {
	title:
		'Packages/source-react-components-development-kitchen/ToggleSwitchApps',
	component: ToggleSwitchApps,
	args: {},
};

const Template: Story<ToggleSwitchAppsProps> = (
	args: ToggleSwitchAppsProps,
) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<ToggleSwitchApps
			{...args}
			checked={checked}
			onClick={() => {
				setChecked(!checked);
			}}
		/>
	);
};

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
