import { Design, Display, Pillar, Special } from '@guardian/types';
import { QuoteIcon, QuoteIconProps } from './QuoteIcon';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

const defaultFormat = {
	display: Display.Standard,
	design: Design.Article,
};

export default {
	title: 'Kitchen/source-react-components-development-kitchen/QuoteIcon',
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
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asPlayground(Playground);

// *****************************************************************************

export const News = Template.bind({});
News.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asChromaticStory(News);

// *****************************************************************************

export const Sport = Template.bind({});
Sport.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.Sport,
	},
};
asChromaticStory(Sport);

// *****************************************************************************

export const Culture = Template.bind({});
Culture.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.Culture,
	},
};
asChromaticStory(Culture);

// *****************************************************************************

export const Lifestyle = Template.bind({});
Lifestyle.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.Lifestyle,
	},
};
asChromaticStory(Lifestyle);

// *****************************************************************************

export const Opinion = Template.bind({});
Opinion.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.Opinion,
	},
};
asChromaticStory(Opinion);

// *****************************************************************************

export const SpecialReport = Template.bind({});
SpecialReport.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Special.SpecialReport,
	},
};
asChromaticStory(SpecialReport);

// *****************************************************************************

export const Labs = Template.bind({});
Labs.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Special.Labs,
	},
};
asChromaticStory(Labs);

// *****************************************************************************

export const XSmall = Template.bind({});
XSmall.args = {
	size: 'xsmall',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asChromaticStory(XSmall);

// *****************************************************************************

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asChromaticStory(Small);

// *****************************************************************************

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asChromaticStory(Medium);

// *****************************************************************************

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	format: {
		display: Display.Standard,
		design: Design.Article,
		theme: Pillar.News,
	},
};
asChromaticStory(Large);
