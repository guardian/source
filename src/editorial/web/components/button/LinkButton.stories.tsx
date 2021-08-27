import { css } from '@emotion/react';
import { Design, Display, Pillar, Special } from '@guardian/types';
import React from 'react';
import { LinkButton } from './index';

export default {
	title: 'Editorial/src-ed-button/LinkButton',
	component: LinkButton,
};

const Row = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 800px;
		`}
	>
		{children}
	</div>
);

export const Primary = () => (
	<Row>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</LinkButton>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</LinkButton>
	</Row>
);
Primary.story = { name: 'when primary' };

export const Secondary = () => (
	<Row>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</LinkButton>
		<LinkButton
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</LinkButton>
	</Row>
);
Secondary.story = { name: 'when secondary' };

export const Tertiary = () => (
	<Row>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</LinkButton>
		<LinkButton
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</LinkButton>
	</Row>
);
Tertiary.story = { name: 'when tertiary' };

export const Subdued = () => (
	<Row>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</LinkButton>
		<LinkButton
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</LinkButton>
	</Row>
);
Subdued.story = { name: 'when subdued' };

export const Overrides = () => (
	<Row>
		<LinkButton
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
			cssOverrides={css`
				background-color: pink;
			`}
		>
			Pink News
		</LinkButton>
	</Row>
);
Overrides.story = { name: 'with overrides overriden' };

export const DefaultStory = () => (
	<Row>
		<LinkButton onClick={() => null}>Default</LinkButton>
	</Row>
);
DefaultStory.story = { name: 'with defaults' };
