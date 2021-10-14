import { css } from '@emotion/react';
import { neutral } from '@guardian/src-foundations';
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

// *****************************************************************************
const stylesForDarkBackground = css`
	background: rgb(139, 0, 0);
	button[aria-checked='false'] {
		background-color: rgba(255, 255, 255, 0.5);
	}

	label {
		color: ${neutral[100]};
	}
`;

export const SlimLabelCssOverrideForDarkBackground = Template.bind({});
SlimLabelCssOverrideForDarkBackground.args = {
	label: 'Get alerts on this story',
	size: 'slim',
	cssOverrides: stylesForDarkBackground,
};
asChromaticStory(SlimLabelCssOverrideForDarkBackground);

// *****************************************************************************

export const MediumLabelCssOverrideForDarkBackground = Template.bind({});
MediumLabelCssOverrideForDarkBackground.args = {
	label: 'Get alerts on this story',
	size: 'medium',
	cssOverrides: stylesForDarkBackground,
};
asChromaticStory(MediumLabelCssOverrideForDarkBackground);
