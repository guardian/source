import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asPlayground,
	asChromaticStory,
} from '../../../../../lib/story-intents';
import { useState } from 'react';
import { ArticlePillar, ArticleSpecial } from '@guardian/libs';
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

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const NoLabel = Template.bind({});
asChromaticStory(NoLabel);

// *****************************************************************************

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'Get alerts on this story',
};
asChromaticStory(WithLabel);

// *****************************************************************************

export const Slim = Template.bind({});
Slim.args = {
	label: 'Get alerts on this story',
	size: 'slim',
};
asChromaticStory(Slim);

// *****************************************************************************

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
	label: 'Get alerts on this story',
	defaultChecked: true,
};
asChromaticStory(DefaultChecked);

// *****************************************************************************
const pillars = [
	{ pillar: ArticlePillar.News, label: 'News' },
	{ pillar: ArticlePillar.Sport, label: 'Sport' },
	{ pillar: ArticlePillar.Culture, label: 'Culture' },
	{ pillar: ArticlePillar.Lifestyle, label: 'Lifestyle' },
	{ pillar: ArticlePillar.Opinion, label: 'Opinion' },
	{ pillar: ArticleSpecial.SpecialReport, label: 'SpecialReport' },
	{ pillar: ArticleSpecial.Labs, label: 'Labs' },
];
const RowTemplate: Story<ToggleSwitchProps> = (
	args: Partial<ToggleSwitchProps>,
) => (
	<div
		css={css`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 800px;
		`}
	>
		{pillars.map((pillar) => (
			<Template
				key={pillar.pillar}
				{...args}
				theme={pillar.pillar}
				label={pillar.label}
			/>
		))}
	</div>
);

export const AllPillarsUnchecked = RowTemplate.bind({});
asChromaticStory(AllPillarsUnchecked);

// *****************************************************************************

export const AllPillarsChecked = RowTemplate.bind({});
AllPillarsChecked.args = {
	defaultChecked: true,
};
asChromaticStory(AllPillarsChecked);

// *****************************************************************************

export const AllPillarsSlimUnchecked = RowTemplate.bind({});
AllPillarsSlimUnchecked.args = {
	size: 'slim',
};
asChromaticStory(AllPillarsSlimUnchecked);

// *****************************************************************************

export const AllPillarsSlimChecked = RowTemplate.bind({});
AllPillarsSlimChecked.args = {
	defaultChecked: true,
	size: 'slim',
};
asChromaticStory(AllPillarsSlimChecked);
