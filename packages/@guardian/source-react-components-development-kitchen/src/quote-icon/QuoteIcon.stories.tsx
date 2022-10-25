import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { QuoteIconProps } from './QuoteIcon';
import { QuoteIcon } from './QuoteIcon';

const defaultFormat = {
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
};

export default {
	title: 'Packages/source-react-components-development-kitchen/QuoteIcon',
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
				news: { ...defaultFormat, theme: ArticlePillar.News },
				sport: { ...defaultFormat, theme: ArticlePillar.Sport },
				culture: { ...defaultFormat, theme: ArticlePillar.Culture },
				lifestyle: { ...defaultFormat, theme: ArticlePillar.Lifestyle },
				opinion: { ...defaultFormat, theme: ArticlePillar.Opinion },
				special_report: {
					...defaultFormat,
					theme: ArticleSpecial.SpecialReport,
				},
				labs: { ...defaultFormat, theme: ArticleSpecial.Labs },
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
