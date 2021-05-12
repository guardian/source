import React from 'react';
import { css } from '@emotion/react';

import { Design, Display, Pillar, Special } from '@guardian/types';
import { headline } from '@guardian/src-foundations/typography';

import { QuoteIcon } from './index';

export default {
	title: 'Editorial/QuoteIcon',
	component: QuoteIcon,
};

const SmallHeadline = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			${headline.xxxsmall()};
			display: inline;
		`}
	>
		{children}
	</div>
);

const Headline = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			${headline.xxxsmall()};
			display: inline;
		`}
	>
		{children}
	</div>
);

const LargeHeadline = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			${headline.xsmall()};
			display: inline;
		`}
	>
		{children}
	</div>
);

export const Primary = () => (
	<>
		<h1>XSmall</h1>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.News,
				}}
			/>
			<span>
				I look like a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Sport,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Culture,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Lifestyle,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Opinion,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.SpecialReport,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>

		<div>
			<QuoteIcon
				size="xsmall"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.Labs,
				}}
			/>
			<span>
				I look life a buffoon. I feel incredible. And then I vomit
			</span>
		</div>
		<h1>Small</h1>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.News,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Sport,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Culture,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Lifestyle,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Opinion,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.SpecialReport,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>

		<div>
			<QuoteIcon
				size="small"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.Labs,
				}}
			/>
			<SmallHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</SmallHeadline>
		</div>
		<h1>Medium</h1>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.News,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Sport,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Culture,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Lifestyle,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Opinion,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.SpecialReport,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>
		<div>
			<QuoteIcon
				size="medium"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.Labs,
				}}
			/>
			<Headline>
				I look life a buffoon. I feel incredible. And then I vomit
			</Headline>
		</div>

		<h1>Large</h1>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.News,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Sport,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Culture,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Lifestyle,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Pillar.Opinion,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.SpecialReport,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
		<div>
			<QuoteIcon
				size="large"
				format={{
					display: Display.Standard,
					design: Design.Article,
					theme: Special.Labs,
				}}
			/>
			<LargeHeadline>
				I look life a buffoon. I feel incredible. And then I vomit
			</LargeHeadline>
		</div>
	</>
);
Primary.story = { name: 'when primary' };
