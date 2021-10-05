import { AlertSwitch, AlertSwitchProps } from './AlertSwitch';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asPlayground,
	asChromaticStory,
} from '../../../../../lib/story-intents';
import { useState } from 'react';
import { ArticlePillar, ArticleSpecial } from '@guardian/libs';
import { css } from '@emotion/react';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/AlertSwitch',
	component: AlertSwitch,
	args: {},
};

const Template: Story<AlertSwitchProps> = (args: AlertSwitchProps) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<AlertSwitch
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
const RowTemplate: Story<AlertSwitchProps> = (
	args: Partial<AlertSwitchProps>,
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
