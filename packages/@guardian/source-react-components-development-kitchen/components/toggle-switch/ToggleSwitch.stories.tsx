import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asPlayground,
	asChromaticStory,
} from '../../../../../lib/story-intents';
import { useState } from 'react';
import { css } from '@emotion/react';

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
			onClick={(e) => {
				setChecked(!checked);
			}}
		/>
	);
};

const DarkBackgroundTemplate: Story<ToggleSwitchProps> = (
	args: ToggleSwitchProps,
) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<div
			css={css`
				background: rgb(139, 0, 0);
			`}
		>
			<ToggleSwitch
				{...args}
				checked={checked}
				onClick={(e) => {
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

export const SlimNoLabelLightBackground = Template.bind({});
SlimNoLabelLightBackground.args = {
	size: 'slim',
};
asChromaticStory(SlimNoLabelLightBackground);

// *****************************************************************************

export const MediumNoLabelLightBackground = Template.bind({});
MediumNoLabelLightBackground.args = {
	size: 'medium',
};
asChromaticStory(MediumNoLabelLightBackground);

// *****************************************************************************

export const SlimLabelLightBackground = Template.bind({});
SlimLabelLightBackground.args = {
	label: 'Get alerts on this story',
	size: 'slim',
	isDarkBackground: false,
};
asChromaticStory(SlimLabelLightBackground);

// *****************************************************************************

export const SlimLabelDarkBackground = DarkBackgroundTemplate.bind({});
SlimLabelDarkBackground.args = {
	label: 'Get alerts on this story',
	size: 'slim',
	isDarkBackground: true,
};
asChromaticStory(SlimLabelDarkBackground);

// *****************************************************************************

export const MediumLabelLightBackground = Template.bind({});
MediumLabelLightBackground.args = {
	label: 'Get alerts on this story',
	size: 'medium',
	isDarkBackground: false,
};
asChromaticStory(MediumLabelLightBackground);

// *****************************************************************************

export const MediumLabelDarkBackground = DarkBackgroundTemplate.bind({});
MediumLabelDarkBackground.args = {
	label: 'Get alerts on this story',
	size: 'medium',
	isDarkBackground: true,
};
asChromaticStory(MediumLabelDarkBackground);
