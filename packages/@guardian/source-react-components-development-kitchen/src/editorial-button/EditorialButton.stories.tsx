import { css } from '@emotion/react';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { SvgCross } from '@guardian/source-react-components';
import type { Story } from '@storybook/react';
import { EditorialButton } from './EditorialButton';
import type { EditorialButtonProps } from './EditorialButton';

const defaultFormat = {
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
};

export default {
	title: 'Packages/source-react-components-development-kitchen/EditorialButton',
	component: EditorialButton,
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
		icon: {
			options: ['undefined', 'cross'],
			mapping: {
				undefined: undefined,
				cross: <SvgCross />,
			},
			control: { type: 'radio' },
		},
	},
	args: {
		size: 'default',
		hideLabel: false,
		icon: 'undefined',
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

const Template: Story = (args: EditorialButtonProps) => {
	// Providing any value for cssOverrides, even undefined, overrides the custom styles
	// for the editorial button so only pass through if it's defined
	const { cssOverrides, ...rest } = args;
	const props = rest as EditorialButtonProps;

	if (cssOverrides) {
		props.cssOverrides = cssOverrides;
	}

	return <EditorialButton {...props}>Click me</EditorialButton>;
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

const RowTemplate: Story<EditorialButtonProps> = (
	args: Partial<EditorialButtonProps>,
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
				key={pillar}
				{...args}
				format={{ ...defaultFormat, theme: pillar }}
			/>
		))}
	</div>
);

export const WhenPrimary = RowTemplate.bind({});
WhenPrimary.args = {
	priority: 'primary',
	size: 'small',
};

// *****************************************************************************

export const WhenSecondary = RowTemplate.bind({});
WhenSecondary.args = {
	priority: 'secondary',
	size: 'small',
};

// *****************************************************************************

export const WhenTertiary = RowTemplate.bind({});
WhenTertiary.args = {
	priority: 'tertiary',
	size: 'small',
};

// *****************************************************************************

export const WhenSubdued = RowTemplate.bind({});
WhenSubdued.args = {
	priority: 'subdued',
	size: 'small',
};

// *****************************************************************************

export const WithOverrides = Template.bind({});
WithOverrides.args = {
	cssOverrides: css`
		background-color: pink;
	`,
};

// *****************************************************************************

export const WithDefaults = Template.bind({});
WithDefaults.args = {};
