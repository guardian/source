import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import {
	culture,
	labs,
	lifestyle,
	news,
	opinion,
	specialReport,
	sport,
} from '@guardian/source-foundations';
import { useState } from 'react';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { ToggleSwitch } from './ToggleSwitch';
import type { ToggleSwitchProps } from './ToggleSwitch';

const decideBackgroundColor = (format?: ArticleFormat) => {
	if (format) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[200];
			case ArticlePillar.Culture:
				return culture[200];
			case ArticlePillar.Lifestyle:
				return lifestyle[300];
			case ArticlePillar.Sport:
				return sport[100];
			case ArticlePillar.Opinion:
				return opinion[200];
			case ArticleSpecial.Labs:
				return labs[200];
			case ArticleSpecial.SpecialReport:
				return specialReport[200];
			default:
				return news[200];
		}
	}
	return null;
};

const defaultFormat = {
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
};

const pillars = [
	ArticlePillar.News,
	ArticlePillar.Sport,
	ArticlePillar.Culture,
	ArticlePillar.Lifestyle,
	ArticlePillar.Opinion,
	ArticleSpecial.SpecialReport,
	ArticleSpecial.Labs,
];

export default {
	title: 'Packages/source-react-components/ToggleSwitch',
	component: ToggleSwitch,
};

const PillarsTemplate: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
			`}
		>
			{pillars.map((pillar) => (
				<Template
					key={pillar}
					{...args}
					format={{ ...defaultFormat, theme: pillar }}
				/>
			))}
		</div>
	);
};

const Template: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => {
	const [checked, setChecked] = useState(args.checked);
	return (
		<div
			css={css`
				padding: 10px;
				margin: 10px 0;
				width: 350px;
				background-color: ${decideBackgroundColor(args.format)};
			`}
		>
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

export const NoLabel = Template.bind({});
asChromaticStory(NoLabel);

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

export const WithBorder = Template.bind({});
WithBorder.args = {
	label: 'Get alerts on this story',
	labelBorder: true,
};
asChromaticStory(WithBorder);

// *****************************************************************************

export const WithFormat = PillarsTemplate.bind({});
WithFormat.args = {
	label: 'Get alerts on this story',
};
asChromaticStory(WithFormat);

// *****************************************************************************

export const WithTooltip = Template.bind({});
WithTooltip.args = {
	label: 'Get alerts on this story',
	noJs: true,
};
asChromaticStory(WithTooltip);
