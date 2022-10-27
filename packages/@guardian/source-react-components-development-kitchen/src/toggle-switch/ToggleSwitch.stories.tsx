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
import type { Story } from '@storybook/react';
import { useState } from 'react';
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
	title: 'Packages/source-react-components-development-kitchen/ToggleSwitch',
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

export const WithNoLabel = Template.bind({});

// *****************************************************************************

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'Get alerts on this story',
};

// *****************************************************************************

export const WithLabelLeft = Template.bind({});
WithLabelLeft.args = {
	label: 'Get alerts on this story',
	labelPosition: 'left',
};

// *****************************************************************************

export const WithBorder = Template.bind({});
WithBorder.args = {
	label: 'Get alerts on this story',
	labelBorder: true,
};

// *****************************************************************************

export const WithFormat = PillarsTemplate.bind({});
WithFormat.args = {
	label: 'Get alerts on this story',
};

// *****************************************************************************

export const WithMediumFont = Template.bind({});
WithMediumFont.args = {
	label: 'Get alerts on this story',
	fontSize: 'medium',
};

// *****************************************************************************

export const WithBoldFont = Template.bind({});
WithBoldFont.args = {
	label: 'Get alerts on this story',
	fontWeight: 'bold',
};

// *****************************************************************************

export const WithBoldMediumFont = Template.bind({});
WithBoldMediumFont.args = {
	label: 'Get alerts on this story',
	fontWeight: 'bold',
	fontSize: 'medium',
};

// *****************************************************************************

export const WithMediumFontAndBorder = Template.bind({});
WithMediumFontAndBorder.args = {
	label: 'Get alerts on this story',
	fontSize: 'medium',
	labelBorder: true,
};

// *****************************************************************************

export const WithBoldMediumFontAndBorder = Template.bind({});
WithBoldMediumFontAndBorder.args = {
	label: 'Get alerts on this story',
	fontWeight: 'bold',
	fontSize: 'medium',
	labelBorder: true,
};
