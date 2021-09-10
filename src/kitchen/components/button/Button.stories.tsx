import { css } from '@emotion/react';
import { Design, Display, Pillar, Special } from '@guardian/types';
import { Button, ButtonProps } from './index';
import { SvgCross } from '@guardian/src-icons';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

const defaultFormat = {
	display: Display.Standard,
	design: Design.Article,
};

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Button',
	component: Button,
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
		icon: undefined,
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

const Template: Story = (args: ButtonProps) => {
	// Providing any value for cssOverrides, even undefined, overrides the custom styles
	// for the editorial button so only pass through if it's defined
	const { cssOverrides, ...rest } = args;
	const props = rest as ButtonProps;

	if (cssOverrides) {
		props.cssOverrides = cssOverrides;
	}

	return <Button {...props}>Click Me</Button>;
};

export const Playground = Template.bind({});
Playground.args = {
	format: 'news',
};
asPlayground(Playground);

const pillars = [
	Pillar.News,
	Pillar.Sport,
	Pillar.Culture,
	Pillar.Lifestyle,
	Pillar.Opinion,
	Special.SpecialReport,
	Special.Labs,
];

const RowTemplate: Story<ButtonProps> = (args: Partial<ButtonProps>) => (
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
asChromaticStory(WhenPrimary);

// *****************************************************************************

export const WhenSecondary = RowTemplate.bind({});
WhenSecondary.args = {
	priority: 'secondary',
	size: 'small',
};
asChromaticStory(WhenSecondary);

// *****************************************************************************

export const WhenTertiary = RowTemplate.bind({});
WhenTertiary.args = {
	priority: 'tertiary',
	size: 'small',
};
asChromaticStory(WhenTertiary);

// *****************************************************************************

export const WhenSubdued = RowTemplate.bind({});
WhenSubdued.args = {
	priority: 'subdued',
	size: 'small',
};
asChromaticStory(WhenSubdued);

// *****************************************************************************

export const WithOverrides = Template.bind({});
WithOverrides.args = {
	cssOverrides: css`
		background-color: pink;
	`,
};
asChromaticStory(WithOverrides);

// *****************************************************************************

export const WithDefaults = Template.bind({});
WithDefaults.args = {};
asChromaticStory(WithDefaults);
