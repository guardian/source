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
};

const Template: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<div style={{ height: '100px' }}>
			<ToggleSwitch
				{...args}
				checked={checked}
				onClick={() => {
					setChecked(!checked);
				}}
			/>
		</div>
	);
};

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const WithNoLabel = Template.bind({});
asChromaticStory(WithNoLabel);

// *****************************************************************************

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'Get alerts on this story',
};
asChromaticStory(WithLabel);

// *****************************************************************************

export const WithLabelLeft = Template.bind({});
WithLabelLeft.args = {
	label: 'Get alerts on this story',
	labelPosition: 'left',
};
asChromaticStory(WithLabelLeft);

// *****************************************************************************
