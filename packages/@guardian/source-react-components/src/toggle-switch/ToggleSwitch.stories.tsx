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

// *****************************************************************************

export const AndroidWithBorder = Template.bind({});
AndroidWithBorder.args = {
	label: 'Get alerts on this story',
	platform: 'android',
	labelBorder: true,
};
asChromaticStory(AndroidWithBorder);

// *****************************************************************************

export const IosWithBorder = Template.bind({});
IosWithBorder.args = {
	label: 'Get alerts on this story',
	platform: 'ios',
	labelBorder: true,
};
asChromaticStory(IosWithBorder);

// *****************************************************************************

export const WebWithBorder = Template.bind({});
WebWithBorder.args = {
	label: 'Get alerts on this story',
	platform: 'web',
	labelBorder: true,
};
asChromaticStory(WebWithBorder);

// *****************************************************************************

export const AndroidWithFormat = PillarsTemplate.bind({});
AndroidWithFormat.args = {
	label: 'Get alerts on this story',
	platform: 'android',
};
asChromaticStory(AndroidWithFormat);

// *****************************************************************************

export const IosWithFormat = PillarsTemplate.bind({});
IosWithFormat.args = {
	label: 'Get alerts on this story',
	platform: 'ios',
};
asChromaticStory(IosWithFormat);

// *****************************************************************************

export const WebWithFormat = PillarsTemplate.bind({});
WebWithFormat.args = {
	label: 'Get alerts on this story',
	platform: 'web',
};
asChromaticStory(WebWithFormat);

// *****************************************************************************

export const WebWithTooltip = Template.bind({});
WebWithTooltip.args = {
	label: 'Get alerts on this story',
	platform: 'web',
	noJs: true,
};
asChromaticStory(WebWithTooltip);
