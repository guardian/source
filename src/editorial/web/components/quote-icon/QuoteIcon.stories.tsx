import { Design, Display, Pillar, Special } from '@guardian/types';
import { QuoteIcon, QuoteIconProps } from './QuoteIcon';
import type { Story } from '../../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../../lib/story-intents';

const defaultFormat = {
	display: Display.Standard,
	design: Design.Article,
};

export default {
	title: 'Editorial/src-ed-quote-icon/QuoteIcon',
	component: QuoteIcon,
	argTypes: {
		format: {
			options: [
				'news',
				'sport',
				'culture',
				'lifestyle',
				'opinion',
				'special_report',
				'labs',
			],
			mapping: {
				news: { ...defaultFormat, theme: Pillar.News },
				sport: { ...defaultFormat, theme: Pillar.Sport },
				culture: { ...defaultFormat, theme: Pillar.Culture },
				lifestyle: { ...defaultFormat, theme: Pillar.Lifestyle },
				opinion: { ...defaultFormat, theme: Pillar.Opinion },
				special_report: {
					...defaultFormat,
					theme: Special.SpecialReport,
				},
				labs: { ...defaultFormat, theme: Special.Labs },
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story<QuoteIconProps> = (args: QuoteIconProps) => (
	<div>
		<QuoteIcon {...args} />
		<span>I look like a buffoon. I feel incredible. And then I vomit</span>
	</div>
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
	size: 'xsmall',
	format: 'news',
};
asPlayground(Playground);

// *****************************************************************************

export const News = Template.bind({});
News.args = {
	size: 'medium',
	format: 'news',
};
asChromaticStory(News);

// *****************************************************************************

export const Sport = Template.bind({});
Sport.args = {
	size: 'medium',
	format: 'sport',
};
asChromaticStory(Sport);

// *****************************************************************************

export const Culture = Template.bind({});
Culture.args = {
	size: 'medium',
	format: 'culture',
};
asChromaticStory(Culture);

// *****************************************************************************

export const Lifestyle = Template.bind({});
Lifestyle.args = {
	size: 'medium',
	format: 'lifestyle',
};
asChromaticStory(Lifestyle);

// *****************************************************************************

export const Opinion = Template.bind({});
Opinion.args = {
	size: 'medium',
	format: 'opinion',
};
asChromaticStory(Opinion);

// *****************************************************************************

export const SpecialReport = Template.bind({});
SpecialReport.args = {
	size: 'medium',
	format: 'special_report',
};
asChromaticStory(SpecialReport);

// *****************************************************************************

export const Labs = Template.bind({});
Labs.args = {
	size: 'medium',
	format: 'labs',
};
asChromaticStory(Labs);

// *****************************************************************************

export const XSmall = Template.bind({});
XSmall.args = {
	size: 'xsmall',
	format: 'news',
};
asChromaticStory(XSmall);

// *****************************************************************************

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	format: 'news',
};
asChromaticStory(Small);

// *****************************************************************************

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	format: 'news',
};
asChromaticStory(Medium);

// *****************************************************************************

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	format: 'news',
};
asChromaticStory(Large);
