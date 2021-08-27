import { css } from '@emotion/react';
import { Design, Display, Pillar, Special } from '@guardian/types';
import React from 'react';
import { Button } from './index';

export default {
	title: 'Editorial/src-ed-button/Button',
	component: Button,
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
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</Button>
		<Button
			priority="primary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</Button>
	</Row>
);
Primary.story = { name: 'when primary' };

export const Secondary = () => (
	<Row>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</Button>
		<Button
			priority="secondary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</Button>
	</Row>
);
Secondary.story = { name: 'when secondary' };

export const Tertiary = () => (
	<Row>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</Button>
		<Button
			priority="tertiary"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</Button>
	</Row>
);
Tertiary.story = { name: 'when tertiary' };

export const Subdued = () => (
	<Row>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.News,
			}}
		>
			News
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Sport,
			}}
		>
			Sport
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Culture,
			}}
		>
			Culture
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Lifestyle,
			}}
		>
			Lifestyle
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Pillar.Opinion,
			}}
		>
			Opinion
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.SpecialReport,
			}}
		>
			SpecialReport
		</Button>
		<Button
			priority="subdued"
			size="small"
			format={{
				display: Display.Standard,
				design: Design.Article,
				theme: Special.Labs,
			}}
		>
			Labs
		</Button>
	</Row>
);
Subdued.story = { name: 'when subdued' };

export const Overrides = () => (
	<Row>
		<Button
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
		</Button>
	</Row>
);
Overrides.story = { name: 'with overrides overriden' };

export const DefaultStory = () => (
	<Row>
		<Button onClick={() => null}>Default</Button>
	</Row>
);
DefaultStory.story = { name: 'with defaults' };
